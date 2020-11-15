# Bordes

Permiten definir un borde y un radio de borde a un elemento de forma sencilla. Muy útil para imágenes, botones o cualquier otro elemento.

## Configuración

```scss
$border-radius: 5px;
$border-width: 1px;
$border-style: solid;
$border-color: color(gray6);
$border: $border-width $border-style $border-color;
```

## Añadir bordes

Puedes añadir un borde en todos los lados de un elemento, solo en uno o de uno de los ejes.

:::page--border
  <div class="block-border border" data-name=".border"></div>
:::

:::page--border
  <div class="block-border border-top" data-name=".border-top"></div>
  <div class="block-border border-right" data-name=".border-right"></div>
  <div class="block-border border-bottom" data-name=".border-bottom"></div>
  <div class="block-border border-left" data-name=".border-left"></div>
:::

:::page--border
  <div class="block-border border-x" data-name=".border-x"></div>
  <div class="block-border border-y" data-name=".border-y"></div>
:::

```html
<!-- Todos los lados -->
<div class="border">...</div>

<!-- Un solo lado -->
<div class="border-top">...</div>
<div class="border-right">...</div>
<div class="border-bottom">...</div>
<div class="border-left">...</div>

<!-- Un solo eje -->
<div class="border-x">...</div>
<div class="border-y">...</div>
```

## Eliminar bordes

Puedes eliminar un borde en todos los lados de un elemento, solo en uno o de uno de los ejes.

:::page--border
  <div class="block-border no-border" data-name=".no-border"></div>
:::

:::page--border
  <div class="block-border border no-border-top" data-name=".no-border-top"></div>
  <div class="block-border border no-border-right" data-name=".no-border-right"></div>
  <div class="block-border border no-border-bottom" data-name=".no-border-bottom"></div>
  <div class="block-border border no-border-left" data-name=".no-border-left"></div>
:::

:::page--border
  <div class="block-border border no-border-x" data-name=".no-border-x"></div>
  <div class="block-border border no-border-y" data-name=".no-border-y"></div>
:::

```html
<!-- Todos los lados -->
<div class="no-border">...</div>

<!-- Un solo lado -->
<div class="no-border-top">...</div>
<div class="no-border-right">...</div>
<div class="no-border-bottom">...</div>
<div class="no-border-left">...</div>

<!-- Un solo eje -->
<div class="no-border-x">...</div>
<div class="no-border-y">...</div>
```

## Color del borde

Modifica el color del borde por defecto.

:::page--border
  <div class="block-border rounded border" data-name="default"></div>
:::

:::page--border
  <div class="block-border rounded border border--brand" data-name=".border--brand"></div>
  <div class="block-border rounded border border--warning" data-name=".border--warning"></div>
  <div class="block-border rounded border border--success" data-name=".border--success"></div>
  <div class="block-border rounded border border--danger" data-name=".border--danger"></div>
:::

:::page--border
  <div class="block-border rounded border border--gray2" data-name=".border--gray2"></div>
  <div class="block-border rounded border border--gray3" data-name=".border--gray3"></div>
  <div class="block-border rounded border border--gray4" data-name=".border--gray4"></div>
  <div class="block-border rounded border border--gray5" data-name=".border--gray5"></div>
:::

```html
<!-- Color por defecto -->
<div class="border">...</div>

<!-- Colores temáticos -->
<div class="border border--brand">...</div>
<div class="border border--warning">...</div>
<div class="border border--success">...</div>
<div class="border border--danger">...</div>

<!-- Escala de grises -->
<div class="border border--gray2">...</div>
<div class="border border--gray3">...</div>
<div class="border border--gray4">...</div>
<div class="border border--gray5">...</div>
```

## Bordes redondeados

Puedes redondear todos los bordes de un elemento, de un solo lado, o de los lados horizontales y verticales.

:::page--border
  <div class="block-border border rounded" data-name=".rounded"></div>
  <div class="block-border border rounded no-rounded" data-name=".no-rounded"></div>
  <div class="block-border border rounded-circle" data-name=".rounded-circle"></div>
:::

:::page--border
  <div class="block-border border rounded-top" data-name=".rounded-top"></div>
  <div class="block-border border rounded-right" data-name=".rounded-right"></div>
  <div class="block-border border rounded-bottom" data-name=".rounded-bottom"></div>
  <div class="block-border border rounded-left" data-name=".rounded-left"></div>
:::

```html
<!-- Todos los lados -->
<div class="rounded">...</div>

<!-- Ningún lado -->
<div class="no-rounded">...</div>

<!-- Círculo -->
<div class="rounded-circle">...</div>

<!-- Solo un lado -->
<div class="rounded-top">...</div>
<div class="rounded-right">...</div>
<div class="rounded-bottom">...</div>
<div class="rounded-left">...</div>
```
