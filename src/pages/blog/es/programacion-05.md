---
layout: ../../../layouts/BlogLayoutEs.astro
title: "Cero a Zig 05: Hola mundo"
description: |
    Escribimos nuestro primer programa: Hola mundo!
pubDate: "2024-07-19"
tags: ["tech", "lenguajes", "intro", "tutorial", "zig"]
image: 
    url: ""
    alt: ""
    caption: ""
---


En este artículo vamos a escribir nuestro primer programa: Hola mundo. Vamos a
modificarlo y entender algunos otros conceptos.

## Hola mundo

Hola mundo es tradicionalmente el [primer programa](https://es.wikipedia.org/wiki/Hola_mundo)
que se escribe cuando se aprende a programar.

Abre VSCode y abre el proyecto que creaste en el artículo anterior.

Allí, abre el archivo `src/main.zig`.

![VSCode](/img/blog/es/tutorial/063-zig.jpg)

A partir de ahora vamos a trabajar en ese único archivo.

Verás un montón de código raro:

![VSCode](/img/blog/es/tutorial/078-zig.jpg)

Vamos a eliminar todo y escribir desde cero.


## Hola mundo

El primer programa siempre es el más fácil. Vas a escribirlo
(o copiar y pegar) y ejecutarlo.

Borra todo el contenido del archivo `src/main.zig` y
coloca lo siguiente:

```zig
const std = @import("std");

pub fn main() !void {
    std.debug.print("Hola mundo!\n", .{});
}
```

Entra a `src/main.zig` y reemplaza todo el código que está ahí
por el código de arriba.

> Nota: Puede que notes que las imágenes no sean exáctamente
    iguales a como cuando escribas el código.
    No te preocupes, no es un problema.

Una vez que hayas modificado el código, verás un punto blanco arriba:

![VSCode](/img/blog/es/tutorial/080-zig.jpg)

Esto significa que el archivo está modificado, pero no guardado.
Presiona `Control + S` para guardar el archivo.

Ahora, ejecuta el código: Ve al terminal y ejecuta el comando
`zig build run`:

> Nota: Verás que mi terminal se ve diferente. Pero lo importante
    son los comandos, y el resultado.

![VSCode](/img/blog/es/tutorial/081-zig.jpg)

El resultado sale abajo: `Hola mundo!`.


¡Ejecutaste tu primer programa!

## ¿Qué significan todas estas letras?

Como verás, hay un monton de palabras y símbolos con colorcitos.
Este es el código, es como un lenguaje especial utilizado
para comunicarse con el computador.

Así como el francés, árabe o coreano, el **lenguaje** de programación Zig
tiene un conjunto de reglas. Aprenderemos las reglas a medida que avance
el tiempo. Mientras tanto, puedes ignorar todas esas palabras.


## Magia negra

Escuché este termino del canal de Youtube Imesi.net. Magia negra
es algo que: no se cómo funciona, ni tampoco me importa.
Solo me importa lo que hace.

Voy a utilizar el término "magia negra" para referirme a algo
por lo que no necesitas preocuparte, o intentar entender. Por
ejemplo, en el codigo que escribiste y ejecutaste,
todo lo de rojo es magia negra:


```zig
const std = @import("std"); // [!code error:3]

pub fn main() !void {
    std.debug.print("Hola mundo!\n", .{});
} // [!code error]
```

Todo lo de rojo tiene un significado, pero aun no necesitamos
saber cuál es. Pero es importante que este ahí, tal como está
escrito.

Lo que nosotros vamos a escribir es lo de "adentro":

```zig
const std = @import("std");

pub fn main() !void {
    std.debug.print("Hola mundo!\n", .{}); // [!code focus] // [!code highlight]
}
```

Y a medida que aprendamos conceptos nuevos, descifraremos
qué significan todas esas cosas.



## Inglés

Como habras visto, prácticamente todo el código está en inglés.
Si ya sabes ingles, o lo estas aprendiendo, no tendrás muchos
problemas continuando.

En mi opinion, programar sin saber inglés es contraproducente.
Los lenguajes de programación (en su mayoría) se escriben en
inglés, las mnemotécnicas están en inglés, y mucha información
útil e importante está en inglés. Programar sin saber inglés
es sumamente difícil.

Seguramente aprenderás algunas palabras a lo largo del tutorial,
pero lo mejor que podrías hacer es aprender inglés.




