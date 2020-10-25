# Bordes

Permiten definir un borde y un radio de borde a un elemento de forma sencilla. Muy útil para imágenes, botones o cualquier otro elemento.

## Configuración

```scss
$border-radius: 5px;
$border-width: 1px;
$border-style: solid;
$border-color: color(gray6);
```

## Añadir bordes

Puedes añadir un borde en todos los lados de un elemento o solo en uno.

:::page--border
  <div class="block-border border" data-name=".border"></div>
  <div class="block-border border-top" data-name=".border-top"></div>
  <div class="block-border border-right" data-name=".border-right"></div>
  <div class="block-border border-bottom" data-name=".border-bottom"></div>
  <div class="block-border border-left" data-name=".border-left"></div>
:::

```html
<!-- Todos los lados -->
<div class="border">...</div>

<!-- Un solo lado -->
<div class="border-top">...</div>
<div class="border-right">...</div>
<div class="border-bottom">...</div>
<div class="border-left">...</div>
```

## Eliminar bordes

Puedes eliminar un borde en todos los lados de un elemento o solo en uno.

:::page--border
  <div class="block-border no-border" data-name=".no-border"></div>
  <div class="block-border border no-border-top" data-name=".no-border-top"></div>
  <div class="block-border border no-border-right" data-name=".no-border-right"></div>
  <div class="block-border border no-border-bottom" data-name=".no-border-bottom"></div>
  <div class="block-border border no-border-left" data-name=".no-border-left"></div>
:::

```html
<!-- Todos los lados -->
<div class="no-border">...</div>

<!-- Un solo lado -->
<div class="no-border-top">...</div>
<div class="no-border-right">...</div>
<div class="no-border-bottom">...</div>
<div class="no-border-left">...</div>
```

## Color del borde

Modifica el color del borde por defecto con las siguientes clases.

```demo
<template>
  <div>
    <div class="block border">default</div>
    <div class="block border border--brand">.border--brand</div>
    <div class="block border border--warning">.border--warning</div>
    <div class="block border border--success">.border--success</div>
    <div class="block border border--danger">.border--danger</div>
  </div>
</template>

<style>
  .block {
    color: var(--color-gray3);
    background-color: var(--color-gray7);
    border-width: 2px !important;
    border-radius: 0;
    text-align: center;
    padding: 1.6rem 3.2rem;
    margin: 1.6rem;
  }
</style>
```

```html
<div class="border">...</div>
<div class="border border--brand">...</div>
<div class="border border--warning">...</div>
<div class="border border--success">...</div>
<div class="border border--danger">...</div>
```

## Bordes redondeados

Puedes redondear todos los bordes de un elemento, de un solo lado, o de los lados horizontales y verticales.

<<<<<<< HEAD
```demo
<template>
  <div>
    <div class="block border rounded">.rounded</div>

    <div class="block border rounded-top">.rounded-top</div>
    <div class="block border rounded-right">.rounded-right</div>
    <div class="block border rounded-bottom">.rounded-bottom</div>
    <div class="block border rounded-left">.rounded-left</div>

    <div class="block border rounded no-rounded">no-rounded</div>
    <div class="block border rounded-circle">.rounded-circle</div>
  </div>
</template>

<style>
  .block {
    color: var(--color-gray3);
    background-color: var(--color-gray7);
    border-color: var(--color-gray5);
    border-width: 2px !important;
    border-radius: 0;
    text-align: center;
    padding: 1.6rem 3.2rem;
    margin: 1.6rem;
  }
</style>
```
=======
<div class="page--border margin-bottom-double" style="grid-template-columns: repeat(4, 1fr);">
  <div class="block-border border rounded" data-name=".rounded"></div>
</div>

<div class="page--border margin-bottom-double" style="grid-template-columns: repeat(4, 1fr);">
  <div class="block-border border rounded-top" data-name=".rounded-top"></div>
  <div class="block-border border rounded-right" data-name=".rounded-right"></div>
  <div class="block-border border rounded-bottom" data-name=".rounded-bottom"></div>
  <div class="block-border border rounded-left" data-name=".rounded-left"></div>
</div>

<div class="page--border margin-bottom-double" style="grid-template-columns: repeat(4, 1fr);">
  <div class="block-border border rounded-top-left" data-name=".rounded-top-left"></div>
  <div class="block-border border rounded-top-right" data-name=".rounded-top-right"></div>
  <div class="block-border border rounded-bottom-right" data-name=".rounded-bottom-right"></div>
  <div class="block-border border rounded-bottom-left" data-name=".rounded-bottom-left"></div>
</div>

<div class="page--border" style="grid-template-columns: repeat(4, 1fr);">
  <div class="block-border border rounded no-rounded" data-name="no-rounded"></div>
  <div class="block-border border rounded-circle" data-name=".rounded-circle"></div>
</div>
>>>>>>> feat(demo): añadiendo estilos específicos para la guía de estilos

```html
<!-- Todos los lados -->
<div class="rounded">...</div>

<!-- Solo un lado -->
<div class="rounded-top">...</div>
<div class="rounded-right">...</div>
<div class="rounded-bottom">...</div>
<div class="rounded-left">...</div>

<<<<<<< HEAD
=======
<!-- Solo una esquina -->
<div class="rounded-top-left">...</div>
<div class="rounded-top-right">...</div>
<div class="rounded-bottom-right">...</div>
<div class="rounded-bottom-left">...</div>

>>>>>>> feat(demo): añadiendo estilos específicos para la guía de estilos
<!-- Ningún lado -->
<div class="no-rounded">...</div>

<!-- Círculo -->
<div class="rounded-circle">...</div>
```
