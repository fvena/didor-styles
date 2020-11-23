# Tipografía

La tipografía es uno de los elementos más importantes en el diseño, Didor cuenta con muchas clases para tener un mayor control.

## Configuración

Cuando definas las variables Sass, cambia las siguientes variables con tus valores personalizados:

``` scss
/** Familias tipográficas */
$font-family-base: 'Source Sans Pro';
$font-family-heading: 'Source Sans Pro';
$font-family-monospace: 'Fira Code';

/** Tamaños de fuente por tamaño de pantalla en px */
$root-font-size-palm: 15px;
$root-font-size-lap: 16px;
$root-font-size-small: 16px;
$root-font-size-desk: 17px;
$root-font-size-large: 17px;

/** Pesos tipográficos */
$font-weight-extralight: 200;
$font-weight-ligh: 300;
$font-weight-normal: normal;
$font-weight-semibold: 600;
$font-weight-bold: bold;
$font-weight-black: 900;

/** Altura de línea */
$line-height: 1.6;

/** Escala modular */
$modular-scale: 1.2;

/** Tracking, espacio entre caracteres */
$letter-spacing: 0;

/** Peso para las cabeceras */
$font-weight-heading: $font-weight-bold;
```

## Funciones

``` scss
.elemento {
  font-family: font-family(heading);
  font-size: font-size(h2); /** font-size(4) */
  font-weight: font-weight(bold);
  line-height: line-height(small1);
}
```

## Tamaños de Fuente

Didor utiliza una escala tipográfica para configurar los diferentes tamaños de fuente, de esta forma se simplifica la elección de tamaños, y estos mantienen una proporcionalidad. También permite elegir el tamaño de fuente según el tamaño de pantalla.

Para definir los diferentes tamaños se ha establecido la siguiente escala:

* `h1` - nivel 5
* `h2` - nivel 4
* `h3` - nivel 3
* `h4` - nivel 2
* `h5` - nivel 1
* `base` - nivel 0
* `small1` - nivel -1
* `small2` - nivel -2

Notación: `.font-size-[breakpoint]-{size-name}`

::: demo
<div class="font-size-h1 line-height-h1">Tamaño h1 (nivel 5)</div>
<div class="font-size-h2 line-height-h2">Tamaño h2 (nivel 4)</div>
<div class="font-size-h3 line-height-h3">Tamaño h3 (nivel 3)</div>
<div class="font-size-h4 line-height-h4">Tamaño h4 (nivel 2)</div>
<div class="font-size-h5 line-height-h5">Tamaño h5 (nivel 1)</div>
<div class="font-size-base line-height-base">Tamaño base (nivel 0)</div>
<div class="font-size-small1 line-height-small1">Tamaño small1 (nivel -1)</div>
<div class="font-size-small2 line-height-small2">Tamaño small2 (nivel -2)</div>
<br>
<div class="font-size-palm-h2">Tamaño h2 solo en dispostivos móviles</div>
:::

``` html
<div class="font-size-h1">Tamaño h1 (nivel 5)</div>
<div class="font-size-h2">Tamaño h2 (nivel 4)</div>
<div class="font-size-h3">Tamaño h3 (nivel 3)</div>
<div class="font-size-h4">Tamaño h4 (nivel 2)</div>
<div class="font-size-h5">Tamaño h5 (nivel 1)</div>
<div class="font-size-base">Tamaño base (nivel base)</div>
<div class="font-size-small1">Tamaño small1 (nivel -1)</div>
<div class="font-size-small2">Tamaño small2 (nivel -2)</div>

<div class="font-size-palm-h2">Tamaño h2 solo en dispostivos móviles</div>
```

## Apariencia

::: demo
<div class="font-weight-extralight">Texto extralight</div>
<div class="font-weight-light">Texto light</div>
<div class="font-weight-normal">Texto normal</div>
<div class="font-weight-semibold">Texto semibold</div>
<div class="font-weight-bold">Texto bold</div>
<div class="font-weight-black">Texto black</div>
<br>
<div class="font-italic">Texto en itálica</div>
<div class="text-muted">Texto desactivado</div>
<div class="text-hide">Texto oculto</div>
<div class="text-underline">Texto subrayado</div>
<div class="text-decoration-none">Texto sin subrayado</div>
<br>
<div class="link">Texto como un link</div>
<br>
Texto abreviado <abbr title="HyperText Markup Language">HTML</abbr>

:::

