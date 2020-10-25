# Imágenes

## Imágenes adaptables

Por defecto, Didor no modifica el tamaño de la imágenes, pero limita la anchura máxima de una imagen al tamaño de su contenedor para que nunca puede verse cortada. Por otro lado, si la anchura de la imagen es menor que su contenedor, se verá un espacio.

Si queremos que una imagen crezca siempre ajustándose al ancho de su contenedor, debemos aplicar la clase `.image--fluid`.

<p class="margin-bottom">
  <img src="/assets/lion.jpg" style="height: 150px" >
</p>

<p>
  <img src="/assets/lion.jpg" class="image--fluid">
</p>

``` html
<img src="/assets/lion.jpg">

<img src="/assets/lion.jpg" class="image--fluid">
```

## Imágenes enmarcadas

Didor te permite un par de variaciones para enmarcar una imagen.

<div style="height: 210px">
  <img src="/assets/lion.jpg" class="image--frame margin-right-double" style="vertical-align: top">

  <img src="/assets/lion.jpg" class="image--polaroid">
</div>

``` html
<img src="/assets/lion.jpg" class="image--frame">

<img src="/assets/lion.jpg" class="image--polaroid">
```

## Pies de foto

Con la etiqueta HTML `<figure>` podemos añadir pies de foto o la autoría de un contenido multimedia.

<figure style="height: 180px">
  <img src="/assets/lion.jpg">
  <figcaption>Logotipo de la Aidoo</figcaption>
</figure>

``` html
<figure>
  <img src="/assets/lion.jpg">
  <figcaption>Logotipo de la Aidoo</figcaption>
</figure>
```
