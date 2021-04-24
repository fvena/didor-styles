# Márgenes

Existen una amplia variedad de clases para modificar los margenes interiores y exteriores de un elemento.

Las clases se forman con el siguiente formato

* `.margin-{sides}-{breakpoint}-{size}` para añadir un margin externo
* `.padding-{sides}-{breakpoint}-{size}` para añadir un margin interno

```html
<div class="margin">...</div>
<div class="margin-top-double">...</div>
<div class="margin-left-lap">...</div>
<div class="padding-palm-double">...</div>
<div class="padding padding-right-desk-triple">...</div>
```

Puedes centrar cualquier elemento también de forma responsive.

```html
<div class="margin-auto">Centra horizontalmente</div>
<div class="margin-auto-palm">Centra horizontalmente solo en los móviles</div>
```

## Tamaño

* Para especificar el tamaño utilizamos los valores relativos.
* Si no indicamos nada, se aplica el tamaño estandar 1x.
* El valor `auto` solo se aplica a los valores horizontales

``` html
<!-- RELATIVOS -->
<!-- quarter -->
<!-- half -->
<!-- simple -->
<!-- double -->
<!-- triple -->
<!-- quadruple -->
<!-- quintuple -->
<!-- sextuple -->
<div class="margin-half">Margen la mitad del tamaño base</div>
<div class="margin">Margen exterior del tamaño base</div>
<div class="padding-double">Margen interior dos veces el tamaño base</div>
```

## Posición

* `top`, `bottom`, `left` y `right` indica el lado al que afecta.
* `x` e `y` indican el eje al que aplica (horizontal/vertical).
* Si no indicamos nada, se aplica a los cuatro lados.

```html
<div class="margin">Margen exterior en todos los lados</div>
<div class="margin-top">Margen exterior superior</div>
<div class="margin-right">Margen exterior derecho</div>
<div class="padding-x">Margenes interiores horizontales</div>
```

## Responsive

Puedes indicar el tamaño de los margenes según el tamaño de la pantalla:

* `palm`, `lap`, `small`, `desk` y `large` indica el tamaño de pantalla al que afecta.
* Si no indicamos nada, se aplica a todos.

```html
<div class="margin">Margen a todos los tamaños</div>
<div class="margin-palm">Margen solo a los móviles</div>
```

## Eliminar márgenes

Para eliminar márgenes se sigue la misma notación pero se añade el prefijo `no-`y no se indica el tamaño del margen.

* `.no-margin-{sides}-{breakpoint}` para eliminar un margin externo
* `.no-padding-{sides}-{breakpoint}` para eliminar un margin interno

```html
<div class="no-margin">...</div>
<div class="no-margin-top">...</div>
<div class="no-padding-palm">...</div>
<div class="no-padding-right-desk">...</div>
```