``` html
<div class="font-weight-extralight">Texto extralight</div>
<div class="font-weight-light">Texto light</div>
<div class="font-weight-normal">Texto normal</div>
<div class="font-weight-semibold">Texto semibold</div>
<div class="font-weight-bold">Texto bold</div>
<div class="font-weight-black">Texto black</div>

<div class="font-italic">Texto en itálica</div>
<div class="text-muted">Texto desactivado</div>
<div class="text-hide">Texto oculto</div>
<div class="text-underline">Texto subrayado</div>
<div class="text-decoration-none">Texto sin subrayado</div>

<div class="link">Texto como un link</div>

<abbr title="HyperText Markup Language">HTML</abbr>
```

## Alineación

Didor también permite alinear los elementos según el tamaño de pantalla:

Notación: `.text-[breakpoint]-{position}`

::: demo
<div class="text-left">Texto alineado a la izquierda</div>
<div class="text-right">Texto alineado a la derecha</div>
<div class="text-center">Texto centrado</div>
<br>
<div class="text-justify"><strong>Texto justificado</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</div>
<br>
<div class="text-palm-right">Texto alineado a la izquierda solo en móviles</div>
<div class="text-desk-center">Texto centrado solo en escritorio</div>
:::

``` html
<div class="text-left">Texto alineado a la izquierda</div>
<div class="text-right">Texto alineado a la derecha</div>
<div class="text-center">Texto centrado</div>
<div class="text-justify">Texto justificado</div>

<div class="text-palm-right">Texto alineado a la izquierda solo en móviles</div>
<div class="text-desk-center">Texto centrado solo en escritorio</div>
```

## Texto desbordante

::: demo
<div class="page--wrap">
  <div class="page-block text-nowrap">El texto se mostrará en una sola línea</div>
  <div class="page-block"><p class="text-truncate no-margin">El texto se mostrará en una sola línea con una elipsis si no entra</p></div>
</div>
:::

``` html
<div class="text-nowrap">El texto se mostrará en una sola línea</div>

<div class="width-25">
  <p class="text-truncate">El texto se mostrará en una sola línea con una elipsis si no entra</p>
</div>
```

::: tip
  Para que funcione `.text-truncate` debe estar contenido en un elemento con una anchura definida, no funcionaría si el propio elemento al que aplicamos la clase tiene una anchura definida.
:::

## Transformación

::: demo
<div class="text-lowercase">Texto en minúscula</div>
<div class="text-uppercase">Texto en mayúscula</div>
<div class="text-capitalize">Texto en capital</div>
:::

``` html
<div class="text-lowercase">Texto en minúscula</div>
<div class="text-uppercase">Texto en mayúscula</div>
<div class="text-capitalize">Texto en capital</div>
```

## Apariencia básica

::: demo
<p>Puedes utilizar la etiqueta mark para <mark>resaltar</mark> texto.</p>
<p><del>Esta línea de texto debe tratarse como texto eliminado.</del></p>
<p><s>Esta línea de texto debe considerarse como incorrecta.</s></p>
<p><ins>Esta línea de texto debe considerarse como nuevo texto insertado.</ins></p>
<p><u>Esta línea de texto se mostrará subrayada.</u></p>
<p><small>Esta línea de texto se mostrará más pequeña.</small></p>
<p><strong>Esta línea de texto se mostrará en negrita.</strong></p>
<p><em>Esta línea de texto se mostrará en cursiva.</em></p>
<br>
<a href="http://www.didor.io">Esto es un enlace</a>
:::

```html
<p>Puedes utilizar la etiqueta mark para <mark>resaltar</mark> texto.</p>
<p><del>Esta línea de texto debe tratarse como texto eliminado.</del></p>
<p><s>Esta línea de texto debe considerarse como incorrecta.</s></p>
<p><ins>Esta línea de texto debe considerarse como nuevo texto insertado.</ins></p>
<p><u>Esta línea de texto se mostrará subrayada.</u></p>
<p><small>Esta línea de texto se mostrará más pequeña.</small></p>
<p><strong>Esta línea de texto se mostrará en negrita.</strong></p>
<p><em>Esta línea de texto se mostrará en cursiva.</em></p>

<a href="http://www.didor.io">Esto es un enlace</a>
```


## Entradilla

Puedes definir un párrafo como entradilla despues de un título con la clase `.caption`.

::: demo
<h1>Título nivel 1</h1>
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<p class="margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<h2>Título nivel 2</h2>
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<p class="margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<h3>Título nivel 3</h3>
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>

<p class="margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>
:::

``` html
<h1>Título nivel 1</h1>
<p class="caption">Lorem ipsum dolor sit amet....</p>
<p>Lorem ipsum dolor sit amet....</p>

<h2>Título nivel 2</h2>
<p class="caption">Lorem ipsum dolor sit amet....</p>
<p>Lorem ipsum dolor sit amet....</p>

<h3>Título nivel 3</h3>
<p class="caption">Lorem ipsum dolor sit amet....</p>
<p>Lorem ipsum dolor sit amet....</p>
```

