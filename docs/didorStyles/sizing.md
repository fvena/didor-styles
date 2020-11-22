# Tamaños

Modifica el tamaño de un elemento cuando lo necesites en altura y anchura.

## Configuración

```scss
$space: $line-height * 1rem !default;
```

## Funciones

Podemos definir un tamaño o espaciado en nuestros archivos `sass` mediante la función `size(...)`. Esta función nos devolverá el valor indicado multiplicado por nuestro tamaño base.

Admite cualquier valor númerico, incluidos números negativos.

::: page--size
  <div><div class="page-block display-inline-block no-padding width-quarter"></div>quarter() => 1/4x</div>
  <div><div class="page-block display-inline-block no-padding width-half"></div>half() => 1/2x</div>
  <div><div class="page-block display-inline-block no-padding width"></div>simple() => x</div>
  <div><div class="page-block display-inline-block no-padding width-double"></div>double() => 2x</div>
  <div><div class="page-block display-inline-block no-padding width-triple"></div>triple() => 3x</div>
  <div><div class="page-block display-inline-block no-padding width-quadruple"></div>quadruple() => 4x</div>
  <div><div class="page-block display-inline-block no-padding width-quintuple"></div>quintuple() => 5x</div>
  <div><div class="page-block display-inline-block no-padding width-sextuple"></div>sextuple() => 6x</div>
:::

``` scss
.elemento1 {
  width: size(1/2);
  height: size(2);
}

.elemento2 {
  margin: size() size(2);
}

.elemento3 {
  margin-top: size(-2);
}
```

También existen funciones con los nombres estandarizados, para mejorar la semántica del framework:

``` scss
width: quarter();    // 1/4 * $space
width: half();      // 1/2 * $space
width: simple();     // $space
width: double();     // 2 * $space
width: triple();     // 3 * $space
width: quadruple();  // 4 * $space
width: quintuple();  // 5 * $space
width: sextuple();   // 6 * $space
```

``` scss
.elemento1 {
  width: quarter();
  height: double();
}

.elemento2 {
  margin: simple() double();
}

.elemento3 {
  margin-top: double('-');
}
```

## Valores Relativos

Por defecto, todas las dimensiones del framework se toman relativas a una cuadrícula del tamaño de la altura de línea.

Es una técnica utilizada en diseño editorial, y garantiza que todos los espacios entre elementos así como sus dimensiones mantengan una proporcionalidad.

::: page--size
<div>
  <div class="page-block display-inline-block no-padding width-quarter"></div>quarter
  <span class="small1-normal-gray">(1/4x)</span>
</div>
<div>
  <div class="page-block display-inline-block no-padding width-half"></div>half
  <span class="small1-normal-gray">(1/2x)</span>
</div>
<div>
  <div class="page-block display-inline-block no-padding width"></div>width
  <span class="small1-normal-gray">(x)</span>
</div>
<div>
  <div class="page-block display-inline-block no-padding width-double"></div>double
  <span class="small1-normal-gray">(2x)</span>
</div>
<div>
  <div class="page-block display-inline-block no-padding width-triple"></div>triple
  <span class="small1-normal-gray">(3x)</span>
</div>
<div>
  <div class="page-block display-inline-block no-padding width-quadruple"></div>quadruple
  <span class="small1-normal-gray">(4x)</span>
</div>
<div>
  <div class="page-block display-inline-block no-padding width-quintuple"></div>quintuple
  <span class="small1-normal-gray">(5x)</span>
</div>
<div>
  <div class="page-block display-inline-block no-padding width-sextuple"></div>sextuple
  <span class="small1-normal-gray">(6x)</span>
</div>
:::

## Valores Porcentuales

También existen tamaños predefinidos proporcionales al elemento padre o a la ventana del navegador
### Decenas

::: page--size
  <div class="page-block width-10">10%</div>
  <div class="page-block width-20">20%</div>
  <div class="page-block width-30">30%</div>
  <div class="page-block width-40">40%</div>
  <div class="page-block width-50">50%</div>
  <div class="page-block width-60">60%</div>
  <div class="page-block width-70">70%</div>
  <div class="page-block width-80">80%</div>
  <div class="page-block width-90">90%</div>
  <div class="page-block width-100">100%</div>
:::

### Cuartos

::: page--size
  <div class="page-block width-25">25%</div>
  <div class="page-block width-50">50%</div>
  <div class="page-block width-75">75%</div>
  <div class="page-block width-100">100%</div>
:::

### Tercios

::: page--size
  <div class="page-block width-33">33%</div>
  <div class="page-block width-66">66%</div>
  <div class="page-block width-100">100%</div>
:::

## Altura y Anchura

Por defecto, Didor tiene definido varias clases para modificar el tamaño de un elemento. En el caso de valores porcentuales, se pueden aplicar respecto al elemento padre o respecto a la ventana del navegador:

``` html
<!-- RELATIVOS -->
<!-- quarter -->
<!-- half -->
<!-- simple -->
<!-- double -->
<!-- triple -->
<!-- quadruple -->
<!-- quintuple -->
<!-- sextuple -->
<div class="width-half">...</div>
<div class="width">...</div>
<div class="height-double">...</div>

<!-- PROPORCIONALES AL ELEMENTO PADRE -->
<!-- 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 -->
<!-- 25, 50, 75 -->
<!-- 33, 66 -->
<div class="width-20">...</div>
<div class="width-50">...</div>
<div class="height-75">...</div>

<!-- PROPORCIONALES AL NAVEGADOR -->
<!-- 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 -->
<!-- 25, 50, 75 -->
<!-- 33, 66 -->
<div class="vw-20">...</div>
<div class="vw-50">...</div>
<div class="vh-75">...</div>

<!-- AUTO -->
<div class="width-auto">...</div>
<div class="height-auto">...</div>
```
