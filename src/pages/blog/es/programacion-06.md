---
layout: ../../../layouts/BlogLayoutEs.astro
title: "Cero a Zig 06: Modificando el hola mundo"
description: |
    Impresión, strings/cadenas y stdout.
pubDate: "2024-07-30"
tags: ["tech", "lenguajes", "intro", "tutorial", "zig"]
image: 
    url: ""
    alt: ""
    caption: ""
---

En el artículo anterior escribimos nuestro primer programa:
Hola mundo. En este artículos vamos a modificar el mensaje
y aprender el primer concepto: Strings


## Modificando "Hola mundo"

Entra a la página web
[https://zig.fly.dev/p/xNluereqmgW](https://zig.fly.dev/p/xNluereqmgW),
donde se encuentra el programa "Hola mundo". Esta vez vamos a modificar
el mensaje.

El resto de las palabras son magia negra. Te habras dado cuenta que
hay palabras en español: Hola y mundo.

![Zig online](/img/blog/es/tutorial/009-zig.jpg)

Hay varias cosas que notar:

- Estan pintadas de color amarillo
- Tienen comillas dobles `"` al inicio y al final

Dentro de estas comillas `"` podemos escribir el texto que querramos.

Por ejemplo, si reemplazas `Hola` por `Adios` y ejecutas el programa,
se imprimirá `Adios mundo!`

![Zig online](/img/blog/es/tutorial/010-zig.jpg)

![Zig online](/img/blog/es/tutorial/011-zig.jpg)

Y también, si reemplazas `mundo` por otra palabra, se imprimirá
lo que escribiste.

Tambien puedes agregar otro texto en ambos lados. Por ejemplo:

![Zig online](/img/blog/es/tutorial/012-zig.jpg)


## Strings / cadenas de caracteres

Los strings (cadenas de caracteres en inglés) son la forma
en la que almacenamos texto.

Un string empieza con una comilla doble `"`, el contenido
del string, y termina con una comilla doble `"`.

Unos ejemplos de strings son: `"hola"`, `"adios"`,
`"multiples palabras"`, `"123456"`.

En el programa de arriba hay 2 strings:

![Zig online](/img/blog/es/tutorial/013-zig.jpg)

Estos strings son lo que se muestra en pantalla al
ejecutar el programa.

Los strings tienen algunas características:

- En el código, los strings tienen otro color para que
    sea más fácil identificarlos.
- No puede haber comillas dentro de un string.
    
    El string termina cuando aparece la primera comilla.
    Por ejemplo:

    ![Zig online](/img/blog/es/tutorial/014-zig.jpg)

    Aquí el string termina despues del `Hola `, la palabra
    `familia` no es parte del string. Puedes ver que el
    color amarillo del string termina en la segunda comilla,
    y la palabra familia está de color blanco.

- No puede haber nuevas lineas en un string. Esto es un error:

    ![Zig online](/img/blog/es/tutorial/015-zig.jpg)

    Sin embargo, hay ocasiones donde queremos tener varias lineas
    en un string. Para esto se utilizan 2 caracteres especiales:
    `\n`. Estos nos permiten "señalar" que ahí va una linea nueva.

    ![Zig online](/img/blog/es/tutorial/016-zig.jpg)

    Estos caracteres especiales se conocen como "caracteres de escape".
    Hay varios de ellos, pero no los veremos por ahora.


## Impresión

Imprimir es mostrar información a través de la pantalla. Esta
información puede ser palabras, letras, números, símbolos, etc.

Para imprimir en Zig se escribe lo siguiente:

![Zig online](/img/blog/es/tutorial/017-zig.jpg)

`std.debug.print` es una invocación que imprime lo que tenga
dentro. Para poner algo dentro, se utilizan parentesis `()`.

Dentro de los paréntesis va el string que queremos imprimir
y una secuencia misteriosa, así: `("Tu mensaje", .{})`.

Y finalmente, muy importante, todas las invocaciones
terminan con un punto y coma `;`. Si la invocación
no termina con su punto y coma tendrás un error misterioso.

Por ejemplo, para imprimir un nuevo texto `Me gusta Zig`
se escribiriá el código así:

`std.debug.print("Me gusta Zig", .{});`

Podemos tener varias invocaciones a la vez, y ejecutarlas en
siempre que la invocación esté bien escrita.

![Zig online](/img/blog/es/tutorial/018-zig.jpg)

Y al ejecutar el programa se imprimiran los mensajes en orden.

![Zig online](/img/blog/es/tutorial/019-zig.jpg)


## Nuevas lineas

Notarás que el mensaje se imprimió junto: `Mi primera impresiónMe gusta Zig`.

Este es un buen momento para presentar un concepto muy importante:
la computadora hace lo que le pides, no lo que quieres.

El código que ejecutamos no le pide a la computadora que imprima
una nueva linea `\n`. Así que la computadora no la imprime.

Para tener una nueva linea hay que incluirla en los strings, y con
eso al ejecutar estará cada linea separada:

![Zig online](/img/blog/es/tutorial/020-zig.jpg)

![Zig online](/img/blog/es/tutorial/021-zig.jpg)



## Glosario

No es necesario que memorices o entiendas estas palabras.

- String: "cadena de caracteres"
- `const`: abreviatura de "constante", que no cambia
- `std`: abreviatura de "estandar"
- `import`: "importar"
- `pub`: abreviatura de "público", que es accesible
- `fn`: abreviatura de "función". en este artículo les llamé
    invocaciones
- `void`: "vacio"
- `main`: "principal"
- `debug`: el debugging es un proceso mediante el cual
    se eliminan errores (tambien conocidos como "bugs")
- `print`: "imprimir"


