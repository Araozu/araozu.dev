---
layout: ../../../layouts/BlogLayoutEs.astro
title: "07: Cero a Zig - Impresión con formatos"
description: |
    Imprimiendo información adicional.
pubDate: "2024-08-10"
tags: ["tech", "lenguajes", "intro", "tutorial", "zig", "VSCode"]
image: 
    url: ""
    alt: ""
    caption: ""
---

En este artículo aprenderemos más acerca de la impresión,
especialmente un aspecto importante para futúros artículos:
formatos.

## Formato de impresión

El código para imprimir texto tiene dos partes:

```zig
//              --- 1 ---  -2-
std.debug.print("formato", .{});
```

- 1: un formato (string)
- 2: datos adicionales

Hasta ahora utilizamos el primer string (1) para imprimir
nuestro texto. Pero en (1) podemos poner unas secuencias
especiales, que permiten colocar información adicional.
Esta información adicional se coloca en (2).

Por ejemplo, podemos colocar `{s}` para imprimir un
texto adicional:

![Codigo](/img/blog/es/tutorial/1x/011.png)

En este caso, `{s}` será reemplazado por `Hola`, e
imprimirá `Hola`.

Otro ejemplo:

![Codigo](/img/blog/es/tutorial/1x/012.jpg)

Aquí también, `{s}` será reemplazado por `Sara`.
Al ejecutar obtendremos `Mi nombre es Sara, y el tuyo?`

Podemos colocar más de un formato:

![Codigo](/img/blog/es/tutorial/1x/013.jpg)

En este caso la información adicional se reemplaza en orden,
e imprime `Soy Raul y ella es Rosa`.

Cuando se colocan datos adicionales, se separan con comas:

```zig
    .{"Raul", "Rosa"}
    //      |
```

En el siguiente artículo veremos un concepto
llamado variables. Por ahora, solo necesitas
saber que se pueden utilizar.

```zig
const std = @import("zig");

pub fn main() !void {
    const nombre = "Juan";
    const apellido = "Perez";
    std.debug.print("{s} {s}", .{nombre, apellido});
    // Imprime: `Juan Perez`
}
```


## Otros formatos

Hemos visto el formato `{s}`, pero existen muchos más,
que aprenderemos a medida que los necesitemos.



