---
layout: ../../../layouts/BlogLayoutEs.astro
title: Como configurar tu teclado Lily58
description: |
    Instalación de QMK, layout, booteo del microcontrolador, etc
pubDate: "2024-09-12"
tags: ["teclado", "split", "dividido", "qmk", "lily58"]
image: 
    url: "/img/blog/es/lily58/lily58.webp"
    alt: "Teclado Lily58"
    caption: "Todo el lado de software del lily 58"
---

Compraste tu primer teclado mecánico dividido, un Lily58 (Pro o normal),
soldaste todas las partes y estas listo para usarlo, pero al conectarlo no funciona.

Necesitas flashear el firmware del teclado, y en este tutorial te muestro
cómo se hace con QMK.

Este tutorial asume que ya soldaste todas las partes del Lily y estas
listo para flashear. Si aun no soldaste, hay un monton de tutoriales
en YouTube de como hacerlo.


## Requisitos

- Un computador o laptop (no se puede usar celulares para flashear)
- Un segundo teclado, cualquiera
- Cable USB para conectar el Lily al computador


## Conocimientos

- Uso básico del terminal
- Git básico en el terminal
- Programación básica, y si es en C mejor

Si compraste un teclado dividido asumo que tienes estos conocimientos.


## Descargar e instalar QMK

### Windows

