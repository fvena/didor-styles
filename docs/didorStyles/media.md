# Objeto Multimedia

El objeto media es una composición de una imagen al lado de un texto.

:::page--media
<div class="media">
  <img src="/assets/logoIso.svg" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Cabecera</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>
:::

``` html
<div class="media">
  <img src="/assets/logo.jpg">
  <div class="media__body">
    <h3>Cabecera</h3>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>
```

## Alineación de la imagen

Podemos alinear la imagen respecto del contenido mediante las siguientes clases:

* `.media--middle` - Centra la imagen respecto del contenido.
* `.media--bottom` - Alinea la imagen y el contenido por abajo.
* `.media--right` - La imagen aparece a la derecha del contenido.

Las modificaciones se pueden sumar, es decir podemos centrar el contenido y la imagen verticalmente y que esta aparezca a la derecha añadiendo las dos clases `.media--middle.media--right`.

:::page--media
<div class="media margin-bottom">
  <img src="/assets/logoIso.svg" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación arriba</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>


<div class="media media--middle margin-bottom">
  <img src="/assets/logoIso.svg" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación centrada</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>


<div class="media media--bottom margin-bottom">
  <img src="/assets/logoIso.svg" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación abajo</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>


<div class="media media--right margin-bottom">
  <img src="/assets/logoIso.svg" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación derecha</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod elementum enim, ac aliquet sem consectetur non. Integer suscipit lacus eu turpis sagittis, sit amet venenatis leo dignissim.  Suspendisse facilisis urna dolor, sit amet lacinia dui mollis id.
  </div>
</div>
:::

``` html
<div class="media margin-bottom">
  <img src="/assets/logo.jpg" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación arriba</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>


<div class="media media--middle margin-bottom">
  <img src="/assets/logo.jpg" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación centrada</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>


<div class="media media--bottom margin-bottom">
  <img src="/assets/logo.jpg" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación abajo</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>


<div class="media media--right margin-bottom">
  <img src="/assets/logo.jpg" class="width-triple">
  <div class="media__body">
    <h4 class="no-margin">Alineación derecha</h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
  </div>
</div>
```
