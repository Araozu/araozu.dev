---
layout: ../../../layouts/BlogLayout.astro
title: "07: Cero a Zig - Variables"
description: |
    Introducción a las variables
pubDate: "2024-08-10"
tags: ["tech", "lenguajes", "intro", "tutorial", "zig", "VSCode"]
image: 
    url: ""
    alt: ""
    caption: ""
---

Ahora veremos un concepto fundamental: Variables.

Todo el código lo escribiremos en el proyecto que creamos
en el artículo anterior.


## Motivación

Vamos a plantear un escenario: Queremos escribir un programa
que salude a una persona, le diga cuanto cuesta su orden,
y se despida.

Digamos que la persona se llama `Juan`. El código es así:

```zig
const std = @import("std");

pub fn main() !void {
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Tu pedido cuesta {s} dolares\n", .{"20"});
    std.debug.print("Adios {s}\n", .{"Juan"});
}
```

Y al ejecutarlo se muestra:

![Codigo](/img/blog/es/tutorial/1x/001.jpg)

Como el código es sencillo, no hay ningún problema.
¿Pero qué pasaría si tuvieramos que imprimir el nombre 10 veces?
Entonces tendríamos que repetirlo 10 veces.

```zig
const std = @import("std");

pub fn main() !void {
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Hola {s}\n", .{"Juan"});
    std.debug.print("Hola {s}\n", .{"Juan"});
}
```

![Codigo](/img/blog/es/tutorial/1x/002.jpg)

Un poco tedioso, pero nada imposible.

Ahora vamos a cambiar el programa: el nombre de la
persona será `Maria`.

Lo que tenemos que hacer es cambiar `Juan` por
`Maria` en los 10 lugares, uno por uno.

Esto es bastante común, y existe una solución para
no cambiar 10 veces, sino solamente una.


## Variables

Una variable es como un almacén. Una variable
almacena un valor bajo un nombre.

Por ejemplo, podemos decir que `nombre = "Juan"`,
y a partir de ese momento cada vez que usemos
`nombre` se reemplazará por `Juan`.

Por ejemplo:

```zig
const std = @import("std");

pub fn main() !void {
    const nombre = "Juan";
    std.debug.print("Hola {s}\n", .{nombre});
}
```

En el código de arriba en la linea 4, hemos creado una
variable `nombre`, y le hemos dado como valor `"Juan"`.

Despues, en la linea 5 estamos utilizando la variable.
En vez de escribir `.{"Juan"}` escribimos `.{nombre}`.

Al ejecutar el programa se imprimirá `Hola Juan`

![Codigo](/img/blog/es/tutorial/1x/003.jpg)

Podemos utilizar la variable las veces que queramos.
Si imprimimos 10 veces se vería así:

```zig
const std = @import("std");

pub fn main() !void {
    const nombre = "Juan";
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
}
```

Y al ejecutar se imprime 10 veces.

![Codigo](/img/blog/es/tutorial/1x/004.jpg)

Ahora, si queremos cambiar `Juan` por `Maria`,
solo tenemos que hacerlo en un lugar:

```zig
const std = @import("std");

pub fn main() !void {
    const nombre = "Maria";
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
    std.debug.print("Hola {s}\n", .{nombre});
}
```
![Codigo](/img/blog/es/tutorial/1x/005.jpg)


## Creando una variable

Para crear una variable se escribe:

- `const`
- El nombre de la variable
- `=`
- El valor de la variable
- `;`

El nombre de la variable solo puede tener letras,
números y guiones bajos. No puede tener espacios.

Puedes crear varias variables, cada una en una
línea. Por ejemplo:

```zig
const nombre = "Pedro";
const edad = "32";
const helado_favorito = "Vainilla";
```




