# Float

## Flotar elementos

Puedes hacer que un elemento flote a la izquierda o la derecha fácilmente con las clases de ayuda definidas por defecto.

:::page--float
<div class="clearfix margin-bottom-double">
  <div class="page-block float-left">Flotando a la izquierda</div>
  <div class="page-block float-right">Flotando a la derecha</div>
</div>

<div class="page-block float-none">No estoy flotando</div>
:::

```html
<div class="float-left">Flotando a la izquierda</div>
<div class="float-right">Flotando a la derecha</div>
<div class="float-none">No estoy flotando</div>
```

## Responsive

Puedes indicar como debe flotar un elemento para los diferentes tamaños de pantalla.

```pug
.float-{palm|lap|small|desk|large}-left
.float-{palm|lap|small|desk|large}-right
.float-{palm|lap|small|desk|large}-none
```

:::page--float--responsive
<div class="clearfix">
  <div class="page-block-responsive float-palm-right">
    <dd-icon name="smartphone" scale="0.8"></dd-icon>
    Flotando a la derecha en móviles
  </div>
</div>

<div class="clearfix">
  <div class="page-block-responsive float-lap-right">
    <dd-icon name="tablet" scale="0.8"></dd-icon>
    Flotando a la derecha en tablet verticales
  </div>
</div>

<div class="clearfix">
  <div class="page-block-responsive float-small-right">
    <dd-icon name="small" scale="0.8"></dd-icon>
    Flotando a la derecha en tablet horizontales
  </div>
</div>

<div class="clearfix">
  <div class="page-block-responsive float-desk-right">
    <dd-icon name="desktop" scale="0.8"></dd-icon>
    Flotando a la derecha en pantallas
  </div>
</div>

<div class="clearfix">
  <div class="page-block-responsive float-large-right">
    <dd-icon name="monitor" scale="0.8"></dd-icon>
    Flotando a la derecha en pantallas grandes
  </div>
</div>
:::

```html
  <div class="float-desk-right">...</div>
```

## Clearfix

Para controlar que los elementos solo floten dentro de un contenedor, utiliza la clase `.clearfix` en el contenedor.

```html
<div class="clearfix">
  <div class="float-left">Izquierda</div>
  <div class="float-right">Derecha</div>
</div>
```
