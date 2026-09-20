---
version: alpha
name: "Almatierra Cultivos"
description: "Una identidad natural, cercana y contemporánea para comprar productos de cultivo con claridad y confianza."
colors:
  primary: "#173F35"
  primary-hover: "#0E3028"
  primary-active: "#09231D"
  secondary: "#A65032"
  secondary-hover: "#873C27"
  secondary-active: "#6C2D1E"
  accent: "#E8C96A"
  accent-soft: "#F1EDDF"
  background: "#F7F3E8"
  surface: "#FFFCF5"
  surface-muted: "#E9E4D6"
  surface-disabled: "#E2E6E3"
  text: "#1B2822"
  text-muted: "#53635C"
  border: "#697970"
  focus: "#236B5A"
  success: "#216E4E"
  warning: "#8A5B00"
  error: "#A1332B"
  on-primary: "#FFFFFF"
  on-secondary: "#FFFFFF"
  on-accent: "#1B2822"
typography:
  display-xl:
    fontFamily: Fraunces
    fontSize: 3.5rem
    fontWeight: 650
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  h1:
    fontFamily: Fraunces
    fontSize: 2.75rem
    fontWeight: 650
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  h2:
    fontFamily: Fraunces
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  h3:
    fontFamily: Source Sans 3
    fontSize: 1.375rem
    fontWeight: 700
    lineHeight: 1.25
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.55
  body-md:
    fontFamily: Source Sans 3
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
  body-sm:
    fontFamily: Source Sans 3
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: Source Sans 3
    fontSize: 0.875rem
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "0.01em"
  price:
    fontFamily: Source Sans 3
    fontSize: 1.125rem
    fontWeight: 750
    lineHeight: 1.2
rounded:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 20px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 72px
components:
  navigation:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    height: 72px
    padding: "{spacing.md}"
  search-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    height: 48px
    padding: "{spacing.sm}"
  search-field-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    height: 48px
  search-field-disabled:
    backgroundColor: "{colors.surface-disabled}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.md}"
    height: 48px
  category-chip:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    height: 44px
    padding: "{spacing.sm}"
  category-chip-hover:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
  category-chip-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
  category-chip-active:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
  category-chip-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
  category-chip-disabled:
    backgroundColor: "{colors.surface-disabled}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: "{spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-focus:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-loading:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-disabled:
    backgroundColor: "{colors.surface-disabled}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: "{spacing.md}"
  button-secondary-hover:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  button-secondary-active:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  button-secondary-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  button-secondary-disabled:
    backgroundColor: "{colors.surface-disabled}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.sm}"
  button-secondary-loading:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  cart-action:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    size: 44px
  cart-action-hover:
    backgroundColor: "{colors.secondary-hover}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.full}"
  cart-action-active:
    backgroundColor: "{colors.secondary-active}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.full}"
  cart-action-focus:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.full}"
  cart-action-disabled:
    backgroundColor: "{colors.surface-disabled}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
  cart-action-loading:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
    rounded: "{rounded.full}"
  product-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  product-card-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
  product-price:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.price}"
  banner-highlight:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.md}"
    padding: "{spacing.lg}"
  status-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  status-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  status-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  filter-panel:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  separator:
    backgroundColor: "{colors.border}"
    height: 1px
    width: 100%
  control-boundary:
    backgroundColor: "{colors.border}"
    size: 1px
  focus-indicator:
    backgroundColor: "{colors.focus}"
    size: 3px
  icon-button:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 44px
  icon-button-hover:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
  icon-button-active:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
  icon-button-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
  icon-button-disabled:
    backgroundColor: "{colors.surface-disabled}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
  icon-button-loading:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
---

## Overview

**Almatierra Cultivos** debe sentirse arraigada, serena y útil: una marca que conoce el oficio de cultivar y acompaña sin solemnidad. La identidad combina la calidez material de la tierra con la precisión de una herramienta bien diseñada. El resultado no es rústico ni tecnológico en exceso; es orgánico, contemporáneo y confiable.

La referencia funcional es el catálogo público de La Despensa en Treinta (`https://catalogo.treinta.co/ladespensapuffco`): se conservan como patrones la búsqueda visible, las categorías explorables, el ordenamiento, la imagen dominante y la acción rápida de agregar. No se copian su marca, paleta, tipografía, iconos, recursos ni composición exacta. Almatierra reemplaza el amarillo/azul utilitario de esa plataforma por una voz propia de bosque, arcilla, papel y semilla, y resuelve de forma explícita el desbordamiento horizontal observado en móvil.

