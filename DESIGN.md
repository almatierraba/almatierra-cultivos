---
version: alpha
name: "Almatierra Cultivos"
description: "Sistema editorial botánico-científico contemporáneo para una experiencia de cultivo culta, clara y accesible."
colors:
  primary: "#2F7D32"
  primary-hover: "#266729"
  primary-active: "#1D5220"
  accent: "#7FAE3C"
  ink: "#111111"
  paper: "#F8F8F8"
  surface: "#FFFFFF"
  warm-gray: "#E8E5DE"
  text-muted: "#5A5C57"
  border: "#6B6D67"
  focus: "#2F7D32"
  success: "#236745"
  warning: "#D89B22"
  error: "#A2352C"
  on-primary: "#FFFFFF"
  on-accent: "#111111"
  on-success: "#FFFFFF"
  on-warning: "#111111"
  on-error: "#FFFFFF"
typography:
  display-xl:
    fontFamily: Oswald
    fontSize: 4rem
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  h1:
    fontFamily: Oswald
    fontSize: 3rem
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  h2:
    fontFamily: Oswald
    fontSize: 2.625rem
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  h3:
    fontFamily: Oswald
    fontSize: 1.875rem
    fontWeight: 600
    lineHeight: 1.18
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: Inter
    fontSize: 0.9375rem
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.01em"
  meta:
    fontFamily: IBM Plex Mono
    fontSize: 0.8125rem
    fontWeight: 500
    lineHeight: 1.45
    letterSpacing: "0.025em"
  price:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: 600
    lineHeight: 1.25
rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 8px
  full: 9999px
spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  2xl: 64px
  3xl: 96px
components:
  navigation:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    height: 88px
    padding: "{spacing.sm}"
  search-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    height: 48px
    padding: "{spacing.sm}"
  search-field-focus:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    height: 48px
  search-field-disabled:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.xs}"
    height: 48px
  category-chip:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    height: 44px
    padding: "{spacing.sm}"
  category-chip-hover:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
  category-chip-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  category-chip-active:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  category-chip-focus:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
  category-chip-disabled:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.xs}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    height: 48px
    padding: "{spacing.sm}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  button-primary-focus:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  button-primary-loading:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  button-disabled:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.xs}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    height: 48px
    padding: "{spacing.sm}"
  button-secondary-hover:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
  button-secondary-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.xs}"
  button-secondary-focus:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
  button-secondary-disabled:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.xs}"
  button-secondary-loading:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
  cart-action:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.xs}"
    height: 44px
    padding: "{spacing.sm}"
  cart-action-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  cart-action-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  cart-action-focus:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  cart-action-disabled:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.xs}"
  cart-action-loading:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.xs}"
  product-card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
    padding: "{spacing.sm}"
  product-card-hover:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
  product-price:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    typography: "{typography.price}"
  editorial-highlight:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.xs}"
    padding: "{spacing.md}"
  metadata-label:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.meta}"
  status-success:
    backgroundColor: "{colors.success}"
    textColor: "{colors.on-success}"
    rounded: "{rounded.xs}"
  status-error:
    backgroundColor: "{colors.error}"
    textColor: "{colors.on-error}"
    rounded: "{rounded.xs}"
  status-warning:
    backgroundColor: "{colors.warning}"
    textColor: "{colors.on-warning}"
    rounded: "{rounded.xs}"
  filter-panel:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.ink}"
    rounded: "{rounded.xs}"
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
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 44px
  icon-button-hover:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  icon-button-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.full}"
  icon-button-focus:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
  icon-button-disabled:
    backgroundColor: "{colors.warm-gray}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
  icon-button-loading:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
---

## Overview

**Almatierra Cultivos** es una publicación editorial botánico-científica contemporánea que también permite descubrir y comprar productos. Su universo combina ciencia, historia, botánica, medicina, filosofía, arte clásico y cultura. La experiencia debe sentirse culta, sobria, premium y didáctica: inspira curiosidad antes de vender y enseña antes de convencer.

La emoción rectora es: **“No parece una web comercial; parece una página de un libro que merece guardarse.”** Cada pantalla prioriza conocimiento, claridad y confianza. La compra se integra sin convertir la interfaz en un marketplace genérico.

