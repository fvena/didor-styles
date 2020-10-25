# Colores

Didor utiliza un bonito y consistente esquema de color por defecto.

Los colores se dividen en tres grupos:

* **Colores de marca** - Atraiga la atención de sus visitantes utilizando el color de su marca.
* **Colores neutros** - Los colores neutros conforman la mayor parte del diseño y se utilizan para textos, fondos y bordes.
* **Colores de estado** - Utiliza un color coherente al estado (información, correcto, atención, error).

## Configuración

```scss
/** Colores de Marca */
$brand-darker: hsl(190, 90%, 25%);
$brand-dark: hsl(190, 70%, 35%);
$brand: hsl(190, 65%, 45%);
$brand-light: hsl(190, 65%, 65%);
$brand-lighter: hsl(190, 60%, 85%);

/** Colores Neutros */
$color-gray1: hsl(196, 25%, 12%);
$color-gray2: hsl(198, 17%, 28%);
$color-gray3: hsl(200, 5%, 46%);
$color-gray4: hsl(198, 7%, 64%);
$color-gray5: hsl(202, 13%, 83%);
$color-gray6: hsl(206, 17%, 92%);
$color-gray7: hsl(220, 18%, 97%);
$color-gray8: hsl(220, 20%, 99%);

$color-black: hsl(0, 0%, 0%);
$color-white: hsl(0, 0%, 100%);

/** Colores de Estado (Feedback) */
$warning-darker: hsl(39, 100%, 35%);
$warning-dark: hsl(41, 100%, 45%);
$warning: hsl(41, 100%, 60%);
$warning-light: hsl(41, 100%, 75%);
$warning-lighter: hsl(41, 100%, 90%);

$success-darker: hsl(94, 80%, 30%);
$success-dark: hsl(94, 67%, 41%);
$success: hsl(94, 52%, 50%);
$success-light: hsl(94, 66%, 70%);
$success-lighter: hsl(94, 70%, 90%);

$danger-darker: hsl(6, 100%, 30%);
$danger-dark: hsl(6, 100%, 45%);
$danger: hsl(6, 100%, 60%);
$danger-light: hsl(6, 100%, 75%);
$danger-lighter: hsl(6, 100%, 90%);
```

## Colores de Marca

<div class="page--color margin-bottom-double">
  <div class="block--color background-brand-darker" data-name="brand-darker"></div>
  <div class="block--color background-brand-dark" data-name="brand-dark"></div>
  <div class="block--color background-brand" data-name="brand"></div>
  <div class="block--color background-brand-light" data-name="brand-light"></div>
  <div class="block--color background-brand-lighter" data-name="brand-lighter"></div>
</div>

## Colores Neutros

<div class="page--color margin-bottom-double">
  <div class="block--color background-black" data-name="black"></div>
  <div class="block--color background-gray1" data-name="gray1"></div>
  <div class="block--color background-gray2" data-name="gray2"></div>
  <div class="block--color background-gray3" data-name="gray3"></div>
  <div class="block--color background-gray4" data-name="gray4"></div>
  <div class="block--color background-gray5" data-name="gray5"></div>
  <div class="block--color background-gray6" data-name="gray6"></div>
  <div class="block--color background-gray7" data-name="gray7"></div>
  <div class="block--color background-gray8" data-name="gray8"></div>
  <div class="block--color background-white" data-name="white"></div>
</div>

## Colores de Estado

<div class="page--color">
  <div class="block--color background-warning-darker" data-name="warning-darker"></div>
  <div class="block--color background-warning-dark" data-name="warning-dark"></div>
  <div class="block--color background-warning" data-name="warning"></div>
  <div class="block--color background-warning-light" data-name="warning-light"></div>
  <div class="block--color background-warning-lighter" data-name="warning-lighter"></div>

  <div class="block--color background-success-darker" data-name="success-darker"></div>
  <div class="block--color background-success-dark" data-name="success-dark"></div>
  <div class="block--color background-success" data-name="success"></div>
  <div class="block--color background-success-light" data-name="success-light"></div>
  <div class="block--color background-success-lighter" data-name="success-lighter"></div>

  <div class="block--color background-danger-darker" data-name="danger-darker"></div>
  <div class="block--color background-danger-dark" data-name="danger-dark"></div>
  <div class="block--color background-danger" data-name="danger"></div>
  <div class="block--color background-danger-light" data-name="danger-light"></div>
  <div class="block--color background-danger-lighter" data-name="danger-lighter"></div>
</div>

## Color del fondo

Las clases para aplicar un color de fondo siguen el patrón:

:::text-center
`.background-{color}`
:::

``` html
<div class="background-brand">Fondo color de la marca</div>
<div class="background-brand-a20">Fondo transparente al 20% del color de la marca</div>
<div class="background-transparent">Fondo transparente</div>
```

## Color del texto

Las clases para aplicar un color de texto siguen el patrón:

:::text-center
`.color-{color}`
:::

``` html
<div class="color-brand">Fondo color de la marca</div>
<div class="color-gray1">Fondo transparente al 20% del color de la marca</div>
```

## Función

Podemos utilizar un color en nuestros archivos `sass` mediante la función:

:::text-center
`color(...)`
:::

``` scss
.elemento {
  background-color: color(brand);
  color: color(brand-darker);
}
```
