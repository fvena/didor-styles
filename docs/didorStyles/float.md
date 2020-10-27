# Float

## Flotar elementos

Puedes hacer que un elemento flote a la izquierda o la derecha fácilmente con las clases de ayuda definidas por defecto.

```demo
<template>
  <div class="vw-100 padding-x">
    <div class="clearfix margin-bottom-double">
      <div class="block float-left">Flotando a la izquierda</div>
      <div class="block float-right">Flotando a la derecha</div>
    </div>

    <div class="block float-none">No estoy flotando</div>
  </div>
</template>

<style>
  .block {
    color: var(--color-gray7);
    background-color: var(--color-brand);
    border-color: var(--color-gray5);
    border-radius: 10px;
    text-align: center;
    padding: 0.8rem 1.6rem;
    margin: 0.8rem;
  }
</style>
```

```html
<div class="float-left">Flotando a la izquierda</div>
<div class="float-right">Flotando a la derecha</div>
<div class="float-none">No estoy flotando</div>
```

## Responsive

Puedes indicar como debe flotar un elemento para los diferentes tamaños de pantalla.

* `.float-{palm|lap|small|desk|large}-left`
* `.float-{palm|lap|small|desk|large}-right`
* `.float-{palm|lap|small|desk|large}-none`

```demo
<template>
  <div class="vw-100 padding-x">
    <div class="clearfix">
      <div class="block float-palm-right">Flotando a la derecha en móviles</div>
    </div>

    <div class="clearfix">
      <div class="block float-lap-right">Flotando a la derecha en tablet verticales</div>
    </div>

    <div class="clearfix">
      <div class="block float-small-right">Flotando a la derecha en tablet horizontales</div>
    </div>

    <div class="clearfix">
      <div class="block float-desk-right">Flotando a la derecha en pantallas</div>
    </div>

    <div class="clearfix">
      <div class="block float-large-right">Flotando a la derecha en pantallas grandes</div>
    </div>
  </div>
</template>

<style>
  .block {
    color: var(--color-gray7);
    background-color: var(--color-brand);
    border-color: var(--color-gray5);
    border-radius: 10px;
    text-align: center;
    padding: 0.8rem 1.6rem;
    margin: 0.8rem;
  }
</style>
```

```html
  <div class="float-desk-right">...</div>
```

## Clearfix


Para controlar que los elementos solo floten dentro de un contenedor, utiliza la clase `.clearfix` en el contendor.

En el siguiente ejemplo, sin añadir la clase clearfix, mostrará los dos botones en líneas separadas, lo que provocaría que el diseño se rompiese.

```demo
<template>
  <div class="width-100 clearfix">
    <az-button class="block float-left" type="brand">Izquierda</az-button>
    <az-button class="block float-right" type="brand">Derecha</az-button>
  </div>
</template>

<style>
  .block {
    color: var(--color-gray7);
    background-color: var(--color-brand);
    border-color: var(--color-gray5);
    border-radius: 10px;
    text-align: center;
    padding: 0.8rem 1.6rem;
    margin: 1.6rem;
  }
</style>
```

```html
<div class="clearfix">
  <az-button class="float-left">Izquierda</az-button>
  <az-button class="float-right">Derecha</az-button>
</div>
```