Principios de la experiencia:

1. **Primero el producto.** La fotografía, el nombre, la variante, la disponibilidad y el precio deben poder escanearse sin esfuerzo.
2. **Calma con dirección.** Pocas acciones de alta jerarquía y suficiente aire; nada compite con comprar o consultar.
3. **Cercanía competente.** Lenguaje humano y local, información concreta y cero promesas exageradas.
4. **Naturaleza sin cliché.** Texturas y tonos orgánicos con estructura editorial; evitar saturar la interfaz con hojas, degradados verdes o ilustraciones decorativas genéricas.
5. **Accesible por defecto.** Navegación completa con teclado, objetivos táctiles amplios, contraste AA y movimiento opcional.

La marca escrita se presenta como **Almatierra** o **Almatierra Cultivos**, nunca en mayúsculas sostenidas. Si se desarrolla un isotipo, debe partir de una semilla, surco o brote abstracto de geometría simple; no debe parecerse a la `t.` de Treinta ni usar una hoja genérica como único concepto.

## Colors

La paleta surge de materiales vinculados con el cultivo y mantiene una base clara para que las fotografías de producto conserven protagonismo.

- **Primary — Bosque (`#173F35`):** identidad, navegación, enlaces y acciones principales. Es el color de confianza.
- **Primary hover (`#0E3028`) / active (`#09231D`):** estados progresivamente más profundos; nunca cambiar solo la opacidad.
- **Secondary — Arcilla (`#A65032`):** acciones transaccionales puntuales, especialmente agregar al carrito. No compite con el bosque fuera del contexto de compra.
- **Accent — Semilla (`#E8C96A`):** destacados editoriales, promociones sobrias y señales de descubrimiento. Usa texto oscuro.
- **Background — Papel (`#F7F3E8`):** fondo general cálido.
- **Surface — Marfil (`#FFFCF5`):** tarjetas, campos y superficies elevadas.
- **Surface muted (`#E9E4D6`):** agrupaciones, separadores amplios y zonas informativas.
- **Text — Tinta (`#1B2822`):** cuerpo y títulos funcionales.
- **Text muted (`#53635C`):** metadatos y ayudas; no usar para texto esencial por debajo de `body-sm`.
- **Border (`#697970`):** contornos de un píxel sobre fondos claros; mantiene al menos 3:1 frente a `background` y `surface` para que los límites de controles sean perceptibles.
- **Focus (`#236B5A`):** anillo de foco de tres píxeles con separación de dos píxeles respecto del control.
- **Success (`#216E4E`), warning (`#8A5B00`) y error (`#A1332B`):** estados semánticos. Siempre acompañar el color con icono y texto.

Combinaciones prioritarias: blanco sobre bosque, blanco sobre arcilla, tinta sobre papel o marfil, bosque sobre semilla. No colocar texto blanco sobre semilla ni usar `text-muted` sobre fondos fotográficos.

Las fotografías deben mostrar color real, luz natural y fondos simples. No aplicar filtros verdes o sepia globales. Cuando la imagen no exista, usar un fondo `accent-soft` con un pictograma lineal del tipo de producto y un texto alternativo equivalente.

## Typography

**Fraunces** aporta carácter editorial a titulares y mensajes de marca. Se reserva para `display-xl`, `h1` y `h2`; no debe aparecer en precios, controles ni párrafos largos. Si la fuente web no carga, usar `Georgia, serif` como respaldo.

**Source Sans 3** sostiene lectura, navegación, fichas y datos comerciales. Su respaldo es `system-ui, sans-serif`. La interfaz no debe depender de más de estas dos familias ni usar texto condensado.

Jerarquía:

- `display-xl`: aperturas de campañas o portada; máximo dos líneas.
- `h1`: un único título principal por vista.
- `h2`: secciones de catálogo o contenido editorial.
- `h3`: nombres de bloques y tarjetas destacadas.
- `body-lg`: introducciones breves.
- `body-md`: lectura y descripción habitual.
- `body-sm`: metadatos, unidades y ayuda secundaria; nunca menor a 14 px.
- `label`: botones, filtros y navegación. Usar frase normal, no mayúsculas sostenidas.
- `price`: cifra y moneda en una sola unidad visual; alinear tabularmente cuando haya listas comparables.

