# Chuleta

## funciones

```
/** Colores */
// brand-darker    warning-darker    success-darker    danger-darker
// brand-dark      warning-dark      success-dark      danger-dark
// brand           warning           success           danger
// brand-light     warning-light     success-light     danger-light
// brand-lighter   warning-lighter   success-lighter   danger-lighter

// gray1           gray2             gray3             gray4
// gray5           gray6             gray7             gray8
// white           black

.background-{color}
.color-{color}
color(...);

/** Tamaños */
// Porcentuales %: 25, 50, 75, 100, auto
// Proporcionales x: quarter, half, double, triple, quadrupe, quintuple, sextuple

.width-{size}
.height-{size}
.max-width-100
.max-height-100
.vw-100
.vh-100
.max-vw-100
.max-vh-100

/** Espacios */
// sides: top, bottom, left, right, x, y, null
// breakpoint: palm, lap, small, desk, large
// size: quarter, half, double, triple, quadruple, quintuple, sextuple, auto

.margin-{sides}-{breakpoint}-{size}
.padding-{sides}-{breakpoint}-{size}
.no-margin-{sides}-{breakpoint}
.no-padding-{sides}-{breakpoint}
.margin-auto-{breakpoint}


quarter();
third();
half();
simple();
double();
triple();
quadruple();
quintuple();
sextuple();

size(value); // value * x

half('-');   // Valores negativos
size(-2);    // Valores negativos

/** Tipografía */
.font-size-{breakpoint}-{size-name}
.text-{breakpoint}-{position}
.text-nowrap
.text-truncate
.text-lowercase
.text-uppercase
.text-capitalize
.{size}-{weight}-{color}
@extend %{size}-{weight}-{color}

font-size(...);   // h1, h2, h3, h4, h5, h6, base, small1, small2
font-weight(...); // extralight, light, normal, semibold, bold, black
font-family(...); // heading, base, monospace

/** Responsive */
@include media(); // palm, lap, small, desk, large
```

### Color

```scss
color(...);

/** Colores de Marca */
brand-darker
brand-dark
brand
brand-light
brand-lighter

/** Colores Neutros */


/** Colores de Estado (Feedback) */
warning-darker
warning-dark
warning
warning-light
warning-lighter

success-darker
success-dark
success
success-light
success-lighter

danger-darker
danger-dark
danger
danger-light
danger-lighter
```
