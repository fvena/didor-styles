# Posicionamiento

## Posicionar elementos

Posicione rapidamente los elementos de su diseño.

Las clases con las posiciones más comunes son:

``` html
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
```

## Posicionamiento pegajoso

Seguramente habrá una traducción mejor para el tipo de posicionamiento `sticky`, pero para mi, es la cualidad que mejor describe su comportamiento.

El posicionamiento sticky permite que al hacer scroll, un elemento se quede *pegado* en la posición indicada mediante las propiedades **top** y **bottom**.

### Posicionar arriba

Cuando el objeto llega a la parte superior de la página, se queda fijo.

<div class="block-position block-position--top sticky-top">
  .sticky-top
</div>

```html
<div class="sticky-top" style="top: 4.8rem">
  .sticky-top
</div>
```

::: remark
En este ejemplo hemos modificado la propiedad top, para que se quede justo debajo del menú.
:::

### Posicionar abajo

El objeto se mantiene fijo en la parte inferior de la pantalla mientras hacemos scroll, hasta que llegamos a su posición.

<div class="block-position block-position--bottom sticky-bottom">
  .sticky-bottom
</div>


```html
<div class="sticky-bottom">
  .sticky-bottom
</div>
```

::: remark
Reduce la altura de la página para ver el efecto.
:::

## Posicionamiento fijo

### Posicionar arriba

Posiciona un elemento de forma fija en la parte superior de la pantalla.

```html
<div class="fixed-top">...</div>
```

### Posicionar abajo

Posiciona un elemento de forma fija en la parte inferior de la pantalla.

```html
<div class="fixed-bottom">...</div>
```

## Responsive

Puedes indicar como debe posicionarse un elemento según el tamaño de la pantalla:

* `.position-{palm|lap|small|desk|large}-static`
* `.position-{palm|lap|small|desk|large}-relative`
* `.position-{palm|lap|small|desk|large}-absolute`
* `.fixed-{palm|lap|small|desk|large}-top`
* `.fixed-{palm|lap|small|desk|large}-bottom`
* `.sticky-{palm|lap|small|desk|large}-top`
* `.sticky-{palm|lap|small|desk|large}-bottom`

:::page--position
  <div class="page-block-responsive fixed-palm-bottom">
    <dd-icon name="smartphone" scale="0.8"></dd-icon>
    Posicionamiento fijo en móviles
  </div>
  <div class="page-block-responsive fixed-lap-bottom">
    <dd-icon name="tablet" scale="0.8"></dd-icon>
    Posicionamiento fijo en tablet verticales
  </div>
  <div class="page-block-responsive fixed-small-bottom">
    <dd-icon name="small" scale="0.8"></dd-icon>
    Posicionamiento fijo en tablet horizontales
  </div>
  <div class="page-block-responsive fixed-desk-bottom">
    <dd-icon name="desktop" scale="0.8"></dd-icon>
    Posicionamiento fijo en pantallas
  </div>
  <div class="page-block-responsive fixed-large-bottom">
    <dd-icon name="monitor" scale="0.8"></dd-icon>
    Posicionamiento fijo en pantallas grandes
  </div>
:::

```html
<div class="fixed-palm-bottom">Posicionamiento fijo en móviles</div>
<div class="fixed-lap-bottom">Posicionamiento fijo en tablet verticales</div>
<div class="fixed-small-bottom">Posicionamiento fijo en tablet horizontales</div>
<div class="fixed-desk-bottom">Posicionamiento fijo en pantallas</div>
<div class="fixed-large-bottom">Posicionamiento fijo en pantallas grandes</div>
```
