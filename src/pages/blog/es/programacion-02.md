---
layout: ../../../layouts/BlogLayoutEs.astro
title: "Cero a Zig 02: Fundamentos"
description: |
    Fundamentos de la computación, programas, componentes
pubDate: "2024-07-16"
tags: ["tech", "lenguajes", "intro", "tutorial"]
image: 
    url: ""
    alt: ""
    caption: ""
---

En este artículo explico conceptos fundamentales de los computadores,
programas y computación.

## Qué es un computador?

Un computador es cualquier dispositivo que se puede **"configurar"**
para que realize tareas que nosotros querramos.

Por ejemplo, los celulares son computadores con los que podemos
usar apps, escribir mensajes, tomar fotos y videos, jugar juegos,
etc. 

![Imagen de un iPhone](/img/blog/es/tutorial/001-iphone.jpg)

Una calculadora también es un computador, nos permite realizar operaciones
matemáticas simples. Solo que en cierto sentido, una calculadora solo es
capaz de ejecutar un programa.

![Imagen de una calculadora](/img/blog/es/tutorial/002-calculadora.jpg)

Para hacer cada una de estas acciones utilizamos "apps" o "programas".

Por ejemplo, utilizamos el **programa** "WhatsApp" para enviar y recibir
mensajes de texto, voz o video, el **programa** "Photoshop" para editar
fotos, o el **programa** "Word" para escribir documentos.


## Qué es un programa

Al nivel más fundamental, un programa es una lista de instrucciones
que ejecuta un computador. Me gusta hacer la analogía de un Chef
preparando una Pizza:


![Imagen de un chef](/img/blog/es/tutorial/003-chef.jpg)

Un Chef realiza una operacion: transforma ingredientes en un plato.
Para esto necesita 2 cosas:

- los ingredientes (obviamente) 
- una receta

El Chef toma la receta y sigue los pasos en ella. La receta indica qué
tiene que hacer con cada ingrediente, cuándo y cómo.

![Analogía 1](/img/blog/es/tutorial/004-analogia1.jpg)

En esta analogía la receta es el programa, y el chef es el computador.


![Analogía 2](/img/blog/es/tutorial/005-analogia2.jpg)

El programa (por ejemplo, Photoshop) es una lista de instrucciones
que, cuando el computador ejecuta, edita una foto.

Aunque a nosotros nos parece que Photoshop tiene botones y figuras
y paneles y demás, en realidad Photoshop no es más que un monton
de instrucciones (**código**) debajo del capó.

![Analogía 3](/img/blog/es/tutorial/006-codigo.jpg)


## Qué es el código?

```zig
const std = @import("std");
const parseInt = std.fmt.parseInt;

test "parse integers" {
    const input = "123 67 89,99";
    const ally = std.testing.allocator;

    var list = std.ArrayList(u32).init(ally);
    // Ensure the list is freed at scope exit.
    // Try commenting out this line!
    defer list.deinit();

    var it = std.mem.tokenizeAny(u8, input, " ,");
    while (it.next()) |num| {
        const n = try parseInt(u32, num, 10);
        try list.append(n);
    }

    const expected = [_]u32{ 123, 67, 89, 99 };

    for (expected, list.items) |exp, actual| {
        try std.testing.expectEqual(exp, actual);
    }
}
```

Siguiendo la analogía del Chef, el código es lo que compone la "receta"
(el programa). Se puede decir que son los "pasos" que la computadora realizará.

Si la receta dice: `Amasar la masa durante 5 minutos`

El código sería: `std.ArrayList(u32).init(ally)`



## Qué es la programación?

En la analogía, programar es **escribir la receta** que el Chef seguirá.

Programar es escribir el **programa** que la **computadora** seguirá. Es
escribir todas esas palabras raras con colores que estan en la imagen de arriba.

Y así como hay recetas de pizzas en español, inglés o chino; los programas
se escriben en **lenguajes de programación**, por ejemplo
[Python](https://www.python.org/), [Java](https://dev.java/) o
[Zig](https://ziglang.org/).


## Siguiente artículo

En el siguiente artículo pondremos manos a la obra escribiendo y ejecutando
un programa.

[Link al siguiente artículo](./programacion-03)