[Descarga QMK e instalalo desde su página para Windows](https://msys.qmk.fm/).
Obtendras un programa nuevo llamado "QMK MSYS", al abrirlo se abrirá
una consola.

![QMK setup](https://msys.qmk.fm/setup.png)

En esta consola vamos a trabajar.


### Linux - package manager

Instala `qmk` utilizando el gestor de paquetes de tu distro.
En Arch el comando es `sudo pacman -S qmk`.

Si no puedes encontrar qmk en tu distro, o no sabes su nombre, puedes
instalar mediante `pip` en la siguiente sección.

Si ya instalaste qmk saltate la sig. seccion: QMK setup

### Linux - pip

Prerrequisitos: Antes de instalar con `pip` debes instalar
dependencias en tu distro:

- Debian / Ubuntu / Devuan: `sudo apt install -y git python3-pip`
- Fedora / Red Hat / CentOS: `sudo yum -y install git python3-pip`
- Arch / Manjaro: `sudo pacman --needed --noconfirm -S git python-pip libffi`
- Void: `sudo xbps-install -y git python3-pip`
- Solus: `sudo eopkg -y install git python3`
- Sabayon: `sudo equo install dev-vcs/git dev-python/pip`
- Gentoo: `sudo emerge dev-vcs/git dev-python/pip`

Una vez instaladas las dependencias, instala qmk mediante pip
con el comando: 

```sh
python3 -m pip install --user qmk
```

Si por alguna razon esto no funciona, puedes probar instalar
como root. Considera que esto puede romper dependencias de python.

## QMK setup

A partir de ahora el tutorial es el mismo para windows y linux.

Primero ejecuta

```sh
qmk setup
```

![img](/img/blog/es/lily58/sh-01.png)

Te debería salir un mensaje pidiendo clonar `qmk/qmk_firmware`.
Presiona n para cancelar. Vamos a clonar qmk manualmente
para que se demore menos.

Ejecuta el comando:

```sh
git clone --recurse-submodules --depth 1 https://github.com/qmk/qmk_firmware.git
```

Esto clonará qmk y sus submodulos. Esto demorará un par de minutos.

Luego de clonar qmk ejecuta de nuevo `qmk setup`

![img](/img/blog/es/lily58/sh-02.jpg)

Hay 2 opciones:

- No sale ningún error, solo advertencias. Si es así continua
- Salen errores pidiendo que ejecutes un comando en Linux. Ejecútalos
    y vuelve a ejecutar `qmk setup`

Una vez que no haya ningún error, ejecuta

```sh
qmk compile -kb lily58 -km default
```

Si todo está ok estas listo para flashear el firmware a tu teclado.

![img](/img/blog/es/lily58/sh-03.jpg)


## Flashear qmk en el teclado

Estos pasos se repiten por cada lado del teclado:

- Conecta una mitad del teclado al computador. **No conectes las 2
    mitades mediante el cable auxiliar.**

- Coloca el teclado en modo flash. Para esto presiona 2 veces el boton reset.

![img](/img/blog/es/lily58/sh-04.jpg)

- El microcontrolador parpeará una luz roja varias veces. Ahora esta listo
    para flashear el firmware.

- Ejecuta el comando para flashear:

```sh
qmk flash -kb lily58 -km default
```

- Una vez el comando haya terminado de ejecutarse, desconecta el teclado
    y repite el proceso con la otra mitad. Recuerda **no conectar las 2 mitades**.

Una vez que hayas flasheado las 2 mitades correctamente
estas listo para utilizar tu teclado! Conecta primero las 2 mitades
mediante cable auxiliar, y despues conecta **el lado izquierdo** al
computador.

**Cada vez que conectes o desconectes las 2 mitades por cable auxiliar,
el teclado no debe estar conectado a la computadora.** Caso contrario puede
causar problemas con los microcontroladores.

Puedes usar el teclado conectado a la izquierda sin problemas, pero si conectas
el teclado al lado derecho verás que no funciona correctamente.
Eso lo arreglamos a continuación.

Para saber las teclas y el layout del teclado continua leyendo.

---

## Carpeta con los archivos

La configuración del layout se hace mediante archivos.

En Windows, estos archivos están en `C:\Users\<tu_usuario>\qmk_firmware\keyboards\lily58\keymaps\`.

En Linux están en `~/qmk_firmware/keyboards/lily58/keymas/`.

Al entrar a esta carpeta verás otras carpetas:

![img](/img/blog/es/lily58/sh-06.jpg)

Cada carpeta es un layout independiente. Ahora vamos a crear nuestro layout.

Copia la carpeta `default` y colocale un nombre sencillo. Yo llamaré a mi layout `Araozu`.

![img](/img/blog/es/lily58/sh-07.jpg)

Utilizaremos este nombre para flashear nuestro teclado.
Por ejemplo, para flashear my layout ahora ejecutaré `qmk flash -kb lily58 -km Araozu`

Dentro de la carpeta encontrarás 3 archivos:

- `config.h` - configuración general del teclado
- `keymap.c` - el layout del teclado
- `rules.mk` - configuración específica del teclado

Te recomiendo crear un repositorio de Git en tu layout y crear commits para cada cambio.
Así puedes volver fácilmente a un estado correcto.

## Cómo conectar el lado derecho del teclado al computador

Por defecto el lado izquierdo es el maestro y el derecho el esclavo.
Para invertirlo abre el archivo `config.h` y agrega:

```c
#pragma once

#define QUICK_TAP_TERM 0
#define TAPPING_TERM 100
#define MASTER_RIGHT // [!code focus] // [!code highlight]
```

Guarda el archivo y vuelve a flashear ambas mitades.
Recuerda utilizar el nombre de la carpeta que creaste:

```sh
qmk flash -kb lily58 -km <nombre-de-tu-carpeta>
```

## Touch typing / mecanografía

Si este es tu primer teclado dividido, es un buen momento para aprender
touch typing/mecanografía.

Los teclados divididos son perfectos para hacer mecanografía.



## Si no sabes programación, o no te interesa personalizar tu teclado, hasta aquí es suficiente

Las siguientes secciones asumen que sabes de programación.


## Layout

El layout del teclado (disposición en español) se encuentra en el archivo
`keymap.c`. Abrelo y verás el layout QWERTY por defecto:

![img](/img/blog/es/lily58/sh-08.jpg)

Puedes utilizar el layout QWERTY, pero ya que compraste un teclado
programable, también puedes cambiar la posición de las teclas
a tu gusto, utilizar layouts diferentes, o crear tu propio layout.

Aquí hay una lista de layouts alternativos, mejores que QWERTY.
Obviamente muchos de estos necesitan adaptarse a un teclado dividido:

- [Dvorak](https://es.wikipedia.org/wiki/Teclado_Dvorak)

![layout dvorak](/img/blog/es/lily58/sh-09.jpg)

- [Colemak](https://colemak.com/)

![layout colemak](https://colemak.com/wiki/images/7/7d/Colemak3.png)

- [Colemak DH](https://colemakmods.github.io/mod-dh/)

![layout colemax dh](https://colemakmods.github.io/mod-dh/gfx/about/colemak_dh_main_matrix.png)

- [Workman](https://workmanlayout.org/)

![layout workman](https://github.com/kdeloach/workman/raw/gh-pages/images/workman_layout.png)

- [Halmak](https://github.com/kaievns/halmak)

![layout halmak](https://raw.githubusercontent.com/kaievns/halmak/master/screenshot.png)

- [rsthd](https://xsznix.wordpress.com/2016/05/16/introducing-the-rsthd-layout/)

![layout rsthd](https://xsznix.wordpress.com/wp-content/uploads/2016/04/screen-shot-2016-04-22-at-22-40-26.png)


Cada layout tiene una filosofía detrás que puedes leer en sus respectivas páginas.

---

O puedes crear tu propio layout. Por ejemplo, yo cree mi layout basado en Dvorak pero
con los algoritmos de Halmak:

![layout Araozu](/img/blog/es/lily58/sh-10.jpg)

Puedes hacer lo que quieras, el mundo es tu ostra (recuerda agregar tus cambios a Git).


## Cómo modificar el layout

El layout se modifica en el archivo `keymap.c`. Abrelo, y allí haz tus cambios. Cuando termines
guarda el archivo e intenta flashear.

Si al flashear obtienes errores, muy probablemente hay un error en el código de `keymap.c`.

La lista de todas las teclas que puedes utilizar está en la
[documentación de QMK](https://docs.qmk.fm/keycodes_basic)


## ¿Qué mas hacer?

QMK es un software muy poderoso, puedes hacer casi cualquier cosa:

- Macros
- Capas
- RGB
- Múltiples layouts (ejm: presionar un boton para cambiar QWERTY a DVORAK)
- Mod tap
- Leader key
- Simular el mouse
- Tap dance
- Muchísimo más

Un buen inicio es [home row mods](https://precondition.github.io/home-row-mods).

Probablemente explique más de estos conceptos en el futuro.


## Atribuciones

https://docs.qmk.fm

Imágen del teclado Dvorak español De Selertos - Obra derivada de: https://upload.wikimedia.org/wikipedia/commons/a/a9/Teclado_Dvorak_Espa%C3%B1ol.png, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=47308166.

