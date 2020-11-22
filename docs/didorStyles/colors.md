# Colores

Didor utiliza un bonito y consistente esquema de color por defecto.

## Configuración

### Colores de marca

Atraiga la atención de sus visitantes utilizando el color de su marca.

```scss
$brand-darker: hsl(190, 90%, 25%);
$brand-dark: hsl(190, 70%, 35%);
$brand: hsl(190, 65%, 45%);
$brand-light: hsl(190, 65%, 65%);
$brand-lighter: hsl(190, 60%, 85%);
```

<div class="page--color margin-bottom-triple">
  <div class="block--color background-brand-darker" data-name="brand-darker"></div>
  <div class="block--color background-brand-dark" data-name="brand-dark"></div>
  <div class="block--color background-brand" data-name="brand"></div>
  <div class="block--color background-brand-light" data-name="brand-light"></div>
  <div class="block--color background-brand-lighter" data-name="brand-lighter"></div>
</div>

### Colores Neutros

Los colores neutros conforman la mayor parte del diseño y se utilizan para textos, fondos y bordes.

Didor permite configurar facilmente los modos `light` y `dark`. La mayor parte del cambio de diseño se basa en *invertir* la escala de grises, para que los colores claros ahora sean oscuros.

Pero con frecuencia esta escala de grises no es lineal, por lo que necesitamos hacer un ajuste más preciso.

Por eso Didor permite configurar la escala de grises tanto en modo light como en dark.

```scss
/** Colores Neutros Light */
$color-gray1-light: hsl(196, 25%, 12%) !default;
$color-gray2-light: hsl(198, 17%, 28%) !default;
$color-gray3-light: hsl(200, 10%, 46%) !default;
$color-gray4-light: hsl(198, 7%, 64%) !default;
$color-gray5-light: hsl(202, 13%, 83%) !default;
$color-gray6-light: hsl(206, 17%, 92%) !default;
$color-gray7-light: hsl(220, 18%, 97%) !default;
$color-gray8-light: hsl(220, 20%, 99%) !default;

/** Colores Neutros Dark */
$color-gray1-dark: hsl(220, 12%, 99%) !default;
$color-gray2-dark: hsl(220, 10%, 83%) !default;
$color-gray3-dark: hsl(206, 8%, 65%) !default;
$color-gray4-dark: hsl(202, 6%, 46%) !default;
$color-gray5-dark: hsl(198, 8%, 28%) !default;
$color-gray6-dark: hsl(200, 12%, 19%) !default;
$color-gray7-dark: hsl(198, 17%, 14%) !default;
$color-gray8-dark: hsl(196, 25%, 12%) !default;

/** Blanco y Negro */
$color-black: hsl(0, 0%, 0%) !default;
$color-white: hsl(0, 0%, 100%) !default;
```

<div class="page--color margin-top margin-bottom-triple">
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

### Colores de Estado

Utiliza un color coherente al estado (información, correcto, atención, error).

```scss
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

<div class="page--color margin-bottom-triple">
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

### Degradados

```scss
$brand-gradient: 'brand-light', 'brand-dark';
$warning-gradient: 'warning-light', 'warning-dark';
$success-gradient: 'success-light', 'success-dark';
$danger-gradient: 'danger-light', 'danger-dark';

