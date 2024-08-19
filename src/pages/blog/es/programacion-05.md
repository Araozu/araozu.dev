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

Vamos a empezar con este programa. Entra a la siguiente página web:
[https://zig.fly.dev/p/xNluereqmgW](https://zig.fly.dev/p/xNluereqmgW)

Veras lo siguiente:

![Zig online 1](/img/blog/es/tutorial/007-zig1.jpg)

Arriba está el nombre de la página: "Zig Playground". A su derecha hay 3 botones en inglés:

- "Run" ejecuta el programa.
- "Format" hace algo llamado 'formatear' el código. No lo usaremos aún.
- "Share" comparte el código que escribimos. No lo usaremos.

Dentro del recuadro plomo está escrito el código **Zig**. No lo modifiques aún.

Si lo modificaste y quieres volver al código original, cierra la página y vuelve a
abrirla con el link de arriba.

## Ejecutando el código

Presiona el boton "Run". Aparecerá texto debajo del recuadro del código:

![Zig online 2](/img/blog/es/tutorial/008-zig.png)

Este texto es el resultado de ejecutar el programa. Se lee:

- `Hola mundo!` : Este es el resultado del programa.
- `Program exited.` : Significa "El programa terminó" en ingles. Nos 
    indica que el programa terminó de ejecutarse. Puedes ignorarlo.

Felicidades! Has ejecutado tu primer programa.

> Desafio: Borra todo el código y vuelve a escribirlo, exactamente igual.
    Utiliza la imágen como guía.


## ¿Qué significan todas estas letras?

Como verás, hay un monton de palabras y símbolos con colorcitos.
Este es el código, es como un lenguaje especial utilizado
para comunicarse con el computador.

Así como el francés, árabe o coreano, el **lenguaje** de programación Zig
tiene un conjunto de reglas. Aprenderemos las reglas a medida que avance
el tiempo. Mientras tanto, puedes ignorar todas esas palabras.

> ¿Que pasa si eliminas alguna de esas palabras y ejecutas el programa 
    (con el boton "Run")? ¿Qué mensaje obtienes? ¿Qué crees que significa?


## Magia negra y abstracción

Según [Significados.com](https://www.significados.com/abstracto/),
abstracto significa vago, impreciso, teórico, que no tiene existencia
física (entre otras cosas). Algo abstracto suele ser algo difícil
de entender, o imaginario.


En programación, abstracto tiene otro significado. Puedes buscar su
definición técnica en internet, pero me parece muy confusa para
un principiante, así que lo explicare en mis términos.

En programación, abstracto significa que sabemos **qué** hace, pero
no **cómo** lo hace. Un ejemplo claro sería un auto. Sabemos que
al pisar el acelerador, el auto avanza. Pero no sabemos **cómo**
pisar el acelerador ocasiona que el combustible se transforme en
energía cinemática.

Por ejemplo, voy a hablar más adelante de "imprimir" en el programa.
Imprimir significa mostrar un mensaje en la pantalla. Sin embargo,
no te voy a explicar cómo funciona la impresión. El concepto de
"imprimir" es abstracto.

### Magia negra

Escuché este termino del canal de Youtube Imesi.net. Magia negra
es algo que: no se qué hace, cómo funciona, ni tampoco me importa.

Voy a utilizar el término "magia negra" para referirme a algo
por lo que no necesitas preocuparte, o intentar entender. Por
ejemplo, en el código de más arriba:

![Zig online 1](/img/blog/es/tutorial/007-zig1.jpg)

Todo el texto que dice:

```zig
const std = @import("std")

pub fn main() {
    std.debug.print();
}
```

es magia negra. Funciona, hace algo, pero no importa. No te
preocupes en intentar entenderlo.

Eventualmente, y a medida que aprendas conceptos nuevos,
entenderas qué significan esas cosas.


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