Los nombres de productos admiten hasta dos líneas en grilla. No truncar información de variedad o tamaño si es necesaria para distinguir productos; en ese caso, reorganizar la tarjeta o mostrarla completa en la ficha.

## Layout

La escala parte de 4 px, pero los ritmos principales usan 8, 16, 24, 32, 48 y 72 px. El contenido se centra en un contenedor de **1280 px máximo** con márgenes automáticos.

Márgenes laterales:

- Menos de 768 px: 16 px.
- De 768 a 1023 px: 24 px.
- Desde 1024 px: 32 px.

Comportamiento responsive:

- **Móvil estrecho, menos de 420 px:** una columna de producto. El buscador ocupa el ancho completo; ordenar y filtrar se distribuyen en una fila que pueda envolver. No hay desplazamiento horizontal de página.
- **Móvil amplio, desde 420 px:** dos columnas solo si cada tarjeta conserva al menos 176 px; de lo contrario, mantener una.
- **Tablet, desde 768 px:** tres columnas y cabecera compacta de dos filas si hace falta.
- **Escritorio, desde 1024 px:** cuatro columnas; búsqueda, navegación y carrito comparten cabecera.
- **Pantalla amplia, desde 1280 px:** hasta cinco columnas si cada tarjeta mantiene un ancho mínimo de 216 px.

La grilla usa `minmax()` y `gap` de 24 px; nunca anchos fijos que recorten tarjetas. Las categorías forman una fila con desplazamiento horizontal **interno** en móvil, con degradado o corte parcial que indique continuidad. La rueda o gesto horizontal solo afecta esa fila, no toda la página.

La navegación principal permanece visible sin tapar contenido. Un carrito persistente puede fijarse al borde inferior en móvil únicamente cuando tiene artículos, respetando `env(safe-area-inset-bottom)`. Modales y avisos nunca deben ocultar simultáneamente nombre, precio y acción del primer producto; deben poder cerrarse con teclado y devolver el foco al disparador.

Las imágenes de producto usan relación 1:1, `object-fit: contain`, fondo marfil y espacio interno de 12 px. Reservar el tamaño antes de cargar para evitar saltos de contenido. Cargar primero las imágenes visibles y diferir las restantes.

## Elevation & Depth

La profundidad se comunica primero con contraste de superficie y borde, no con sombras constantes.

- Tarjeta normal: borde de 1 px en `border`, sin sombra.
- Tarjeta hover en dispositivos con puntero: elevación máxima de 4 px y sombra suave `0 8px 24px rgba(23, 63, 53, 0.10)`.
- Menús y popovers: `0 12px 32px rgba(27, 40, 34, 0.16)` y borde visible.
- Modal: `0 24px 64px rgba(27, 40, 34, 0.22)` sobre velo oscuro al 48 %.

No usar sombras para comunicar selección, error o foco. El foco siempre se representa con contorno explícito. Desactivar traslaciones y transiciones no esenciales cuando `prefers-reduced-motion: reduce` esté activo.

## Shapes

Los radios expresan tactilidad sin convertir cada superficie en una cápsula:

- `xs` (4 px): etiquetas pequeñas y detalles internos.
- `sm` (8 px): botones rectangulares, banners pequeños y controles.
- `md` (12 px): campos, tarjetas y paneles.
- `lg` (20 px): bloques editoriales destacados; uso infrecuente.
- `full`: chips e iconos circulares solamente.

Los iconos son lineales, de 1.75 a 2 px de trazo, terminales redondeados y caja óptica de 20 o 24 px. Usar una sola familia de iconos. Toda acción representada solo por un icono requiere nombre accesible y tooltip en dispositivos con puntero.

Los objetivos interactivos deben medir al menos 44 × 44 px. Evitar botones circulares menores, incluso dentro de las tarjetas.

## Components

### Navegación y búsqueda

La cabecera contiene marca, navegación principal, búsqueda y carrito. En móvil, la marca ocupa la primera fila y la búsqueda la segunda. El campo usa siempre un contorno de un píxel en `border`, incluso sobre `background` o `surface`; no depende solo de una diferencia de relleno para ser reconocible. También muestra una etiqueta accesible persistente o asociada; el placeholder es ejemplo, no etiqueta. La búsqueda admite borrado, estado cargando, cero resultados y error recuperable.