$light-gradient: 'gray7', 'gray5';
$dark-gradient: 'gray4', 'gray2';
```

<div class="page--color margin-bottom-triple">
  <div class="block--color gradient-brand" data-name="brand"></div>
  <div class="block--color gradient-warning" data-name="warning"></div>
  <div class="block--color gradient-success" data-name="success"></div>
  <div class="block--color gradient-danger" data-name="danger"></div>
</div>

<div class="page--color">
  <div class="block--color gradient-light" data-name="light"></div>
  <div class="block--color gradient-dark" data-name="dark"></div>
</div>

## Funciones

Podemos utilizar un color o un gradiente en nuestros archivos `sass` mediante las funciones:

:::text-center
`color(...)`
`gradient(color1, color2)`
:::

``` scss
.elemento {
  background-color: gradient(brand-dark,brand-light);
  color: color(brand);
}
```

::: tip
En los gradientes puedes utilizar tanto el nombre de un color predefinido como un color en hexadecimal, rgb, hsl, ...

```scss
gradient(brand-dark,brand-light);
gradient(#80002f,#fb5067);
gradient(rgb(120,0,47),rgb(251,80,103));
gradient(hsl(338,100%,25%),hsl(352,96%,65%));
```
:::

## Color del fondo

Las clases para aplicar un color de fondo siguen el patrón:

:::text-center
`.background-{color}`
`.background-transparent`
:::

``` html
<div class="background-brand">Fondo color de la marca</div>
<div class="background-transparent">Fondo transparente</div>
```

## Color del texto

Las clases para aplicar un color de texto siguen el patrón:

:::text-center
`.color-{color}`
:::

``` html
<div class="color-brand">Texto con el color de la marca</div>
<div class="color-gray1">Texto gris oscuro</div>
```

## Degradados

Las clases para aplicar un degradado predefinido al fondo siguen el patrón:

:::text-center
`.gradient-{color}`
:::

Siendo las opciones posibles:

:::text-center
`brand`, `danger`, `warning`, `success`, `dark`, `light`.
:::

``` html
<div class="gradient-brand">Degradado con los colores de la marca</div>
<div class="gradient-warning">Degradado con los colores de atención</div>
```

## Modo oscuro

Mediante el atributo, `data-theme` puedes modificar el tema de toda tu página o de un bloque concreto. Por defecto, existen preconfigurados dos temas: `light` y `dark`.

``` html
<!-- Aplicar el tema a toda la página -->
<body data-theme="dark">...</body>

<!-- Aplicar el tema a un bloque -->
<div id="app" data-theme="dark">...</div>
```

Para poder modificar el tema de una página, todos los colores configurados se autogeneran como variables css. De esta forma, si modificas cada color dentro de un tema, el cambio se aplicará sin tener que compilar el scss:

```scss
[data-theme='light'] {
  --color-gray1: hsl(196, 25%, 12%);
  --color-gray2: hsl(198, 17%, 28%);
  --color-gray3: hsl(200, 10%, 46%);
  --color-gray4: hsl(198, 7%, 64%);
  --color-gray5: hsl(202, 13%, 83%);
  --color-gray6: hsl(206, 17%, 92%);
  --color-gray7: hsl(220, 18%, 97%);
  --color-gray8: hsl(220, 20%, 99%);

  --color-black: hsl(0, 0%, 0%);
  --color-white: hsl(0, 0%, 100%);
}

[data-theme='dark'] {
  --color-gray1': hsl(220, 12%, 99%);
  --color-gray2': hsl(220, 10%, 83%);
  --color-gray3': hsl(206, 8%, 65%);
  --color-gray4': hsl(202, 6%, 46%);
  --color-gray5': hsl(198, 8%, 28%);
  --color-gray6': hsl(200, 12%, 19%);
  --color-gray7': hsl(198, 17%, 14%);
  --color-gray8': hsl(196, 25%, 12%);

  --color-black: hsl(0, 0%, 100%);
  --color-white: hsl(0, 0%, 0%);
}
```

## Temas

Al igual que hemos hecho con el modo oscuro, podemos crear y aplicar otros temas con el atributo `data-theme` y modificar otras variables y estilos:

```scss
[data-theme='blue'] {
  --color-brand-darker: #80002f;
  --color-brand-dark: #bb1642;
  --color-brand: #dd224e;
  --color-brand-light: #fb5067;
  --color-brand-lighter: #ff817a;

  --font-family-base: 'Source Sans Pro', Helvetica Neue, Arial, sans-serif;
  --font-family-heading: 'Source Sans Pro', Helvetica Neue, Arial, sans-serif;
}

[data-theme='blue'] {
  --color-brand-darker: #80002f;
  --color-brand-dark: #bb1642;
  --color-brand: #dd224e;
  --color-brand-light: #fb5067;
  --color-brand-lighter: #ff817a;

  --font-family-base: 'Source Sans Pro', Helvetica Neue, Arial, sans-serif;
  --font-family-heading: 'Source Sans Pro', Helvetica Neue, Arial, sans-serif;
}
```
