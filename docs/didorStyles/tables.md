# Tablas

## Tabla básica

Didor aplica el siguiente diseño por defecto a todas las tablas:

::: page--table
<table class=" no-margin">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <td>002</td>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
:::

``` html
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <td>002</td>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
```

## Tablas a rayas

::: page--table
<table class="table--striped no-margin">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <td>002</td>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
:::

``` html
<table class="table--striped">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <td>002</td>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
```

## Hover sobre las filas

::: page--table
<table class="table--striped table--hover no-margin">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <td>002</td>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
:::

``` html
<table class="table--striped table--hover">
  <thead>
    <tr>
      <th>#</th>
      <th>Nombre</th>
      <th>Apellidos</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>001</td>
      <td>Francisco</td>
      <td>Vena</td>
      <td>@fvena</td>
    </tr>
    <tr>
      <td>002</td>
      <td>John</td>
      <td>Doe</td>
      <td>@johndoe</td>
    </tr>
    <tr>
      <td>003</td>
      <td>Alice</td>
      <td>Doe</td>
      <td>@alicecooper</td>
    </tr>
  </tbody>
</table>
```

## Tabla scrollable

::: page--table
<div class="table-wrapper width-50 width-palm-100">
  <table class="no-margin">
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>Francisco</td>
        <td>Vena</td>
        <td>@fvena</td>
        <td>fvena32@gmail.com</td>
      </tr>
      <tr>
        <td>002</td>
        <td>John</td>
        <td>Doe</td>
        <td>@johndoe</td>
        <td>johndoe@email.com</td>
      </tr>
      <tr>
        <td>003</td>
        <td>Alice</td>
        <td>Cooper</td>
        <td>@alicecooper</td>
        <td>alicecooper@email.com</td>
      </tr>
    </tbody>
  </table>
</div>
:::

``` html
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Apellidos</th>
        <th>Username</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>001</td>
        <td>Francisco</td>
        <td>Vena</td>
        <td>@fvena</td>
        <td>fvena32@gmail.com</td>
      </tr>
      <tr>
        <td>002</td>
        <td>John</td>
        <td>Doe</td>
        <td>@johndoe</td>
        <td>johndoe@email.com</td>
      </tr>
      <tr>
        <td>003</td>
        <td>Alice</td>
        <td>Cooper</td>
        <td>@alicecooper</td>
        <td>alicecooper@email.com</td>
      </tr>
    </tbody>
  </table>
</div>
```

## Tabla adaptable

:::text-center
`.table--responsive`
`.table-{breakpoint}--responsive`
:::

::: page--table
<div class="width-50 width-palm-100">
  <table class="table--responsive">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellidos</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="#">001</td>
        <td data-label="Nombre">Francisco</td>
        <td data-label="Apellidos">Vena</td>
        <td data-label="Username">@fvena</td>
        <td data-label="Email">fvena32@gmail.com</td>
      </tr>
      <tr>
        <td data-label="#">002</td>
        <td data-label="Nombre">John</td>
        <td data-label="Apellidos">Doe</td>
        <td data-label="Username">@johndoe</td>
        <td data-label="Email">johndoe@email.com</td>
      </tr>
      <tr>
        <td data-label="#">003</td>
        <td data-label="Nombre">Alice</td>
        <td data-label="Apellidos">Cooper</td>
        <td data-label="Username">@alicecooper</td>
        <td data-label="Email">alicecooper@email.com</td>
      </tr>
    </tbody>
  </table>
</div>
:::

``` html
<table class="table--responsive">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="#">001</td>
      <td data-label="Nombre">Francisco</td>
      <td data-label="Apellidos">Vena</td>
      <td data-label="Username">@fvena</td>
      <td data-label="Email">fvena32@gmail.com</td>
    </tr>
    <tr>
      <td data-label="#">002</td>
      <td data-label="Nombre">John</td>
      <td data-label="Apellidos">Doe</td>
      <td data-label="Username">@johndoe</td>
      <td data-label="Email">johndoe@email.com</td>
    </tr>
    <tr>
      <td data-label="#">003</td>
      <td data-label="Nombre">Alice</td>
      <td data-label="Apellidos">Cooper</td>
      <td data-label="Username">@alicecooper</td>
      <td data-label="Email">alicecooper@email.com</td>
    </tr>
  </tbody>
</table>
```