### Categorías, filtros y ordenamiento

`category-chip` es neutro; `category-chip-selected` usa bosque con texto blanco. La selección no depende solo del color: exponer `aria-pressed` o estado equivalente. El primer chip es “Todos”, no “Ver todos”, para reducir ruido.

Filtros y ordenamiento comparten lenguaje y altura, pero son acciones separadas. En móvil pueden abrir paneles inferiores. Mostrar la cantidad de filtros activos y ofrecer “Limpiar filtros” sin borrar la búsqueda.

### Tarjeta de producto

Orden recomendado:

1. Imagen o placeholder estable.
2. Etiqueta de disponibilidad solo cuando aporta información.
3. Nombre completo o máximo de dos líneas en grilla.
4. Variante, presentación o unidad.
5. Precio actual y, si aplica, precio anterior claramente etiquetado.
6. Acción de agregar de 44 px como mínimo.

Toda la tarjeta puede enlazar a la ficha, pero el botón de agregar conserva su propia acción y nombre accesible. No anidar controles interactivos de forma inválida. Después de agregar, anunciar el resultado mediante una región de estado sin mover el foco ni depender de una animación.

Si el producto no tiene stock, reemplazar agregar por “Sin stock” en un control deshabilitado de contraste legible y ofrecer “Avisarme” solo si existe ese flujo. Nunca usar una `x` roja como única explicación.

### Botones y estados

Usar un solo `button-primary` por región de decisión. `button-secondary` acompaña o cancela. `cart-action` en arcilla se limita a la acción transaccional de agregar; una vez agregado puede mostrar cantidad con controles de sumar y restar.

Estados requeridos para todo control: default, hover cuando exista puntero, active, `focus-visible`, disabled y loading. Los tokens hermanos con sufijos `-hover`, `-active`, `-focus`, `-disabled` y `-loading` son normativos para botones primarios, botones secundarios, acciones de carrito e icon buttons. Los chips no realizan operaciones asíncronas, por lo que no usan loading; sí definen hover, active, focus y disabled además de selected. El estado loading conserva el ancho del botón, incluye texto (“Agregando…”) y no elimina el nombre accesible.

### Feedback y carrito

Mensajes de éxito y error combinan icono, título breve y acción pertinente. El carrito muestra cantidad, subtotal y próximo paso; no oculta costos o condiciones relevantes hasta el final. Confirmar eliminaciones destructivas solo cuando no puedan deshacerse; preferir deshacer durante unos segundos.

## Do's and Don'ts

### Do

- **Do** priorizar fotografía clara, precio legible y disponibilidad real.
- **Do** usar bosque para confianza, arcilla para compra y semilla para destacar contenido, respetando sus roles.
- **Do** conservar búsqueda, categorías y ordenamiento visibles como patrones funcionales de la referencia.
- **Do** diseñar primero a 360 px y comprobar 200 % de zoom antes de ampliar a escritorio.
- **Do** mantener orden de foco equivalente al orden visual.
- **Do** usar texto alternativo que describa el producto y omitir del lector de pantalla las imágenes meramente decorativas.
- **Do** expresar errores y estados con texto e icono además de color.
- **Do** internacionalizar moneda, unidades, fechas y plurales; no codificarlos en imágenes.

### Don't

- **Don't** copiar el amarillo, azul oscuro, logotipo, placeholder o iconografía propia de Treinta.
- **Don't** provocar desplazamiento horizontal de página para mostrar más productos o controles.
- **Don't** reducir tarjetas hasta volver ilegibles los nombres ni usar puntos suspensivos como solución universal.
- **Don't** usar verde sobre fotografías sin una superficie sólida que asegure contraste.
- **Don't** depender de hover para revelar precio, disponibilidad o la única acción de compra.
- **Don't** usar carruseles automáticos, parallax o animaciones de más de 200 ms en tareas frecuentes.
- **Don't** abrir WhatsApp, una pasarela o una aplicación externa sin anticiparlo en el texto de la acción.
- **Don't** inventar nuevos hexadecimales, radios o escalas dentro de componentes; extender primero los tokens de este documento.
