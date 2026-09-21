(async () => {
  const CART_STORAGE_KEY = 'almatierra-cart-v1';

  const productGrid = document.querySelector('#product-grid');
  const productTemplate = document.querySelector('#product-card-template');
  const variantRowTemplate = document.querySelector('#variant-row-template');
  const categoriesGroup = document.querySelector('#categories');
  const emptyState = document.querySelector('#empty-state');
  const resultCount = document.querySelector('#result-count');

  /* ---------- datos ---------- */

  const loadJson = async (path) => {
    const response = await fetch(path);
    if (!response.ok) throw new Error(`No se pudo cargar ${path}.`);
    return response.json();
  };

  let config;
  let products;
  try {
    [config, products] = await Promise.all([loadJson('config.json'), loadJson('products.json')]);
  } catch (error) {
    productGrid.setAttribute('aria-busy', 'false');
    emptyState.hidden = false;
    emptyState.querySelector('h3').textContent = 'No se pudo cargar el catálogo';
    emptyState.querySelector('p').textContent = 'Refrescá la página o escribinos por WhatsApp.';
    console.error(error);
    return;
  }

  const labels = config.labels;
  const orderCopy = config.order;
  const sellerWhatsApp = config.whatsapp;

  const formatCurrency = (value) => new Intl.NumberFormat(config.currency.locale, {
    style: 'currency',
    currency: config.currency.code,
    maximumFractionDigits: 0,
  }).format(value);

  const productsById = new Map(products.map((product) => [product.id, product]));
  const variantItems = new Map();
  products.forEach((product) => {
    product.variants.forEach((variant) => {
      const itemId = `${product.id}--${variant.id}`;
      variantItems.set(itemId, {
        id: itemId,
        productId: product.id,
        productName: product.name,
        variantLabel: variant.label,
        unitPrice: variant.price ?? null,
        availability: product.availability?.label || null,
      });
    });
  });

  /* ---------- carrito ---------- */

  const cartItems = new Map();

  const readStoredCart = () => {
    try {
      const raw = window.localStorage.getItem(CART_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (error) {
      return [];
    }
  };

  const writeStoredCart = () => {
    try {
      const payload = [...cartItems.values()].map((item) => ({ id: item.id, quantity: item.quantity }));
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(payload));
    } catch (error) {
      /* almacenamiento bloqueado: el carrito sigue vivo solo en memoria */
    }
  };

  /* El precio nunca se toma de lo guardado: se rehidrata del catálogo,
     si no un carrito viejo cotizaría a precio viejo. */
  const restoreCart = () => {
    readStoredCart().forEach((entry) => {
      const catalogItem = variantItems.get(entry?.id);
      if (!catalogItem) return;
      const cap = catalogItem.unitPrice == null ? 1 : Infinity;
      const quantity = Math.min(cap, Math.max(0, Math.floor(Number(entry.quantity) || 0)));
      if (quantity > 0) cartItems.set(catalogItem.id, { ...catalogItem, quantity });
    });
  };

  const getPricedUnits = () => [...cartItems.values()]
    .filter((item) => item.unitPrice != null)
    .reduce((total, item) => total + item.quantity, 0);
  const getQuoteUnits = () => [...cartItems.values()]
    .filter((item) => item.unitPrice == null)
    .reduce((total, item) => total + item.quantity, 0);
  const getTotalUnits = () => getPricedUnits() + getQuoteUnits();
  const getTotalPrice = () => [...cartItems.values()]
    .reduce((total, item) => total + ((item.unitPrice ?? 0) * item.quantity), 0);

  /* ---------- variedades ---------- */

  /* Un unico constructor del control: catalogo, ficha y carrito usan el
     mismo marcado y el mismo data-item-id, asi updateVariantControl los
     sincroniza a los tres sin codigo extra. */
  const buildVariantControl = (itemId, productName, variantLabel) => {
    const row = variantRowTemplate.content.firstElementChild.cloneNode(true);
    const control = row.querySelector('.variant-control');
    control.dataset.itemId = itemId;
    control.querySelector('.variant-decrease').setAttribute('aria-label', `Quitar una unidad de ${productName}, ${variantLabel}`);
    control.querySelector('.variant-quantity').setAttribute('aria-label', `Cantidad de ${productName}, ${variantLabel}`);
    control.querySelector('.variant-increase').setAttribute('aria-label', `Agregar ${productName}, ${variantLabel}`);
    return control;
  };

  const buildVariantRow = (product, variant) => {
    const itemId = `${product.id}--${variant.id}`;
    const row = variantRowTemplate.content.firstElementChild.cloneNode(true);
    const label = row.querySelector('.variant-label');
    const price = row.querySelector('.variant-price');
    const control = row.querySelector('.variant-control');
    const decrease = row.querySelector('.variant-decrease');
    const quantity = row.querySelector('.variant-quantity');
    const increase = row.querySelector('.variant-increase');

    control.dataset.itemId = itemId;
    label.textContent = variant.label;

    if (variant.price == null) {
      price.textContent = labels.quotePrice;
      price.classList.add('is-quote');
      price.title = labels.quoteNote;
    } else {
      price.textContent = formatCurrency(variant.price);
    }

    decrease.setAttribute('aria-label', `Quitar ${product.name}, ${variant.label}`);
    quantity.setAttribute('aria-label', `Cantidad de ${product.name}, ${variant.label}`);
    increase.setAttribute('aria-label', `Agregar ${product.name}, ${variant.label}`);
    return row;
  };

  /* Recorre TODAS las instancias del mismo itemId: así la tarjeta y el
     modal quedan sincronizados sin código extra. */
  const updateVariantControl = (itemId) => {
    const catalogItem = variantItems.get(itemId);
    const quantity = cartItems.get(itemId)?.quantity || 0;
    const isQuote = catalogItem?.unitPrice == null;

    document.querySelectorAll(`.variant-control[data-item-id="${itemId}"]`).forEach((control) => {
      const decrease = control.querySelector('.variant-decrease');
      const output = control.querySelector('.variant-quantity');
      const increase = control.querySelector('.variant-increase');

      /* El foco vive en el "−" que está por ocultarse: moverlo antes,
         si no cae al body y el teclado pierde el lugar. */
      if (quantity === 0 && document.activeElement === decrease) increase.focus();

      output.value = String(quantity);
      output.textContent = String(quantity);
      decrease.hidden = quantity === 0;
      output.hidden = quantity === 0;
      increase.disabled = isQuote && quantity >= 1;
      increase.title = increase.disabled ? labels.quoteCapReached : '';
    });
  };

  const adjustItem = (itemId, change, restoreCartFocus = false) => {
    const catalogItem = variantItems.get(itemId);
    if (!catalogItem) return;
    const currentItem = cartItems.get(itemId);
    const cap = catalogItem.unitPrice == null ? 1 : Infinity;
    const nextQuantity = Math.min(cap, Math.max(0, (currentItem?.quantity || 0) + change));

    if (nextQuantity === 0) cartItems.delete(itemId);
    else cartItems.set(itemId, { ...catalogItem, quantity: nextQuantity });

    updateVariantControl(itemId);
    renderCart();

    if (restoreCartFocus) {
      /* La linea pudo desaparecer del listado: si ya no esta, el foco va
         al resumen en vez de caer al body. */
      const replacement = cartDialog
        .querySelector(`.variant-control[data-item-id="${itemId}"] .variant-decrease:not([hidden])`);
      (replacement || cartSummary).focus();
    }
  };

  /* ---------- tarjetas ---------- */

  products.forEach((product) => {
    const card = productTemplate.content.firstElementChild.cloneNode(true);
    const media = card.querySelector('.product-media');
    const variants = card.querySelector('.product-variants');
    const open = card.querySelector('.product-open');
    const [cover] = product.images;

    card.dataset.category = product.category;
    card.dataset.productId = product.id;
    /* La descripción ya no vive en la tarjeta: sin esto la búsqueda se
       degrada en silencio al dejar de matchear contra textContent. */
    card.dataset.search = [
      product.name,
      product.searchTerms,
      product.tagline,
      product.description,
      product.brand,
      product.categoryLabel,
      product.type,
      product.availability?.label,
      product.availability?.detail,
    ].filter(Boolean).join(' ');

    const image = document.createElement('img');
    image.src = cover.src;
    image.alt = cover.alt;
    image.loading = 'lazy';
    image.decoding = 'async';
    media.insertBefore(image, media.lastElementChild);
    media.querySelector('figcaption').textContent = product.caption || product.name;

    card.querySelector('.product-meta').textContent = product.brand
      ? `${product.categoryLabel} / ${product.brand}`
      : `${product.categoryLabel} / ${product.type}`;
    card.querySelector('.product-name').textContent = product.name;

    const availability = card.querySelector('.product-availability');
    availability.textContent = product.availability?.label || '';
    availability.title = product.availability?.detail || '';
    availability.hidden = !product.availability;

    open.setAttribute('aria-label', `Ver detalle de ${product.name}`);
    open.dataset.productId = product.id;

    variants.setAttribute('aria-label', `${product.variantGroupLabel || labels.variantGroupFallback} de ${product.name}`);
    product.variants.forEach((variant) => variants.append(buildVariantRow(product, variant)));

    productGrid.append(card);
  });

  productGrid.dataset.rendered = 'true';
  productGrid.setAttribute('aria-busy', 'false');

  /* ---------- filtros derivados de los datos ---------- */

  const categories = [];
  products.forEach((product) => {
    if (!categories.some((entry) => entry.id === product.category)) {
      categories.push({ id: product.category, label: product.categoryLabel });
    }
  });

  [{ id: 'all', label: labels.allCategories }, ...categories].forEach((category, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'category-button';
    button.dataset.filter = category.id;
    button.setAttribute('aria-pressed', String(index === 0));
    button.textContent = category.label;
    categoriesGroup.append(button);
  });

  /* ---------- referencias del resto de la página ---------- */

  const menuButton = document.querySelector('.menu-button');
  const navigation = document.querySelector('.primary-nav');
  const firstNavLink = navigation.querySelector('a');
  const categoryButtons = [...document.querySelectorAll('.category-button')];
  const productCards = [...document.querySelectorAll('.product-card')];
  const searchForm = document.querySelector('.search-form');
  const search = document.querySelector('#product-search');
  const cartButton = document.querySelector('.icon-button[aria-label^="Abrir lista de consulta"]');
  const cartCount = document.querySelector('.cart-count');
  const cartDialog = document.querySelector('#cart-dialog');
  const cartSummary = document.querySelector('#cart-summary');
  const cartTotal = document.querySelector('#cart-total');
  const cartItemsList = document.querySelector('#cart-items');
  const cartQuoteList = document.querySelector('#cart-quote-items');
  const cartQuoteTotal = document.querySelector('#cart-quote-total');
  const cartPricedGroup = document.querySelector('#cart-priced-group');
  const cartQuoteGroup = document.querySelector('#cart-quote-group');
  const cartFab = document.querySelector('#cart-fab');
  const cartFabCount = document.querySelector('#cart-fab-count');
  const cartClear = document.querySelector('#cart-clear');
  const cartClearRow = document.querySelector('#cart-clear-row');
  const cartCloseButtons = [...document.querySelectorAll('.cart-close')];
  const orderForm = document.querySelector('#whatsapp-order-form');
  const contactForm = document.querySelector('#contact-form');
  const whatsappSubmit = document.querySelector('.whatsapp-submit');
  const status = document.querySelector('#status-message');

  const productDialog = document.querySelector('#product-dialog');
  const productDialogTitle = document.querySelector('#product-dialog-title');
  const productDialogEyebrow = document.querySelector('#product-dialog-eyebrow');
  const productDialogTagline = document.querySelector('#product-dialog-tagline');
  const productDialogDescription = document.querySelector('#product-dialog-description');
  const productDialogSpecs = document.querySelector('#product-dialog-specs');
  const productDialogIncludes = document.querySelector('#product-dialog-includes');
  const productDialogIncludesGroup = document.querySelector('#product-dialog-includes-group');
  const productDialogNotes = document.querySelector('#product-dialog-notes');
  const productDialogAvailability = document.querySelector('#product-dialog-availability');
  const productDialogQuoteNote = document.querySelector('#product-dialog-quote-note');
  const productDialogVariants = document.querySelector('#product-dialog-variants');
  const productDialogVariantsTitle = document.querySelector('#product-dialog-variants-title');
  const productDialogCart = document.querySelector('#product-dialog-cart');
  const productGallery = document.querySelector('#product-gallery');

  let activeCategory = 'all';
  let statusTimer;
  let galleryObserver;

  const normalizeSearch = (value) => value
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLocaleLowerCase('es');

  const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- render del carrito ---------- */

  const buildCartItem = (cartItem) => {
    const item = document.createElement('li');
    const copy = document.createElement('span');
    const productName = document.createElement('strong');
    const productMeta = document.createElement('span');
    copy.className = 'cart-item-copy';
    productName.className = 'cart-item-name';
    productMeta.className = 'cart-item-meta';

    productName.textContent = `${cartItem.productName} · ${cartItem.variantLabel}`;
    if (cartItem.availability) {
      const flag = document.createElement('span');
      flag.className = 'cart-item-availability';
      flag.textContent = cartItem.availability;
      copy.append(flag);
    }

    productMeta.textContent = cartItem.unitPrice == null
      ? `${cartItem.quantity} ${cartItem.quantity === 1 ? 'unidad' : 'unidades'} · ${labels.quotePrice}`
      : `${cartItem.quantity} × ${formatCurrency(cartItem.unitPrice)} · ${formatCurrency(cartItem.unitPrice * cartItem.quantity)}`;

    copy.append(productName, productMeta);
    item.append(copy, buildVariantControl(cartItem.id, cartItem.productName, cartItem.variantLabel));
    return item;
  };

  const renderCart = () => {
    const priced = [...cartItems.values()].filter((item) => item.unitPrice != null);
    const quoted = [...cartItems.values()].filter((item) => item.unitPrice == null);
    const pricedUnits = getPricedUnits();
    const quoteUnits = getQuoteUnits();
    const count = getTotalUnits();

    cartCount.textContent = String(count);
    cartButton.setAttribute('aria-label', `Abrir lista de consulta; ${count} ${count === 1 ? 'unidad' : 'unidades'}`);
    cartSummary.textContent = count === 0
      ? labels.emptyCart
      : `${count} ${count === 1 ? 'unidad agregada' : 'unidades agregadas'} al carrito.`;

    cartFab.hidden = count === 0;
    cartFabCount.textContent = String(count);
    cartFab.setAttribute('aria-label', `Abrir el carrito; ${count} ${count === 1 ? 'unidad' : 'unidades'}`);
    document.body.classList.toggle('has-cart-fab', count > 0);

    cartClearRow.hidden = count === 0;
    cartPricedGroup.hidden = priced.length === 0;
    cartQuoteGroup.hidden = quoted.length === 0;

    cartItemsList.replaceChildren(...priced.map(buildCartItem));
    cartQuoteList.replaceChildren(...quoted.map(buildCartItem));

    /* Los controles del carrito se recrean en cada render: hay que
       devolverles el estado. */
    cartItems.forEach((item) => updateVariantControl(item.id));

    cartTotal.textContent = `${pricedUnits} ${pricedUnits === 1 ? 'unidad' : 'unidades'} · Total: ${formatCurrency(getTotalPrice())}`;
    cartQuoteTotal.textContent = `${quoteUnits} ${quoteUnits === 1 ? 'unidad' : 'unidades'} sin precio. ${labels.quoteNote}`;

    whatsappSubmit.disabled = count === 0;
    writeStoredCart();
  };

  /* ---------- filtros ---------- */

  const applyFilters = () => {
    const query = normalizeSearch(search.value.trim());
    let visible = 0;

    productCards.forEach((card) => {
      const matchesCategory = activeCategory === 'all' || card.dataset.category === activeCategory;
      const matchesSearch = !query || normalizeSearch(card.dataset.search).includes(query);
      const shouldShow = matchesCategory && matchesSearch;
      card.hidden = !shouldShow;
      if (shouldShow) visible += 1;
    });

    resultCount.textContent = `${visible} ${visible === 1 ? 'resultado' : 'resultados'}`;
    emptyState.hidden = visible !== 0;
  };

  /* ---------- carrusel del modal ---------- */

  const clearGallery = () => {
    if (galleryObserver) {
      galleryObserver.disconnect();
      galleryObserver = undefined;
    }
    productGallery.replaceChildren();
  };

  const buildGallery = (product) => {
    clearGallery();
    const images = product.images;

    if (images.length === 1) {
      const figure = document.createElement('figure');
      const image = document.createElement('img');
      figure.className = 'gallery-single';
      image.src = images[0].src;
      image.alt = images[0].alt;
      image.loading = 'eager';
      image.decoding = 'async';
      figure.append(image);
      productGallery.append(figure);
      return;
    }

    const track = document.createElement('ul');
    track.className = 'gallery-track';
    track.tabIndex = 0;
    track.setAttribute('role', 'group');
    track.setAttribute('aria-roledescription', 'carrusel');
    track.setAttribute('aria-label', `Imágenes de ${product.name}`);

    images.forEach((image, index) => {
      const slide = document.createElement('li');
      const element = document.createElement('img');
      element.src = image.src;
      element.alt = image.alt;
      element.loading = index === 0 ? 'eager' : 'lazy';
      element.decoding = 'async';
      if (index === 0) element.fetchPriority = 'high';
      slide.append(element);
      track.append(slide);
    });

    const nav = document.createElement('div');
    nav.className = 'gallery-nav';

    const previous = document.createElement('button');
    const next = document.createElement('button');
    const counter = document.createElement('p');
    const dots = document.createElement('div');

    previous.type = 'button';
    previous.className = 'gallery-button';
    previous.setAttribute('aria-label', 'Imagen anterior');
    previous.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="m12.5 4-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    next.type = 'button';
    next.className = 'gallery-button';
    next.setAttribute('aria-label', 'Imagen siguiente');
    next.innerHTML = '<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="m7.5 4 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    counter.className = 'gallery-counter';
    counter.setAttribute('aria-live', 'polite');
    counter.textContent = `1 / ${images.length}`;

    dots.className = 'gallery-dots';
    const dotButtons = [];
    if (images.length <= 8) {
      images.forEach((image, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'gallery-dot';
        dot.setAttribute('aria-label', `Ver imagen ${index + 1} de ${images.length}`);
        dot.addEventListener('click', () => {
          track.children[index].scrollIntoView({
            behavior: prefersReducedMotion() ? 'auto' : 'smooth',
            inline: 'center',
            block: 'nearest',
          });
        });
        dotButtons.push(dot);
        dots.append(dot);
      });
    }

    const step = (direction) => track.scrollBy({
      left: direction * track.clientWidth,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    });
    previous.addEventListener('click', () => step(-1));
    next.addEventListener('click', () => step(1));

    nav.append(previous, counter, next);
    productGallery.append(track, nav);
    if (dotButtons.length) productGallery.append(dots);

    galleryObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const index = [...track.children].indexOf(entry.target);
        if (index < 0) return;
        counter.textContent = `${index + 1} / ${images.length}`;
        dotButtons.forEach((dot, dotIndex) => {
          dot.classList.toggle('is-active', dotIndex === index);
          dot.setAttribute('aria-current', dotIndex === index ? 'true' : 'false');
        });
      });
    }, { root: track, threshold: 0.6 });
    [...track.children].forEach((slide) => galleryObserver.observe(slide));
    dotButtons.forEach((dot, index) => {
      dot.classList.toggle('is-active', index === 0);
      dot.setAttribute('aria-current', index === 0 ? 'true' : 'false');
    });
  };

  /* ---------- modal de producto ---------- */

  const fillList = (list, values, group) => {
    const entries = values || [];
    list.replaceChildren(...entries.map((value) => {
      const item = document.createElement('li');
      item.textContent = value;
      return item;
    }));
    (group || list).hidden = entries.length === 0;
  };

  const openProductDialog = (productId) => {
    const product = productsById.get(productId);
    if (!product) return;

    productDialogEyebrow.textContent = product.brand
      ? `${product.categoryLabel} / ${product.brand}`
      : `${product.categoryLabel} / ${product.type}`;
    productDialogTitle.textContent = product.name;

    productDialogTagline.textContent = product.tagline || '';
    productDialogTagline.hidden = !product.tagline;
    productDialogDescription.textContent = product.description;

    productDialogSpecs.replaceChildren(...(product.specs || []).map((spec) => {
      const item = document.createElement('li');
      const label = document.createElement('span');
      const value = document.createElement('strong');
      label.textContent = spec.label;
      value.textContent = spec.value;
      item.append(label, value);
      return item;
    }));
    productDialogSpecs.hidden = !(product.specs || []).length;

    fillList(productDialogIncludes, product.includes, productDialogIncludesGroup);
    fillList(productDialogNotes, product.notes);

    productDialogAvailability.textContent = product.availability?.detail || '';
    productDialogAvailability.hidden = !product.availability;

    const hasQuote = product.variants.some((variant) => variant.price == null);
    productDialogQuoteNote.textContent = labels.quoteNote;
    productDialogQuoteNote.hidden = !hasQuote;

    productDialogVariantsTitle.textContent = product.variantGroupLabel || labels.variantGroupFallback;
    productDialogVariants.replaceChildren(...product.variants.map((variant) => buildVariantRow(product, variant)));

    buildGallery(product);
    productDialog.showModal();
    product.variants.forEach((variant) => updateVariantControl(`${product.id}--${variant.id}`));
    productDialogTitle.focus();
  };

  /* Clic en el backdrop. Se compara contra mousedown para que un arrastre
     iniciado adentro y soltado afuera no cierre el diálogo. */
  const closeOnBackdrop = (dialog) => {
    let pressedOutside = false;
    dialog.addEventListener('mousedown', (event) => {
      pressedOutside = event.target === dialog;
    });
    dialog.addEventListener('click', (event) => {
      if (pressedOutside && event.target === dialog) dialog.close();
      pressedOutside = false;
    });
  };
  closeOnBackdrop(cartDialog);
  closeOnBackdrop(productDialog);

  productDialog.addEventListener('close', clearGallery);
  document.querySelectorAll('.product-dialog-close').forEach((button) => {
    button.addEventListener('click', () => productDialog.close());
  });
  productDialogCart.addEventListener('click', () => {
    productDialog.close();
    cartDialog.showModal();
  });

  /* ---------- navegación y filtros ---------- */

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    const willOpen = !isOpen;
    menuButton.setAttribute('aria-expanded', String(willOpen));
    navigation.classList.toggle('is-open', willOpen);
    if (willOpen) firstNavLink.focus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
      menuButton.focus();
    }
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    }
  });

  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeCategory = button.dataset.filter;
      categoryButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      applyFilters();
    });
  });

  search.addEventListener('input', applyFilters);
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    applyFilters();
  });

  cartClear.addEventListener('click', () => {
    /* Hay que capturar los ids antes de vaciar: despues no queda de donde
       sacar que controles volver a cero. */
    const affected = [...cartItems.keys()];
    cartItems.clear();
    affected.forEach(updateVariantControl);
    renderCart();
    cartSummary.focus();
  });

  cartButton.addEventListener('click', () => cartDialog.showModal());
  cartFab.addEventListener('click', () => cartDialog.showModal());
  cartCloseButtons.forEach((button) => button.addEventListener('click', () => cartDialog.close()));

  /* Un solo listener delegado: los controles del modal no existen al cargar. */
  document.addEventListener('click', (event) => {
    const increase = event.target.closest('.variant-increase');
    if (increase) {
      const itemId = increase.closest('.variant-control').dataset.itemId;
      const item = variantItems.get(itemId);
      adjustItem(itemId, 1);
      status.textContent = `${item.productName}, ${item.variantLabel}, se agregó al carrito.`;
      status.classList.add('is-visible');
      clearTimeout(statusTimer);
      statusTimer = setTimeout(() => status.classList.remove('is-visible'), 2600);
      return;
    }

    const decrease = event.target.closest('.variant-decrease');
    if (decrease) {
      adjustItem(decrease.closest('.variant-control').dataset.itemId, -1, Boolean(decrease.closest('#cart-dialog')));
      return;
    }

    const open = event.target.closest('.product-open');
    if (open) openProductDialog(open.dataset.productId);
  });

  /* ---------- manifiesto ---------- */

  const manifestoSection = document.querySelector('#manifiesto');
  const manifestoToggle = document.querySelector('#manifesto-toggle');
  const manifestoText = document.querySelector('#manifesto-text');

  /* Mide donde termina la decima caja de linea y fija ahi el recorte.
     Se recalcula por evento (resize/fuentes), nunca por temporizador. */
  const measureManifestoCut = () => {
    const lines = [];
    manifestoText.querySelectorAll('p').forEach((paragraph) => {
      const range = document.createRange();
      range.selectNodeContents(paragraph);
      lines.push(...range.getClientRects());
    });
    if (lines.length < 10) {
      manifestoText.style.removeProperty('--manifesto-collapsed');
      manifestoToggle.hidden = true;
      return;
    }
    manifestoToggle.hidden = false;
    const top = manifestoText.getBoundingClientRect().top;
    manifestoText.style.setProperty('--manifesto-collapsed', `${Math.round(lines[9].bottom - top)}px`);
  };

  const setManifestoExpanded = (expanded) => {
    manifestoSection.classList.toggle('is-expanded', expanded);
    manifestoToggle.setAttribute('aria-expanded', String(expanded));
    manifestoToggle.textContent = expanded ? 'Contraer el manifiesto' : 'Leer el manifiesto completo';
  };

  manifestoToggle.addEventListener('click', () => {
    setManifestoExpanded(manifestoToggle.getAttribute('aria-expanded') !== 'true');
  });

  /* Llegar por enlace a una sección recortada no sirve de nada. */
  const expandManifestoFromHash = () => {
    if (window.location.hash === '#manifiesto') setManifestoExpanded(true);
  };
  window.addEventListener('hashchange', expandManifestoFromHash);
  document.querySelectorAll('a[href="#manifiesto"]').forEach((link) => {
    link.addEventListener('click', () => setManifestoExpanded(true));
  });
  expandManifestoFromHash();
  measureManifestoCut();
  new ResizeObserver(measureManifestoCut).observe(manifestoText);
  if (document.fonts) document.fonts.ready.then(measureManifestoCut);

  /* ---------- WhatsApp ---------- */

  const openWhatsApp = (message) => {
    const url = `https://wa.me/${sellerWhatsApp}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  const clearValidation = (input) => input.addEventListener('input', () => input.setCustomValidity(''));
  const trimmedValue = (input, validationMessage) => {
    const value = input.value.trim();
    input.setCustomValidity(value ? '' : validationMessage);
    if (!value) {
      input.reportValidity();
      input.focus();
      return null;
    }
    return value;
  };

  clearValidation(orderForm.elements.buyerName);
  clearValidation(contactForm.elements.contactName);
  clearValidation(contactForm.elements.contactMessage);

  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (cartItems.size === 0) return;

    const buyerName = trimmedValue(orderForm.elements.buyerName, 'Ingresá tu nombre.');
    if (!buyerName) return;
    const buyerLocality = orderForm.elements.buyerLocality.value.trim();
    const buyerComments = orderForm.elements.buyerComments.value.trim();

    const priced = [...cartItems.values()].filter((item) => item.unitPrice != null);
    const quoted = [...cartItems.values()].filter((item) => item.unitPrice == null);

    const messageParts = [orderCopy.title, '', orderCopy.buyerHeading, `Nombre: ${buyerName}`];
    if (buyerLocality) messageParts.push(`Localidad o barrio: ${buyerLocality}`);

    if (priced.length) {
      messageParts.push('', orderCopy.itemsHeading, ...priced.map((item, index) => [
        `${index + 1}. ${item.productName} — ${item.variantLabel}`,
        `   Cantidad: ${item.quantity}`,
        `   Precio unitario: ${formatCurrency(item.unitPrice)}`,
        `   Subtotal: ${formatCurrency(item.unitPrice * item.quantity)}`,
        ...(item.availability ? [`   Disponibilidad: ${item.availability}`] : []),
      ].join('\n')));
      messageParts.push('', `Total de unidades: ${getPricedUnits()}`, `Total: ${formatCurrency(getTotalPrice())}`);
    }

    if (quoted.length) {
      messageParts.push('', orderCopy.quoteHeading, ...quoted.map((item, index) => [
        `${index + 1}. ${item.productName} — ${item.variantLabel}`,
        `   Cantidad: ${item.quantity}`,
        `   Precio: ${labels.quotePrice}`,
        ...(item.availability ? [`   Disponibilidad: ${item.availability}`] : []),
      ].join('\n')));
    }

    if (buyerComments) messageParts.push('', orderCopy.commentsHeading, buyerComments);
    openWhatsApp(messageParts.join('\n'));
  });

  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const contactName = trimmedValue(contactForm.elements.contactName, 'Ingresá tu nombre.');
    if (!contactName) return;
    const contactMessage = trimmedValue(contactForm.elements.contactMessage, 'Ingresá tu consulta.');
    if (!contactMessage) return;
    openWhatsApp([
      orderCopy.inquiryTitle,
      '',
      `Nombre: ${contactName}`,
      '',
      orderCopy.inquiryHeading,
      contactMessage,
    ].join('\n'));
  });

  /* ---------- arranque ---------- */

  restoreCart();
  cartItems.forEach((item) => updateVariantControl(item.id));
  renderCart();
  applyFilters();
})();
