# Visibilidad

Para facilitar un desarrollo adaptable, utiliza las clases `.hidden` y `.visible` para ocultar y mostrar elementos según el tamaño de pantalla.

## Mostrar elementos

Para que un elemento solo sea visible en un tamaño de pantalla concreto, primero
debes ocultar el elemento con la clase `.hidden` y luego indicar con la clase
`.*-visible` cuando será visible.


```html
<div class="hidden visible--tablet">
  Solo será visible en tamaños tablet
</div>
```

<div class="responsive responsive--title">
  <table class='responsive__table'>
    <tr>
      <th>&nbsp;</th>
      <th><dd-icon name="smartphone" scale="0.8"></dd-icon> Palm</th>
      <th><dd-icon name="tablet" scale="0.8"></dd-icon> Lap</th>
      <th><dd-icon name="small" scale="0.8"></dd-icon> Small</th>
      <th><dd-icon name="desktop" scale="0.8"></dd-icon> Desk</th>
      <th><dd-icon name="monitor" scale="0.8"></dd-icon> Large</th>
    </tr>
    <tr>
      <td><div>.visible</div></td>
      <td colspan='5'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td><div>.visible--palm</div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='4'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.visible--lap</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.visible--small</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.visible--desk</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td><div>.visible.-large</div></td>
      <td colspan='4'><div class='responsive__block responsive__block--disabled'></div></span></td>
      <td><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.visible--tablet</td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.visible--portrait</td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.visible--landscape</td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.visible--touch</td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.visible--screen</td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
    </tr>
  </table>

  <div class="responsive--background">
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
  </div>
</div>


## Ocultar elementos

```html
<div class="hidden--tablet">
  No será visible en tamaños tablet
</div>
```

<div class="responsive responsive--title">
  <table class='responsive__table'>
    <tr>
      <th>&nbsp;</th>
      <th><dd-icon name="smartphone" scale="0.8"></dd-icon> Palm</th>
      <th><dd-icon name="tablet" scale="0.8"></dd-icon> Lap</th>
      <th><dd-icon name="small" scale="0.8"></dd-icon> Small</th>
      <th><dd-icon name="desktop" scale="0.8"></dd-icon> Desk</th>
      <th><dd-icon name="monitor" scale="0.8"></dd-icon> Large</th>
    </tr>
    <tr>
      <td>.hidden</td>
      <td colspan='5'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.hidden--palm</td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='4'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--lap</td>
      <td><div class='responsive__block'>visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--small</td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--desk</td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
      <td><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--large</td>
      <td colspan='4'><div class='responsive__block'>visible</div></span></td>
      <td><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.hidden--tablet</td>
      <td><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--portrait</td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--landscape</td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
    <tr>
      <td>.hidden--touch</td>
      <td colspan='3'><div class='responsive__block responsive__block--disabled'></div></td>
      <td colspan='2'><div class='responsive__block'>visible</div></td>
    </tr>
    <tr>
      <td>.hidden--screen</td>
      <td colspan='3'><div class='responsive__block'>visible</div></td>
      <td colspan='2'><div class='responsive__block responsive__block--disabled'></div></td>
    </tr>
  </table>

  <div class="responsive--background">
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
    <div class="responsive__background__block"></div>
  </div>
</div>

## Tipo de visualización

Permite indicar como se visualizará un elemento:

* `.display-{breakpoint}-inline` elemento en línea.
* `.display-{breakpoint}-inline-block` bloque en línea.
* `.display-{breakpoint}-block` bloque.


```html
<div class="display-inline-block display-palm-block">
  Se comportará como un bloque en línea menos en dispositivos móviles que se comporatará como un bloque
</div>
```



## Impresión

Podemos mostrar/ocultar elementos especificamente para la impresión:

* `.hidden-print` oculta un elemento cuando se imprime la página.
* `.visible-print` el elemento solo será visible cuando se imprima la página.
* `.display-print-inline` elemento en línea.
* `.display-print-inline-block` bloque en línea.
* `.display-print-block` bloque.

```html
<div class="hidden-print">No será visible en impresión</div>
<div class="visible-print">Solo será visible en impresión</div>
```