La clase `.caption` también sirve para destacar un párrafo.

::: demo
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>
:::

``` html
<p class="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.</p>
```

## Guía de estilos

Una forma de controlar, simplificar y homogeneizar los textos de la aplicación consiste en definir todos los estilos de texto posibles en nuestro sistema de diseño, para ello mediante las siguientes variables podemos definir los tamaños, pesos y colores posibles, de forma que se autogeneren todas las clases con las combinaciones posibles o se puedan extender.

``` scss
$styles-sizes: (
  'h1': 5,
  'h2': 4,
  'h3': 3,
  'h4': 2,
  'h5': 1,
  'base': 0,
  'small1': -1,
  'small2': -2,
);

$styles-weights: (
  'regular': $font-weight-normal,
  'medium': $font-weight-bold,
);

$styles-colors: (
  'black': color(gray1),
  'gray': color(gray4),
  'white': color(white),
);
```

Notación: `.{size}-{weight}-{color}`

::: demo
<div class="h1-medium-black margin-bottom-half">.h1-medium-black</div>
<div class="h2-medium-black margin-bottom-quarter">.h2-medium-black</div>
<div class="h3-medium-black margin-bottom-quarter">.h3-medium-black</div>
<div class="h4-medium-black">.h4-medium-black</div>
<div class="h5-medium-black">.h5-medium-black</div>
<div class="base-medium-black">.base-medium-black</div>
<div class="small1-medium-black">.mall1-medium-black</div>
<div class="small2-medium-black margin-bottom">.small2-medium-black</div>


<div class="h1-regular-black margin-bottom-half">.h1-regular-black</div>
<div class="h2-regular-black margin-bottom-quarter">.h2-regular-black</div>
<div class="h3-regular-black margin-bottom-quarter">.h3-regular-black</div>
<div class="h4-regular-black">.h4-regular-black</div>
<div class="h5-regular-black">.h5-regular-black</div>
<div class="base-regular-black">.base-regular-black</div>
<div class="small1-regular-black">.small1-regular-black</div>
<div class="small2-regular-black margin-bottom">.small2-regular-black</div>

<div class="h1-medium-gray margin-bottom-half">.h1-medium-gray</div>
<div class="h2-medium-gray margin-bottom-quarter">.h2-medium-gray</div>
<div class="h3-medium-gray margin-bottom-quarter">.h3-medium-gray</div>
<div class="h4-medium-gray">.h4-medium-gray</div>
<div class="h5-medium-gray">.h5-medium-gray</div>
<div class="base-medium-gray">.base-medium-gray</div>
<div class="small1-medium-gray">.small1-medium-gray</div>
<div class="small2-medium-gray margin-bottom">.small2-medium-gray</div>


<div class="h1-regular-gray margin-bottom-half">.h1-regular-gray</div>
<div class="h2-regular-gray margin-bottom-quarter">.h2-regular-gray</div>
<div class="h3-regular-gray margin-bottom-quarter">.h3-regular-gray</div>
<div class="h4-regular-gray">.h4-regular-gray</div>
<div class="h5-regular-gray">.h5-regular-gray</div>
<div class="base-regular-gray">.base-regular-gray</div>
<div class="small1-regular-gray">.small1-regular-gray</div>
<div class="small2-regular-gray margin-bottom">.small2-regular-gray</div>

<div class="background-brand padding margin-top">
  <div class="h1-medium-white margin-bottom-half">.h1-medium-white</div>
  <div class="h2-medium-white margin-bottom-quarter">.h2-medium-white</div>
  <div class="h3-medium-white margin-bottom-quarter">.h3-medium-white</div>
  <div class="h4-medium-white">.h4-medium-white</div>
  <div class="h5-medium-white">.h5-medium-white</div>
  <div class="base-medium-white">.base-medium-white</div>
  <div class="small1-medium-white">.small1-medium-white</div>
  <div class="small2-medium-white margin-bottom">.small2-medium-white</div>


  <div class="h1-regular-white margin-bottom-half">.h1-regular-white</div>
  <div class="h2-regular-white margin-bottom-quarter">.h2-regular-white</div>
  <div class="h3-regular-white margin-bottom-quarter">.h3-regular-white</div>
  <div class="h4-regular-white">.h4-regular-white</div>
  <div class="h5-regular-white">.h5-regular-white</div>
  <div class="base-regular-white">.base-regular-white</div>
  <div class="small1-regular-white">.small1-regular-white</div>
  <div class="small2-regular-white">.small2-regular-white</div>
</div>
:::

``` scss
.myStyle {
  @extend %base-medium-black;
}
```
