# Posicionamiento

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