Principios:

1. **Editorial antes que promocional.** La marca aparece como sello y firma; nunca como publicidad invasiva.
2. **Ciencia + cultura + botánica.** Cada sección debe combinar al menos tres universos del ADN de marca.
3. **Producto con contexto.** Nombre, presentación, disponibilidad y precio son claros, pero conviven con información que educa.
4. **Aire y ritmo.** Blanco abundante, alineación estricta y jerarquía tipográfica sustituyen adornos, tarjetas y sombras innecesarias.
5. **Accesible por defecto.** Teclado, foco visible, contraste AA, objetivos táctiles amplios y movimiento opcional.

### Logotipo oficial

El activo normativo es `assets/almatierra-logo.jpg`. Es una unidad vertical cuadrada compuesta por **ALMA / TIERRA** en dos líneas, una regla horizontal y **CULTIVOS** espaciado debajo, todo en el verde oficial sobre blanco. No se reconstruye con Oswald ni con ninguna tipografía similar.

- Mantener la proporción original 1:1 y usar `object-fit: contain`.
- Dejar un área libre mínima equivalente al ancho de la letra “A” del propio logotipo.
- Preferir superficie blanca; sobre otras superficies debe conservar su rectángulo blanco completo.
- No recortar, deformar, inclinar, rotar, contornear, aplicar filtros, sombras, degradados ni recolorizar.
- No separar “CULTIVOS”, la regla o el bloque principal.
- Si se necesita una versión transparente, debe provenir de un archivo oficial nuevo; no eliminar el fondo automáticamente.

La referencia funcional previa de Treinta queda limitada a patrones generales de catálogo. La identidad visual de esta especificación proviene exclusivamente del manual oficial de Almatierra.

## Colors

La paleta normativa es blanca, negra y verde. El verde es acento y acción, no fondo dominante.

- **Primary — Verde principal (`#2F7D32`):** CTAs, enlaces, líneas, sellos, foco y destacados de marca. Blanco sobre este verde alcanza 5.12:1.
- **Primary hover (`#266729`) y active (`#1D5220`):** tonos derivados para estados de interacción; conservan la identidad y aumentan el contraste.
- **Accent — Verde claro (`#7FAE3C`):** gráficos y destacados secundarios. Usa tinta `#111111`; nunca texto pequeño blanco ni verde claro como texto pequeño sobre blanco.
- **Ink — Negro editorial (`#111111`):** títulos, cuerpo, ilustración y máximo contraste.
- **Paper — Blanco editorial (`#F8F8F8`):** fondo principal.
- **Surface (`#FFFFFF`):** superficie del logotipo, controles y zonas donde se necesita blanco puro.
- **Warm gray (`#E8E5DE`):** divisores amplios, paneles secundarios y estados deshabilitados.
- **Text muted (`#5A5C57`):** metadatos secundarios; alcanza 6.37:1 sobre papel.
- **Border (`#6B6D67`):** límite funcional de controles, con 4.93:1 frente a papel. El gris cálido no sustituye este borde porque no alcanza 3:1.
- **Focus (`#2F7D32`):** anillo de 3 px con separación de 2 px.
- **Success, warning y error:** excepciones funcionales reservadas para estado. Siempre se acompañan con texto o icono, nunca reemplazan la paleta de marca.

Combinaciones prioritarias: tinta sobre papel o blanco; blanco sobre verde principal; tinta sobre verde claro; verde principal sobre papel para enlaces de tamaño normal. No colocar texto sobre fotografías sin una superficie sólida.

Fotografía: blanco y negro, luz natural, encuadre íntimo y actitud contemplativa. Ilustración: grabado científico o botánico de alto contraste, hatching, puntillismo y detalle fino, con el verde como resaltador puntual.

## Typography

**Oswald** define titulares altos, condensados y editoriales. Se usa en pesos 700 y 600 para `display-xl`, `h1`, `h2` y `h3`; no se usa para párrafos, precios ni controles. Respaldo: `Arial Narrow, sans-serif`.

**Inter** sostiene lectura, navegación, botones y UI en pesos 400, 500 y 600. Respaldo: `system-ui, sans-serif`.

