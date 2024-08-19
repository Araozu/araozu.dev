---
layout: ../../../layouts/BlogLayoutEs.astro
title: "01: Programación desde cero absoluto con Zig"
description: |
    Aprendé a programar desde completamente cero, utilizando el lenguaje
    de programación Zig.
pubDate: "2024-07-15"
tags: ["tech", "zig", "lenguajes", "intro", "tutorial"]
image: 
    url: ""
    alt: ""
    caption: ""
---

```zig
const std = @import("std");

pub fn main() !void {
    std.debug.print("Hola {}!", .{"mundo"});
}
```

Dicen por ahi que la mejor forma de aprender es enseñar, y llevo un tiempo con
la idea de consolidar lo que he aprendido a lo largo de los años, así que
decidí escribir un tutorial para aprender programación, desde completamente cero.

## Público objetivo

Esta serie de artículos están dirigidos a personas que no saben absolutamente
nada de programación. Nada de nada. Han utilizado un computador/laptop/celular,
saben utilizar mouse y teclado, y han escuchado por ahi de la programación
(probablemente en tiktok) y les dió curiosidad. Pero lo más friki que hicieron
en su vida es descargar música en mp3 de youtube o instalar programas/juegos
piratas.

Y a esas personas les digo: bienvenidos a bordo.


## Expectativas

Esto no es un tutorial rápido para leer en media hora, escribir un programa,
ir a trabajar a Netflix y ganar 400_000 dolares al año. Las ciencias
de la computación son amplias, y programar es solo el inicio.

En esta serie explico conceptos fundamentales, desde abajo, lento pero seguro,
de forma interactiva y teórica. Aprender a programar no es fácil, pero
tampoco es imposible. Y en mi opinión, es fundamental que lo que vas a ir
descubriendo te llame la atención, te dé curiosidad, te den ganas de aprender.
Porque sino, será como los cursos aburridos del colegio: una obligación,
un aburrimiento, una molestia, que al acabar el colegio olvidarás de inmediato.


## Este tutorial sirve para hacer páginas web?

Depende.

En este tutorial no enseño nada específico a la creación de páginas web.
Pero todo lo que aprendas te servirá para crear páginas web en el
futuro.

Si tu objetivo es únicamente crear páginas web sencillas, pequeñas,
hay mejores tutoriales allá afuera.

## Empezar


Para empezar el tutorial [usa este link](./programacion-02).




## Público no objetivo

Aquellos que ya saben programar en algún otro lenguaje y quieren aprender Zig:
esta serie no es para ustedes. Hay un monton de información súmamente básica que
les va aburrir.

Si quieren aprender Zig vayan a [https://ziglang.org](https://ziglang.org), 
[https://zig.guide/](https://zig.guide/),
[https://github.com/zigtools/zls](https://github.com/zigtools/zls),
[https://saidvandeklundert.net/fortheloveofzig/](https://saidvandeklundert.net/fortheloveofzig/),
[https://www.openmymind.net/learning_zig/](https://www.openmymind.net/learning_zig/),
lean la documentación, instalen el compilador y LSP y pónganse a programar cualquier cosa.

Más adelante planeo escribir un compilador basado en
[Crafting Interpreters](https://craftinginterpreters.com/) pero en Zig, que puede
servir como guía.







