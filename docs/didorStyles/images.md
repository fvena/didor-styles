# Imágenes

## Imágenes adaptables a su contenedor

Por defecto, Didor no modifica el tamaño de la imágenes, pero limita la anchura máxima de una imagen al tamaño de su contenedor para que nunca puede verse cortada.

Si la anchura de la imagen es menor que su contenedor, por defecto se verá un espacio, pero si queremos que la imagen crezca para ajustarse siempre al ancho de su contenedor, debemos aplicar la clase `.image--fluid`.

### Imagen por defecto

:::page--image
  <img src="/assets/lion.jpg" >
:::

``` html
<img src="/assets/lion.jpg">
```

### Imagen adaptable

:::page--image
  <img src="/assets/lion.jpg" class="image--fluid">
:::

``` html
<img src="/assets/lion.jpg" class="image--fluid">
```

## Imágenes enmarcadas

Didor te permite un par de variaciones para enmarcar una imagen.

:::page--image
  <img src="/assets/lion.jpg" class="image--shadow">
:::

``` html
<img src="/assets/lion.jpg" class="image--shadow">
```

:::page--image
  <img src="/assets/lion.jpg" class="image--frame">
:::

``` html
<img src="/assets/lion.jpg" class="image--frame">
```

## Pies de foto

Con la etiqueta HTML `<figure>` podemos añadir pies de foto o la autoría de un contenido multimedia.

:::page--image
<figure>
  <img src="/assets/lion.jpg" class="image--shadow">
  <figcaption>Pie de foto</figcaption>
</figure>
:::


``` html
<figure>
  <img src="/assets/lion.jpg" class="image--shadow">
  <figcaption>Pie de foto</figcaption>
</figure>
```