**IBM Plex Mono** es opcional y se reserva para fichas, referencias, códigos, numeración y metadatos editoriales. Respaldo: `ui-monospace, monospace`.

Jerarquía responsive:

- `display-xl`: 48–64 px en escritorio; 34–42 px en móvil; máximo tres líneas.
- `h1`: 48 px en escritorio y 38–42 px en móvil.
- `h2`: 32–42 px en escritorio y 28–32 px en móvil.
- `h3`: 24–30 px en escritorio y 22–26 px en móvil.
- Cuerpo: 16–18 px en escritorio y 15–17 px en móvil; nunca menor a 15 px para lectura.
- `meta`: 13 px como mínimo y solo para información secundaria.

Los títulos pueden usar mayúsculas sostenidas cuando funcionan como cabecera editorial breve. El cuerpo, los controles y los nombres de producto usan frase normal. No usar tipografías manuscritas, psicodélicas, futuristas ni más de estas tres familias.

## Layout

Contenedor máximo de **1280 px** con una retícula de 12 columnas en escritorio. Márgenes laterales:

- Móvil: 18–24 px.
- Tablet: 28–40 px.
- Escritorio: 40–64 px.

La escala usa múltiplos de 4 px y enfatiza 8, 16, 24, 32, 48, 64 y 96 px. El espacio en blanco es parte activa de la identidad, no un hueco a rellenar.

Comportamiento responsive:

- **Menos de 420 px:** una columna de producto, navegación condensada y filtros apilables; nunca desplazamiento horizontal de página.
- **Desde 420 px:** dos columnas solo si cada tarjeta conserva al menos 176 px.
- **Desde 768 px:** tres columnas o una composición editorial de 4 + 8 columnas.
- **Desde 1024 px:** retícula de 12 columnas; catálogo de cuatro columnas y módulos editoriales asimétricos.
- **Desde 1280 px:** cinco columnas únicamente si cada producto conserva 216 px mínimos.

La arquitectura recomendada es: portada/manifiesto → productos → fichas → ciencia/educación → historia/cultura → sobre Almatierra → contacto/compra. Búsqueda y filtros pueden ser persistentes, pero no dominan la marca.

Las imágenes de producto usan proporción 1:1 o 4:5, fondo blanco y `object-fit: contain`. Los grabados admiten `mix-blend-mode: multiply` solo cuando el resultado mantiene legibilidad; el logotipo nunca usa mezcla.

## Elevation & Depth

El sistema es plano y editorial. La profundidad se expresa con espacio, reglas de un píxel, escala tipográfica y contraste de superficie.

- Tarjeta normal: borde de 1 px en `border` o separación por espacio; sin sombra.
- Hover de tarjeta: desplazamiento máximo de 2 px y borde en tinta; no agregar sombra obligatoria.
- Menús y popovers: borde de 1 px en tinta y sombra sobria `0 12px 28px rgba(17, 17, 17, 0.14)`.
- Modal: sombra `0 24px 60px rgba(17, 17, 17, 0.22)` sobre velo negro al 52 %.

No usar sombras fuertes, glassmorphism, degradados llamativos, parallax ni capas decorativas. El foco nunca se comunica con sombra. Con `prefers-reduced-motion: reduce`, eliminar traslaciones y transiciones no esenciales.

## Shapes

La geometría es recta, editorial y contenida:

- `none`: bloques editoriales, reglas y medios.
- `xs` (2 px): botones, campos, etiquetas y tarjetas.
- `sm` (4 px): paneles que requieran una suavidad funcional.
- `md` (8 px): uso excepcional en modales o paneles táctiles.
- `full`: solo indicadores circulares e icon buttons.

No usar cápsulas como recurso decorativo general ni grandes rectángulos redondeados. Las líneas son finas y deliberadas. Los iconos son lineales, de 1.75 a 2 px, con caja óptica de 20 o 24 px.

Objetivos interactivos: mínimo 44 × 44 px. La estructura visual nunca depende exclusivamente de color, forma o posición.

## Components

### Navegación y marca

