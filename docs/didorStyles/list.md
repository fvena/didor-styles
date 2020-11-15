# Listados

Los listados nos permiten enumerar una secuencia de elementos. Didor tiene varios tipos para ajustarse a tus necesidades.

## Listas no numeradas

:::page--list
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa
    <ul>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
      <li>Phasellus iaculis neque</li>
    </ul>
  </li>
  <li>Purus sodales ultricies</li>
  <li>Vestibulum laoreet porttitor sem</li>
</ul>
:::

``` html
<ul>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa
    <ul>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
      <li>Phasellus iaculis neque</li>
    </ul>
  </li>
  <li>Purus sodales ultricies</li>
  <li>Vestibulum laoreet porttitor sem</li>
</ul>
```

## Listas numeradas

:::page--list
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa
    <ol>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
      <li>Phasellus iaculis neque</li>
    </ol>
  </li>
  <li>Purus sodales ultricies</li>
  <li>Vestibulum laoreet porttitor sem</li>
</ol>
:::

``` html
<ol>
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa
    <ol>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
      <li>Phasellus iaculis neque</li>
    </ol>
  </li>
  <li>Purus sodales ultricies</li>
  <li>Vestibulum laoreet porttitor sem</li>
</ol>
```

## Listas sin estilo

Elimina el estilo por defecto del primer nivel de la lista en la que aplica la clase.

::: page--list
<ul class="list--unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa
    <ul>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
      <li>Phasellus iaculis neque</li>
    </ul>
  </li>
  <li>Purus sodales ultricies</li>
  <li>Vestibulum laoreet porttitor sem</li>
</ul>
:::

``` html
<ul class="list--unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa
    <ul>
      <li>Facilisis in pretium nisl aliquet</li>
      <li>Nulla volutpat aliquam velit
      <li>Phasellus iaculis neque</li>
    </ul>
  </li>
  <li>Purus sodales ultricies</li>
  <li>Vestibulum laoreet porttitor sem</li>
</ul>
```

## Lista en una línea

::: page--list
<ul class="list--inline">
  <li>Lorem ipsum</li>
  <li>Phasellus iaculis</li>
  <li>Nulla volutpat</li>
</ul>
:::

``` html
<ul class="list--inline">
  <li>Lorem ipsum</li>
  <li>Phasellus iaculis</li>
  <li>Nulla volutpat</li>
</ul>
```
