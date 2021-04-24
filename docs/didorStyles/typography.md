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

/** Links */
$link-color: color(brand);
$link-color-hover: color(brand-dark);
$link-decoration: none;
$link-decoration-hover: underline;
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
```

::: demo
<div class="font-size-palm-h1">Tamaño h1 en móviles</div>
<div class="font-size-lap-h1">Tamaño h1 en tablet verticales</div>
<div class="font-size-small-h1">Tamaño h1 en tablet horizontales</div>
<div class="font-size-desk-h1">Tamaño h1 en pantallas</div>
<div class="font-size-large-h1">Tamaño h1 en pantallas grandes</div>
:::

``` html
<div class="font-size-palm-h1">Tamaño h1 en móviles</div>
<div class="font-size-lap-h1">Tamaño h1 en tablet verticales</div>
<div class="font-size-small-h1">Tamaño h1 en tablet horizontales</div>
<div class="font-size-desk-h1">Tamaño h1 en pantallas</div>
<div class="font-size-large-h1">Tamaño h1 en pantallas grandes</div>
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
:::

``` html
<div class="text-left">Texto alineado a la izquierda</div>
<div class="text-right">Texto alineado a la derecha</div>
<div class="text-center">Texto centrado</div>
<div class="text-justify">Texto justificado</div>
```

::: demo
<div class="text-palm-right">Alineación derecha en móviles</div>
<div class="text-lap-right">Alineación derecha en tablet verticales</div>
<div class="text-small-right">Alineación derecha en tablet horizontales</div>
<div class="text-desk-right">Alineación derecha en pantallas</div>
<div class="text-large-right">Alineación derecha en pantallas grandes</div>
:::

``` html
<div class="text-palm-right">Alineación derecha en móviles</div>
<div class="text-lap-right">Alineación derecha en tablet verticales</div>
<div class="text-small-right">Alineación derecha en tablet horizontales</div>
<div class="text-desk-right">Alineación derecha en pantallas</div>
<div class="text-large-right">Alineación derecha en pantallas grandes</div>
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

:::margin-bottom
<div class="h1-bold-black margin-bottom-half">.h1-bold-black</div>
<div class="h2-bold-black margin-bottom-quarter">.h2-bold-black</div>
<div class="h3-bold-black margin-bottom-quarter">.h3-bold-black</div>
<div class="h4-bold-black">.h4-bold-black</div>
<div class="h5-bold-black">.h5-bold-black</div>
<div class="base-bold-black">.base-bold-black</div>
<div class="small1-bold-black">.mall1-bold-black</div>
<div class="small2-bold-black margin-bottom">.small2-bold-black</div>


<div class="h1-normal-black margin-bottom-half">.h1-normal-black</div>
<div class="h2-normal-black margin-bottom-quarter">.h2-normal-black</div>
<div class="h3-normal-black margin-bottom-quarter">.h3-normal-black</div>
<div class="h4-normal-black">.h4-normal-black</div>
<div class="h5-normal-black">.h5-normal-black</div>
<div class="base-normal-black">.base-normal-black</div>
<div class="small1-normal-black">.small1-normal-black</div>
<div class="small2-normal-black margin-bottom">.small2-normal-black</div>

<div class="h1-bold-gray margin-bottom-half">.h1-bold-gray</div>
<div class="h2-bold-gray margin-bottom-quarter">.h2-bold-gray</div>
<div class="h3-bold-gray margin-bottom-quarter">.h3-bold-gray</div>
<div class="h4-bold-gray">.h4-bold-gray</div>
<div class="h5-bold-gray">.h5-bold-gray</div>
<div class="base-bold-gray">.base-bold-gray</div>
<div class="small1-bold-gray">.small1-bold-gray</div>
<div class="small2-bold-gray margin-bottom">.small2-bold-gray</div>


<div class="h1-normal-gray margin-bottom-half">.h1-normal-gray</div>
<div class="h2-normal-gray margin-bottom-quarter">.h2-normal-gray</div>
<div class="h3-normal-gray margin-bottom-quarter">.h3-normal-gray</div>
<div class="h4-normal-gray">.h4-normal-gray</div>
<div class="h5-normal-gray">.h5-normal-gray</div>
<div class="base-normal-gray">.base-normal-gray</div>
<div class="small1-normal-gray">.small1-normal-gray</div>
<div class="small2-normal-gray margin-bottom">.small2-normal-gray</div>

<div class="background-brand padding margin-top">
  <div class="h1-bold-white margin-bottom-half">.h1-bold-white</div>
  <div class="h2-bold-white margin-bottom-quarter">.h2-bold-white</div>
  <div class="h3-bold-white margin-bottom-quarter">.h3-bold-white</div>
  <div class="h4-bold-white">.h4-bold-white</div>
  <div class="h5-bold-white">.h5-bold-white</div>
  <div class="base-bold-white">.base-bold-white</div>
  <div class="small1-bold-white">.small1-bold-white</div>
  <div class="small2-bold-white margin-bottom">.small2-bold-white</div>


  <div class="h1-normal-white margin-bottom-half">.h1-normal-white</div>
  <div class="h2-normal-white margin-bottom-quarter">.h2-normal-white</div>
  <div class="h3-normal-white margin-bottom-quarter">.h3-normal-white</div>
  <div class="h4-normal-white">.h4-normal-white</div>
  <div class="h5-normal-white">.h5-normal-white</div>
  <div class="base-normal-white">.base-normal-white</div>
  <div class="small1-normal-white">.small1-normal-white</div>
  <div class="small2-normal-white">.small2-normal-white</div>
</div>
:::

También puede extenderse dentro de una clase:

``` scss
.myStyle {
  @extend %h1-bold-black;
}

/** Genera */
.myStyle {
  color: var(--color-gray1) !important;
  font-size: 2.01136rem !important;
  font-weight: bold !important;
}
```
