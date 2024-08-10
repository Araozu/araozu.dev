---
layout: ../../../layouts/BlogLayout.astro
title: "05: Cero a Zig: Instalando VSCode y Zig"
description: |
    Instalamos Zig y VSCode en nuestro computador
pubDate: "2024-08-08"
tags: ["tech", "lenguajes", "intro", "tutorial", "zig", "VSCode"]
image: 
    url: ""
    alt: ""
    caption: ""
---

En este artículo vamos a instalar 2 cosas en nuestro computador:
[Zig](https://ziglang.org/) y 
[Visual Studio Code](https://code.visualstudio.com/).

En los artículos anteriores habíamos escrito nuestro código en
una página web. Sin embargo, lo mejor es escribir el código
(programar) y ejecutarlo en nuestro computador.

Ya que este es un tutorial básico de programación, asumo que
estas utilizando Windows. Yo usaré Windows 10, pero las instrucciones
funcionan igual en Windows 11.


## Descargar e instalar VSCode

Si sabes como instalar un programa y no necesitas instrucciones
paso a paso, saltate esta sección.

Primero busca `VSCode` en Google, y entra a la primera página que
sale.

![Resultados de google](/img/blog/es/tutorial/070-zig.jpg)

Una vez en la página descarga VSCode con el boton grande y azul.

![Página de VSCode](/img/blog/es/tutorial/071-zig.jpg)

Se abrirá una nueva ventana en la esquina superior derecha.
Cuando termine de descargarse, ábrelo haciendole click.

![Descarga de VSCode](/img/blog/es/tutorial/072-zig.jpg)


Se abrirá una nueva ventana. Primero selecciona
"Acepto el acuerdo" y despues presiona el boton "Siguiente".

![Instalación de VSCode](/img/blog/es/tutorial/073-zig.jpg)

Volveran a salir nuevas ventanas. Presiona "Siguiente" en todas.

![Instalación](/img/blog/es/tutorial/074-zig.jpg)

Cuando salga "Instalar" en vez de "Siguiente", presionalo.

![Instalación](/img/blog/es/tutorial/075-zig.jpg)

Finalmente, saldrá una última ventana. Presiona "Finalizar"
y se abrirá VSCode.

![Instalación](/img/blog/es/tutorial/076-zig.jpg)

También puedes abrir VSCode desde el menú de inicio de
Windows.

![Instalación](/img/blog/es/tutorial/044-zig.jpg)



## Introducción a VSCode

VSCode es un "IDE", un programa que trae muchas funciones
útiles a la hora de programar. Lo vamos a utilizar a partir
de ahora para aprender a programar en Zig.

La primera vez que se abre VSCode se ve así:

![VSCode](/img/blog/es/tutorial/045-zig.jpg)

Hay un monton de botones y divisiones. No te preocupes en
entenderlo todo ahora mismo.

Notarás que el programa está en inglés. Ahora te mostraré
cómo ponerlo en español.

### Cambiar idioma a español

A la izquierda arriba hay una serie de botones. Presiona el último,
que tiene unos cuadros.

![Ext](/img/blog/es/tutorial/046-zig.jpg)

Esto abre una pestaña donde podemos buscar "Extensiones".
Las extensiones agregan características a VSCode.

Primero vamos a instalar el idioma español. En la barra de búsqueda
escribe "español":

![Ext](/img/blog/es/tutorial/047-zig.jpg)

Y presiona el botón azul "Install" del primer item de la lista
que dice "Spanish":

![Ext](/img/blog/es/tutorial/048-zig.jpg)

Luego de eso, abajo a la derecha saldrá un mensaje.
Presiona el botón azul:

![Ext](/img/blog/es/tutorial/049-zig.jpg)

El programa se reiniciará, y ahora estará en español.

Ahora vamos a instalar la extensión de Zig.


### Instalar la extensión de Zig

Regresa a la pestaña de extensiones:

![Ext](/img/blog/es/tutorial/046-zig.jpg)

Y busca "Zig". Instala la extensión que se llama
"Zig Language" y dice "ziglang":

![Ext](/img/blog/es/tutorial/050-zig.jpg)

Cuando se haya instalado puedes cerrar la pestaña:

![Ext](/img/blog/es/tutorial/051-zig.jpg)

Y volver al inicio:

![Ext](/img/blog/es/tutorial/052-zig.jpg)

## Instalar Zig

Hemos instalado la extensión de Zig, ahora instalaremos algo
llamado "Compilador".

Presiona `Control + Shift + P`, se abrirá una ventana arriba
en el centro:

![Zig](/img/blog/es/tutorial/066-zig.jpg)


En la barra de busqueda escribe `Zig`, y presiona el botón
`Zig Setup: Install Zig`:

![Zig](/img/blog/es/tutorial/067-zig.jpg)

En el dialogo que sale, presiona "Install".

![Zig](/img/blog/es/tutorial/064-zig.jpg)

Saldrá una nueva ventana, donde hay que escoger una versión.
Elije la versión debajo de `nightly`. Al momento de escribir
esto es `0.13.0`.

![Zig](/img/blog/es/tutorial/068-zig.jpg)

Saldrá una nueva ventana, presiona "Install".

![Zig](/img/blog/es/tutorial/065-zig.jpg)

Y selecciona la misma versión de antes. En mi caso, `0.13.0`.

![Zig](/img/blog/es/tutorial/068-zig.jpg)


Con eso terminamos. Hemos instalado Zig en nuestro computador.
En el siguiente artículo utilizaremos estas herramientas.

