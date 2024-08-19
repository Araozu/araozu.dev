---
layout: ../../../layouts/BlogLayoutEs.astro
title: "09: Cero a Zig - Comentarios y Números"
description: |
    Comentarios, números y operaciones matemáticas
pubDate: "2024-08-17"
tags: ["tech", "lenguajes", "intro", "tutorial", "zig", "VSCode"]
image: 
    url: "/img/blog/es/tutorial/1x/009-matematicas.jpg"
    alt: "Imágen del meme 'Matemáticas hijo'"
    caption: "¡Matemáticas hijo!"
---

En este artículo vemos 3 conceptos: Comentarios, números
y operaciones matemáticas.


## Comentarios

Hasta el momento lo único que hemos escrito es código.
Pero existen multitud de ocasiones donde queremos escribir
apuntes, recordatorios, explicaciones, etc. Para esto sirven
los comentarios.

Un comentario es un texto que es ignorado por Zig. Dentro
de un comentario podemos escribir cualquier cosa, sin importar
las reglas de Zig.

Los comentarios inician con doble slash `//`,
y terminan cuando acaba la linea.


```zig
// Este es un comentario
pub fn main() !void {
    // Este también es un comentario
    std.debug.print("Hola", .{});
}
```

Una vez que iniciamos un comentario con doble slash,
la única forma de terminarlo es con una linea nueva.

Si quieres un comentario que abarque varias lineas,
cada linea debe iniciar con doble slash:

```zig
pub fn main() !void {
    // Este es un comentario
    // que ocupa 3 lineas
    // de texto :D
    std.debug.print("Hola", .{});
}
```

También puedes escribir un comentario en
medio de una linea con código, pero no
es recomendable.

```zig
pub fn main() !void {  // Este es un comentario
    std.debug.print("Hola", .{}); // Este también
}
```

A partir de ahora, utilizaré comentarios en el código
para explicar mejor los conceptos.


## Números

Hay un concepto importante que aprenderemos en un
próximo artículo llamado "Tipos de datos". Pero por
ahora, hablaremos solo de una parte pequeña: números.

No necesito explicarte qué son los números. Lo que
sí necesito es explicar cómo se utilizan en Zig,
y como se diferencian de los strings.

Primero, vamos a imprimir un número. El código
es el siguiente:

```zig
const std = @import("std");

pub fn main() !void {
    std.debug.print("{d}", .{322});
}
```

Nota que el número no tiene comillas. Es `322`,
no `"322"`.

Al ejecutarlo en el terminal con `zig build run`
obtenemos:


![Codigo](/img/blog/es/tutorial/1x/010.jpg)

Nota en la línea 4 qué formato estamos utilizando:
`{d}`. Este formato permite imprimir números.


También podemos utilizar números en variables:

```zig
const std = @import("std");

pub fn main() !void {
    const edad = 32;
    // Imprime: `Tengo 32 años`
    std.debug.print("Tengo {d} años", .{edad});
}
```

También podemos utilizar números negativos: `-20`;



### Números, no strings

Quiero recalcar este punto. Estamos escribiendo
`123`, no `"123"`. No utilizamos comillas.

Esto es importante porque estos dos son cosas
diferentes. Una cosa es un número, y otra cosa
es un texto (string).

`123` es un número. Podemos realizar operaciones
matemáticas con él. `"123"` no es un número,
es un string. Solo que resulta que los caracteres
son el 1, 2 y 3. Pero no podemos hacer matemática
con un string.

Este es un punto de confusión común cuando se
aprende a programar.


### Números enteros, técnicamente (`int`)

Técnicamente, hay muchos tipos de números.
Lo que estamos utilizando hasta ahora son números 
enteros, que en ingles se llaman "integer numbers".

Ya que en programación todo es inglés y abreviaciones,
en vez de decir "integer numbers", se les conoce como
"int".

A partir de ahora también diré `int` cuando me
refiera a los números enteros.


## Matemáticas

Ahora que sabemos cómo crear números (int), podemos hacer
operaciones con ellos.

Zig soporta las operaciones que conoces: suma `+`,
resta `-`, multiplicación `*` y división `/`.

```zig
const std = @import("std");

pub fn main() !void {
    const r1 = 9 + 3;   // 12
    const r2 = 9 - 3;   // 6
    const r1 = 9 * 3;   // 27
    const r1 = 9 / 3;   // 3

    // imprime: `12 6 27 3`
    std.debug.print("{d} {d} {d} {d}", .{r1, r2, r3, r4});
}
```

También puedes hacer varias operaciones a la vez, y
agruparlas con paréntesis.

```zig
    const resultado = 80 + 20 / (5 - 3);
```




## Números racionales (float)


