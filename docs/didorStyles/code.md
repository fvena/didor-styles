# Código

Muestra bloques de código y código en línea.

## Configuración

```scss
/** Código en línea */
$inline-code-color: color(brand-dark);
$inline-code-background: color(gray7);

/** Código en bloque */
$code-color: color(brand-dark);
$code-background: color(gray2);

/** Entrada de teclado */
$kbd-color: color(gray8);
$kbd-background: color(gray2);
```

## Código en línea

::: page--code
Ejemplo de código en linea con la etiqueta <code>&lt;section&gt;</code>.
:::

```html
Ejemplo de código en linea con la etiqueta <code>&lt;section&gt;</code>.
```

::: tip
Si quieres representar una etiqueta HTML, recuerda escapar los caracterés especiales para que no se interpreten como código HTML.

* `<`: `&lt;`
* `>`: `&gt;`
:::

## Código en bloque

<pre>
<code>
Línea de prueba..
Otra línea de de prueba...
</code>
</pre>

``` html
<pre>
  <code>
    Línea de prueba..
    Otra línea de de prueba...
  </code>
</pre>
```

## Entrada de teclado

Si queremos indicar que un usuario tiene que introducir algún dato mediante teclado, o es una combinación de teclas, utilizaremos la etiqueta `<kbd>`.

::: page--code
Para entrar en un directorio, escribe <kbd>cd</kbd> seguido del nombre del directorio.<br>
Para terminar el proceso, presiona <kbd>ctrl + q</kbd>.
:::

``` html
Para entrar en un directorio, escribe <kbd>cd</kbd> seguido del nombre del directorio.<br>
Para terminar el proceso, presiona <kbd>ctrl + q</kbd>.
```
