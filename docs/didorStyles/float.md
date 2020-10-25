# Float

## Flotar elementos

<<<<<<< HEAD
```demo
<template>
  <div class="floatDemo">
    <div class="clearfix margin-bottom-double">
      <div class="blockDemo float-left margin-right">Flotando a la izquierda</div>
      <div class="blockDemo float-right margin-left">Flotando a la derecha</div>
    </div>
    <div class="blockDemo float-none">No estoy flotando</div>
    </div>
=======
Puedes hacer que un elemento flote a la izquierda o la derecha fácilmente con las clases de ayuda definidas por defecto.

```demo
<template>
  <div class="vw-100 padding-x">
    <div class="clearfix margin-bottom-double">
      <div class="block float-left">Flotando a la izquierda</div>
      <div class="block float-right">Flotando a la derecha</div>
    </div>

    <div class="block float-none">No estoy flotando</div>
>>>>>>> feat(demo): añadiendo estilos específicos para la guía de estilos
  </div>
</template>

<style>
<<<<<<< HEAD
.floatDemo {
  width: 100%;
}
=======
  .block {
    color: var(--color-gray7);
    background-color: var(--color-brand);
    border-color: var(--color-gray5);
    border-radius: 10px;
    text-align: center;
    padding: 0.8rem 1.6rem;
    margin: 0.8rem;
  }
>>>>>>> feat(demo): añadiendo estilos específicos para la guía de estilos
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
<<<<<<< HEAD
  <div class="floatDemo">
    <div class="clearfix">
      <div class="blockDemo float-left float-palm-right">Flotando a la derecha en móviles</div>
    </div>

    <div class="clearfix">
      <div class="blockDemo float-left float-lap-right">Flotando a la derecha en tablet verticales</div>
    </div>

    <div class="clearfix">
      <div class="blockDemo float-left float-small-right">Flotando a la derecha en tablet horizontales</div>
    </div>

    <div class="clearfix">
      <div class="blockDemo float-left float-desk-right">Flotando a la derecha en pantallas</div>
    </div>

    <div class="clearfix">
      <div class="blockDemo float-left float-large-right">Flotando a la derecha en pantallas grandes</div>
=======
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
>>>>>>> feat(demo): añadiendo estilos específicos para la guía de estilos
    </div>
  </div>
</template>

<style>
<<<<<<< HEAD
.floatDemo {
  width: 100%;
}

.blockDemo {
  margin-bottom: 0.8rem;
}
=======
  .block {
    color: var(--color-gray7);
    background-color: var(--color-brand);
    border-color: var(--color-gray5);
    border-radius: 10px;
    text-align: center;
    padding: 0.8rem 1.6rem;
    margin: 0.8rem;
  }
>>>>>>> feat(demo): añadiendo estilos específicos para la guía de estilos
</style>
```

```html
  <div class="float-desk-right">...</div>
```

## Clearfix

<<<<<<< HEAD
Controla que los elementos puedan flotar unicamente dentro de un bloque.
=======
Para controlar que los elementos solo floten dentro de un contenedor, utiliza la clase `.clearfix` en el contendor.
>>>>>>> feat(demo): añadiendo estilos específicos para la guía de estilos

En el siguiente ejemplo, sin añadir la clase clearfix, mostrará los dos botones en líneas separadas, lo que provocaría que el diseño se rompiese.

```demo
<template>
<<<<<<< HEAD
  <div class="floatDemo">
    <h4>Con clearfix</h4>
    <div class="clearfix margin-bottom-half">
      <div class="blockDemo float-left" type="brand">Izquierda</div>
      <div class="blockDemo float-right" type="brand">Derecha</div>
    </div>
    <p class="margin-bottom">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>

    <h4>Sin clearfix</h4>
    <div>
      <div class="blockDemo float-left margin-right-half" type="brand">Izquierda</div>
      <div class="blockDemo float-right margin-left-half" type="brand">Derecha</div>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
=======
  <div class="width-100 clearfix">
    <az-button class="block float-left" type="brand">Izquierda</az-button>
    <az-button class="block float-right" type="brand">Derecha</az-button>
>>>>>>> feat(demo): añadiendo estilos específicos para la guía de estilos
  </div>
</template>

<style>
<<<<<<< HEAD
.floatDemo {
  width: 100%;
}
</style>
```

``` html
=======
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
>>>>>>> feat(demo): añadiendo estilos específicos para la guía de estilos
<div class="clearfix">
  <az-button class="float-left">Izquierda</az-button>
  <az-button class="float-right">Derecha</az-button>
</div>
```
