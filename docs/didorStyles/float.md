# Float

Puedes hacer que un elemento flote a la izquierda o la derecha facilmente con las clases de ayuda definidas por defecto. También las puedes utilizar de forma responsive utilizando los mismo breakpoints definidos en el responsive.

```demo
<template>
  <div class="floatDemo">
    <div class="clearfix margin-bottom-double">
      <div class="blockDemo float-left margin-right">Flotando a la izquierda</div>
      <div class="blockDemo float-right margin-left">Flotando a la derecha</div>
    </div>
    <div class="blockDemo float-none">No estoy flotando</div>
    </div>
  </div>
</template>

<style>
.floatDemo {
  width: 100%;
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
    </div>
  </div>
</template>

<style>
.floatDemo {
  width: 100%;
}

.blockDemo {
  margin-bottom: 0.8rem;
}
</style>
```

```html
  <div class="float-desk-right">...</div>
```

## Clearfix

Controla que los elementos puedan flotar unicamente dentro de un bloque.

En el siguiente ejemplo, sin añadir la clase clearfix, mostrará los dos botones en líneas separadas, lo que provocaría que el diseño se rompiese.

```demo
<template>
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
  </div>
</template>

<style>
.floatDemo {
  width: 100%;
}
</style>
```

``` html
<div class="clearfix">
  <az-button class="float-left">Izquierda</az-button>
  <az-button class="float-right">Derecha</az-button>
</div>
```
