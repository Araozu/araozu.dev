---
layout: ../../../layouts/BlogLayout.astro
title: "¿Con qué lenguaje de programación se crean los lenguajes de programación?"
description: |
    Vista superior de cómo funciona un lenguaje de programación
    realmente.
pubDate: "2024-07-25"
tags: ["tech", "lenguajes", "tutorial"]
image: 
    url: "/img/blog/es/lang/cover.png"
    alt: ""
    caption: ""
---

Si estás leyendo esto seguramente sabes uno o más lenguajes
de programación. También sabes que los computadores trabajan
en base a `código máquina`, o unos y ceros.

Pero, ¿sabes cómo funciona internamente un lenguaje de programación?
O cómo funciona un compilador/intérprete?

Este artículo asume que sabes qué es un
[intérprete](https://es.wikipedia.org/wiki/Int%C3%A9rprete_(inform%C3%A1tica)),
[compilador](https://es.wikipedia.org/wiki/Compilador)
y otros conceptos básicos.


## Motivación

Al parecer no hay recursos sobre este tema en español (o soy
muy malo buscando en internet, que es una posibilidad real).

El otro día, mientras trabajaba en la documentación de mi
[lenguaje de programación THP](https://thp.araozu.dev/),
me dió curiosidad saber qué se dice del tema en español.
Porque en Inglés hay un montón de recursos acerca de lenguajes
de programación, clasificación, características, implementaciones,
tutoriales, etc., por ejemplo:

- [Reddit: Programming languages](https://old.reddit.com/r/ProgrammingLanguages/)
- [Crafting Interpreters](https://craftinginterpreters.com/)
- [Interpreter/Compiler book](https://interpreterbook.com/)
- [Youtube: Context Free](https://www.youtube.com/@contextfree)

etc. etc. etc.

Buscando en YouTube "como funciona un lenguaje de programación"
encontré un único video que habla acerca del tema, de EDteam.
Y al verlo me pareció: 1) muy simplista, y 2) incorrecto en
muchos aspectos básicos.

Y bien puede ser que no sé buscar cosas en internet, pero como
es común en el área, casi todos los recursos buenos están en
inglés.

So, ya que tengo esta especie de blog, me interesó escribir
al respecto y eventualmente detallar cómo se crea un
lenguaje de programación, desde cero, con código y todo.


## ¿Con qué lenguaje se crean los lenguajes?

Con *literalmente* cualquier lenguaje de programación.
Es como el huevo y la gallina. ¿Quién vino primero, el huevo?
o la gallina?


### En un principio...

No existía ningún lenguaje de programación. Existían computadoras,
y las computadoras se programaban en unos y ceros.
Pero como esto era re-complicado y re-difícil y propenso a errores,
se inventó el [lenguaje ensamblador](https://es.wikipedia.org/wiki/Lenguaje_ensamblador).

Y el ensamblador se escribió en código máquina.


### Luego!

Hubieron varios lenguajes de programación a lo largo de los años
como FORTRAN, Lisp, Cobol, etc., todos implementados esta vez en
ensamblador.

Pero aquí es donde surge un concepto nuevo: Bootstraping
[(que curiosamente no tiene un artículo en Wikipedia español así que
lo llamaré así: Bootstraping)](https://en.wikipedia.org/wiki/Bootstrapping_%28compilers%29).

Bootstraping es el proceso mediante el cual un lenguaje de
programación se implementa en sí mismo. Curioso, y confuso.

Poniendo como ejemplo el lenguaje C:

1. Primero se crea un compilador para C en cualquier lenguaje
    [(C se implementó inicialmente en B)](https://www.bell-labs.com/usr/dmr/www/chist.html).
2. Ahora que tenemos un compilador de C capaz de crear programas
    nuevos (escrito en B), crearemos el siguiente programa:
    un compilador de C.
3. Una vez que terminamos de escribir el compilador de C, en C,
    listo. Tenemos un lenguaje de programación escrito en sí mismo.

Confuso. Como me gustan las analogías, aca va una con Minecraft:

"Las hachas de madera se crean con hachas de madera. ¿Cómo
se creó la primera hacha de madera?"

Pues, primero obtienes madera con tu mano. Despues creas un
hacha de madera con la madera que obtuviste.
Finalmente, usas el hacha de madera para picar más madera,
y con esa madera creas nuevas hachas de madera.

![Imágen ilustrativa](/img/blog/es/lang/minecraft.jpg)


### Finalmente

Los lenguajes compilados suelen seguir ese
proceso: Primero se implementan en un lenguaje (generalmente
C, C++ o Rust) y luego se implementan en sí mismos. Este es el
caso de: Fortran, Pascal, C, C++, Haskell, OCaml,
F#, [Erlang](https://www.erlang.org/),
[Rust](https://www.rust-lang.org/), [Swift](https://swift.org/),
[Go](https://go.dev/), [Zig](https://ziglang.org/),
[Nim](https://nim-lang.org/), [Crystal](https://crystal-lang.org/),
y muchisimos más.

Los lenguajes que se ejecutan en máquinas virtuales
están generalmente implementados en una mezcla de los 2,
por ejemplo Java está implementado en Java + C + C++.

Los lenguajes interpretados generalmente se implementan en otro
lenguaje, on en una mezcla de otro y sí mismos.
PHP está implementado en C, Python en C, Ruby en C + Ruby, etc.
JavaScript en C++, y curiosamente, TypeScript está implementado
en TypeScript.

Asi que: ¿Con qué lenguaje de programación se crean los
lenguajes de programación? Con cualquier lenguaje, y eventualmente
en sí mismos.


## ¿Y cómo se crea un compilador?

¡Próximamente, en Dragon Ball Z!


## Addendum

- ¿Por qué los lenguajes interpretados no suelen implementarse
completamente en sí mismos?

Los lenguajes interpretados y los que se compilan a una máquina
virtual (Java, C#), por su naturaleza, no pueden
realizar el proceso de bootstraping. Esto se debe a que los
lenguajes interpretados **no generán código máquina**,
sino que [**generan bytecode**](https://es.wikipedia.org/wiki/Bytecode),
que debe ser ejecutado por el **intérprete** o la 
[**máquina virtual**](https://es.wikipedia.org/wiki/M%C3%A1quina_virtual_Java).

Pero, el intérprete/VM tienen que ejecutarse en metal. Y los únicos
lenguajes que pueden hacer eso son los lenguajes compilados.

- ¿Por qué hay tantos lenguajes de programación?

Porque no existe el lenguaje perfecto
([aunque me duela admitirlo](https://rust-lang.org/)),
siempre existirán avances que los lenguajes antiguos
no puedan implementar o sean muy lentos en hacerlo,
y porque [es un hobby](https://old.reddit.com/r/ProgrammingLanguages/)
muy interesante.

Cada lenguaje nuevo puede tener conceptos radicalmente nuevos
como [borrow checking](https://rust-lang.org/),
[comptime](https://ziglang.org/documentation/0.13.0/#comptime),
[programación funcional pura](https://www.haskell.org/),
[concurrencia masiva](https://www.erlang.org/), etc.

O pueden ser una reimaginación/mejora de lenguajes existentes
como [Mojo](https://www.modular.com/mojo),
[Kotlin](https://kotlinlang.org/),
[Lisp Flavored Erlang](https://lfe.io/),
[Gleam](https://gleam.run/).

O pueden ocupar un nicho que tiene ciertas necesidades
como [Hack](https://hacklang.org/), [MoonScript](https://moonscript.org/),
[GDScript](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html),
[Vala](https://vala.dev/).

O pueden ser una demostración de lo que es posible como
Brainfuck, [LOLCODE](http://www.lolcode.org/),
[Shakespeare](https://esolangs.org/wiki/Shakespeare).

O pueden ser una sátira del status quo como
[Dreamberd](https://github.com/TodePond/DreamBerd).

O pueden ser un acto de rebeldía como
[CrabLang](https://crablang.org/).

O pueden ser... creo que ya entendiste.