La cabecera combina el logotipo oficial, navegación editorial, búsqueda y carrito. El logo mantiene su bloque blanco y área de seguridad; en escritorio mide entre 104 y 132 px, y en móvil entre 76 y 92 px. No se sustituye por texto cuando el activo está disponible.

En móvil, un botón de menú con nombre accesible abre la navegación; la búsqueda puede pasar a una segunda fila. La cabecera no debe ocultar contenido ni convertirse en una banda verde dominante.

### Manifiesto y módulos editoriales

El manifiesto usa Oswald, tinta y grandes blancos. Una regla o palabra en verde principal basta como acento. Los módulos educativos combinan título, referencia mono, texto claro y un grabado o fotografía en blanco y negro. El verde claro puede marcar una cita o clasificación con texto oscuro.

### Búsqueda, categorías y filtros

Campos y controles usan fondo blanco o papel, borde visible `border` y radio de 2 px. El placeholder no reemplaza la etiqueta. Chips de categoría se comportan como etiquetas editoriales rectangulares, no como píldoras. La selección usa verde principal y expone `aria-pressed`.

Filtros y ordenamiento muestran cantidad activa y ofrecen limpiar sin borrar la búsqueda. En móvil pueden abrir un panel inferior con cierre accesible y retorno de foco.

### Tarjeta de producto

Orden recomendado:

1. Imagen o grabado estable.
2. Referencia o categoría en IBM Plex Mono.
3. Nombre del producto en Oswald o Inter semibold según densidad.
4. Presentación, variedad y disponibilidad.
5. Precio.
6. Acción de compra en verde principal.

Las tarjetas no dependen de sombra ni esconden precio o disponibilidad en hover. Toda la tarjeta puede enlazar a la ficha, pero el botón de compra conserva acción independiente y marcado HTML válido. El contenido demostrativo debe identificarse como tal.

### Botones y estados

El botón primario es verde con texto blanco. El secundario es transparente o papel con borde negro y texto tinta. El carrito utiliza el mismo verde principal; se elimina el rol transaccional arcilla del sistema anterior.

Estados obligatorios: default, hover, active, `focus-visible`, disabled y loading. Los chips no necesitan loading. El estado loading conserva ancho y nombre accesible. Disabled mantiene contraste de texto, pero no debe confundirse con una acción disponible.

### Feedback y carrito

Éxito, advertencia y error combinan color semántico, icono y texto. El carrito muestra cantidad, subtotal y siguiente paso sin ocultar condiciones. Confirmar solo acciones irreversibles; preferir deshacer.

## Do's and Don'ts

### Do

- **Do** usar el activo `assets/almatierra-logo.jpg` como unidad completa.
- **Do** mantener blanco editorial, tinta negra y verde como acento.
- **Do** cargar Oswald e Inter; usar IBM Plex Mono solo cuando aporta tono documental.
- **Do** combinar ciencia, cultura y botánica en cada sección editorial.
- **Do** integrar compra y educación en el mismo recorrido sin jerarquía comercial agresiva.
- **Do** diseñar primero a 360 px y comprobar 200 % de zoom.
- **Do** mantener foco visible, orden de teclado lógico y objetivos de 44 px.
- **Do** optimizar ilustraciones sin destruir hatching, puntillismo o detalle fino.
- **Do** indicar cuando nombres, precios o imágenes sean demostrativos.

### Don't

- **Don't** reconstruir, recortar, recolorizar, deformar o aplicar filtros al logotipo.
- **Don't** recuperar la paleta bosque, arcilla y semilla del concepto anterior.
- **Don't** usar verde como fondo dominante ni verde claro para texto pequeño sobre blanco.
- **Don't** usar psicodelia, caricaturas, clichés “stoner”, neón, gradientes o tipografías manuscritas/futuristas.
- **Don't** usar una hoja de cannabis como recurso visual dominante; preferir herbarios, semillas, diagramas o detalles botánicos.
- **Don't** llenar la interfaz de tarjetas redondeadas, sombras o iconos decorativos.
- **Don't** provocar desplazamiento horizontal de página ni ocultar información esencial en hover.
- **Don't** inventar nuevos colores de marca, radios o escalas dentro de componentes; extender primero los tokens de esta fuente normativa.
