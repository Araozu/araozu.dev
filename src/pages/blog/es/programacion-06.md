---
layout: ../../../layouts/BlogLayout.astro
title: "06: Cero a Zig: Terminal y Proyecto Zig"
description: |
    Veremos el terminal y cómo crear/ejecutar un proyecto de Zig
pubDate: "2024-08-09"
tags: ["tech", "lenguajes", "intro", "tutorial", "zig", "VSCode"]
image: 
    url: "/vid/hacker.webp"
    alt: ""
    caption: ""
---

Seguramente has visto imágenes/videos de hackers antes,
escribiendo en una pantalla negra con letras verdes.
Ahora tu también, podras escribir en una pantalla negra
(pero sin letras verdes).

En este artículo veremos el terminal, crearemos un proyecto
de Zig en nuestro computador, y lo ejecutaremos.

En el artículo anterior ya instalamos VSCode y Zig, así que a partir
de ahora me referiré a ellos.


## El terminal

[El/la terminal](https://en.wikipedia.org/wiki/Command-line_interface)
es una forma de interactuar con nuestro computador, y se utiliza
muchisimo en programación.

En el terminal escribimos comandos, el computador los ejecuta,
y nos responde. En cierto modo es como una versión mini de la
programación.

Dentro de VSCode, en los menus de arriba a la izquierda, selecciona
los 3 puntos, `Terminal`, `Nuevo Terminal`:

![Terminal](/img/blog/es/tutorial/053-zig.jpg)

Aparecerá una nueva ventana en blanco abajo:

![Terminal](/img/blog/es/tutorial/054-zig.jpg)

Este es nuestro terminal. Aquí escribiremos algunos comandos
para crear un "proyecto" y "ejecutarlo".


## Creando un proyecto de Zig

Un proyecto es una carpeta con una serie de archivos,
en los cuales programaremos nuestro programa.

Haz click en en el terminal y escribe `mkdir tutorial`

![Terminal](/img/blog/es/tutorial/055-zig.jpg)

`mkdir` es el "comando" que ejecutará la computadora,
y `tutorial` es un "argumento" que recibe el comando.

`mkdir` viene del inglés "make directory", y crea una
carpeta nueva. En este caso estamos creando una carpeta
llamada `tutorial`.

Presiona enter para ejecutar el comando.

![Terminal](/img/blog/es/tutorial/056-zig.jpg)

En el terminal veremos siempre:

1. (1) La carpeta en donde estamos
2. (2) El comando que escribimos

Algunos comandos tienen una "respuesta". En la imágen
de arriba la respuesta es una confirmación de la carpeta
que creamos.

Ahora vamos a ejecutar otro comando: `cd tutorial`

![Terminal](/img/blog/es/tutorial/057-zig.jpg)

`cd` es una abreviación de "change directory", que
significa cambiar de carpeta. Usando este comando cambiamos
la carpeta en la que estamos.

Ahora vamos a crear el proyecto de Zig, con el comando
`zig init`:

![Terminal](/img/blog/es/tutorial/058-zig.jpg)

El comando `zig` nos permite realizar varias acciones,
que veremos con el tiempo.

Al ejecutar `zig init` creamos un proyecto nuevo en
la carpeta actual. Esto crea una serie de archivos
y carpeta, que ahora abriremos.


## Abriendo el proyecto

Dentro de VSCode, presionamos el boton "Abrir carpeta".

![VSCode](/img/blog/es/tutorial/059-zig.jpg)

Si no puedes ver este boton, asegurate de estar en la primera pestaña:

![Ext](/img/blog/es/tutorial/052-zig.jpg)

Aquí seleccionamos la carpeta `tutorial`. Esta es la carpeta que
acabamos de crear en el terminal.

![VSCode](/img/blog/es/tutorial/060-zig.jpg)

Nos saldrá el mensaje de la imagen de abajo. Selecciona "Confiar en
los autores..." y presiona "Si, confio en los autores".

![VSCode](/img/blog/es/tutorial/061-zig.jpg)

Ahora veras que en vez del boton "Abrir carpeta" ahora hay una
serie de archivos.

![VSCode](/img/blog/es/tutorial/062-zig.jpg)

Este es nuestro proyecto. Aquí es donde estarán todos los archivos
que usaremos.

- Carpeta `src`: Contiene el código que ejecutaremos
- `build.zig`: Archivo mágico. Es mejor no tocarlo.
- `build.zig.zon`: Archivo mágico. Es mejor no tocarlo.

Haz click en la carpeta `src` y en el archivo `main.zig`:

![VSCode](/img/blog/es/tutorial/063-zig.jpg)

Este es el archivo donde trabajemos por el resto de la serie.

![VSCode](/img/blog/es/tutorial/078-zig.jpg)

Veras que hay un monton de código raro, que aun no sabemos qué
significa. Por ahora lo vamos a dejar así.


## Ejecutando el proyecto

Ahora que instalamos Zig en nuestro computador, tenemos que ejecutar
el programa en nuestro computador. Eso lo haremos desde el terminal.


Ve al terminal y ejecuta `zig build run`. Veras un monton de texto
raro, pero al final debería quedar así:

![VSCode](/img/blog/es/tutorial/077-zig.jpg)


Y también notarás que aparecieron 2 carpetas nuevas: `.zig-cache`
y `zig-out`. Ignóralas.

Has ejecutado el proyecto! Ahora vamos a hacerlo con nuestro propio código.


## Reemplazando el código

En artículos anteriores vimos un programa llamado "Hola mundo":

```zig
const std = @import("std");

pub fn main() !void {
    std.debug.print("Hola mundo!", .{});
}
```

Ahora vamos a ejecutarlo en nuestro computador, en vez de
la página web.

Entra a `src/main.zig` y reemplaza todo el código que está ahí
por el código de arriba.

> Nota: Puede que notes que las imágenes no sean exáctamente
    iguales a como cuando tu escribas el código.
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


## Siguentes pasos

Ya estamos listos para seguir aprendiendo Zig.

Ahora intenta ejecutar los programas que escribimos
antes en VSCode. Copia y pega el código, o aún mejor,
escríbelo tú mismo.


