---
layout: ../../../layouts/BlogLayoutEs.astro
title: Como crear/utilizar mapas online sin pagar a Google
description: |
    Esta guia detalla todo el proceso para crear tu propio
    Google maps, sin pagar 1 centavo.
pubDate: "2024-11-10"
tags: ["mapas", "maps", "google maps", "openstreetmaps", "osm", "docker", "go"]
image: 
    url: "/img/blog/es/osm/01.jpg"
    alt: "Mapa del centro de Arequipa-Perú"
    caption: "Ejemplo de un mapa de Arequipa, generado por mi"
---


El desarrollo de muchas aplicaciones involucra ubicar cosas en un mapa.
Hoy en dia, pareciera que la única forma de hacerlo es con Google Maps,
pero utilizarlo en una aplicación mediana a grande tiene un coste
inmenso.

Pensando en eso, y queriendo hacer un [mapa con todas las rutas de combi
de Arequipa](https://combi.araozu.dev/), pense que en vez de pagarle a
Google podría utilizar recursos gratis. Y así es como me adentré
en el mundo de mapas online.

Este blog contiene imágenes y datos de 
[&copy; OpenStreenMap y sus colaboradores.](https://www.openstreetmap.org/copyright)


## Requisitos

Esto es todo lo que utilizo para crear los mapas. En particular
Linux. Puede que esta guia funcione en Windows, puede que no.

- Cualquier linux reciente. Yo utilizo arch (btw).
- Docker y docker compose
- El [lenguaje de programación Go](https://go.dev) instalado.
- Conocimiento básico de la terminal
- Conocimiento básico de Docker
- (opcional) conocimientos de un editor de texto para terminal: nano/vi/vim
- (opcional) conocimiento de servidores como apache/nginx



## Teoría: Tiles

Existen varias formas de mostrar mapas, pero la más común es utilizando
algo llamado "tiles". Un **tile** es una imagen de una sección del mapa.

Por ejemplo, a continuación muestro una imagen de un mapa, y despues la misma
imagen donde se muestra la división de los tiles.

![Mapa del centro de Arequipa](/img/blog/es/osm/02.jpg)

![Mapa del centro de Arequipa con divisiones para los tiles](/img/blog/es/osm/03.jpg)

Cada "cuadrado" es un tile. También existen formas de cómo codificar
estos tiles, pero generalmente son imágenes png o jpg.

Si abres la consola de una página con mapas, vas a pestaña Red
y mueves el mapa, verás que se hacen peticiones para obtener estos tiles.

![Petición de tiles en combi.araozu.dev](/img/blog/es/osm/04.jpg)

Así que se podría decir que un mapa es una cuadrícula de imágenes.




Como dato adicional, cada tile es una imagen png por lo general,
y un mapa tiene miles de millones de tiles. Cada imagen png pesa alrededor
de 100KiB, así que almacenar todas esas imágenes y servirlas tiene un costo.
Costo de almacenamiento y costo de ancho de banda.

[Tiles en Wikipedia inglés.](https://en.wikipedia.org/wiki/Tiled_web_map)


## Teoría: Niveles (layers)

También, los mapas tienen varios niveles de zoom:

![Arequipa, nivel 1](/img/blog/es/osm/05.jpg)

![Arequipa, nivel 2](/img/blog/es/osm/06.jpg)

Estos niveles van del 0 al 22. El nivel 0 es un único tile que muestra
todo el planeta:

![Tile nivel 0](/img/blog/es/osm/07.jpg)

El nivel 1 duplica sus dimensiones, así que consta de 4 tiles:

![Tile nivel 1](/img/blog/es/osm/08.jpg)

Y así sucesivamente, hasta el nivel 22. En teoría se puede renderizar
muchos más niveles (23, 24, etc), pero más adelante verás por qué
no se hace (spoiler: es costoso).



## Teoría: Posicionamiento de los tiles

Cada tile se identifica por 3 números: su nivel (Z), su
posición horizontal (Y) y su posición vertical (X). Esto resulta en: Z/Y/X.

![Axis del mapa](/img/blog/es/osm/09.jpg)

Por ejemplo, en zoom 0 el único tile que existe es:

![Tile 0/0/0](/img/blog/es/osm/10.jpg)

En zoom 1 hay 4 tiles:

![Tiles de zoom 1](/img/blog/es/osm/11.jpg)

Y así sucesivamente. Un último ejemplo: el centro de Arequipa
en nivel 15 tiene estos tiles:

<div class="text-center"><img src="/img/blog/es/osm/12.jpg" style="display: inline-block;max-height: 800px;" /></div>



Estos tiles se sirven desde un servidor web.
Se sirven con una url: `<dominio.com>/<otros>/X/Y/Z.png`.

Por ejemplo, la imágen del centro (`15/9871/17896`)
en mi servidor se sirve desde la url: `https://combi.araozu.dev/tiles/15/9871/17896.jpg`.

Hasta aquí la teoría sobre los tiles e imágenes.



## Teoría: Mapas como datos

Los tiles que te mostré son el producto final. Estos tiles se generan
a partir de datos almacenados en archivos `.xml`. Estos datos contienen
información acerca de las calles, pistas, parques, distritos, etc etc etc.
Toda la información que se ve en las imágenes está almacenada como texto.

Puedes ir a [OpenStreetMap](https://openstreetmap.org/), ver a alguna
parte del mundo e inspeccionar cualquier cosa:

![OSM inspector](/img/blog/es/osm/13.jpg)

Eventualmente encontrarás el código xml de lo que inspecciones. Algo
como esto:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<osm version="0.6" generator="openstreetmap-cgimap 2.0.1 (2051417 spike-08.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">
 <way id="328012181" visible="true" version="3" changeset="119318346" timestamp="2022-04-04T21:06:47Z" user="TuAmigoElEditor" uid="13950332">
  <nd ref="3348297717"/>
  <nd ref="3348297711"/>
  <nd ref="3348297710"/>
  <nd ref="3348297707"/>
  <nd ref="3348297706"/>
  <tag k="landuse" v="cemetery"/>
  <tag k="name" v="Cementerio Parque de la Esperanza"/>
  <tag k="religion" v="christian"/>
 </way>
</osm>
```

Toda la información del mapa de todo el mundo se almacena de forma similar.
Para generar un mapa primero hay que descargar estos archivos xml.
Este proceso lo explico más adelante.


## Teoría: Renderizadores

El renderizador toma los archivos `.xml` y los convierte en imágenes `.png`.
Este renderizador es quien define los colores, trazos, fuentes, tamaños
de letra, etc. Se encarga de transformar los datos en algo visual.

Hay formas de personalizar los renderizadores, y se detalla mas adelante.

## Teoría: Servidores de mapas

Una vez renderizados los tiles se sirven mediante un servidor web.
Esto puede ser un CDN, un VPS, un servicio de nube, etc.

### Servidores on-demand

El proceso de renderizado se puede hacer on-demand: Cada vez que
llega una petición de un tile el servidor renderiza en ese momento
el tile, y lo devuelve. Como imaginarás, este proceso es costoso.


### Servidores estáticos

Si no se necesita generar tiles con la información más reciente,
se pueden renderizar todos los tiles de antemano, y servirlos
como archivos estáticos.


## Teoría: Clientes

Finalmente, los clientes son librerías que consumen los tiles
que un servidor provee, y se encargan de organizarlos, mostrarlos,
permitir arrastrar el mapa, hacer zoom, etc.

El cliente más famoso para la web es [Leaflet](https://leafletjs.com/).
Le entregas la URL donde estan los tiles, y se encarga del resto.

![Leaflet](/img/blog/es/osm/14.jpg)


[OpenStreetMap](https://openstreetmap.org) técnicamente tiene un
servidor de tiles que puedes utilizar. Sin embargo, su uso con
librerías de terceros como Leaflet no esta permitido.
Solo OSM puede usar sus tiles.


## La práctica: Crear y servir nuestros propios tiles estáticos

Ahora viene lo divertido:

## Descargar datos del mapa que queremos

Primero necesitamos saber qué área del planeta tierra necesitamos
en nuestro mapa. Técnicamente puedes generar tiles para todo el
planeta, pero eso te tardaría muchísimo tiempo y recursos.

En [Planet OSM](https://planet.openstreetmap.org/) se encuentra
un indice de los datos de todo el planeta. Descargar todos los
datos del planeta tierra pesa **144GiB**.

En [Geofabrik.de](https://download.geofabrik.de/) puedes
descargar todo un continente y paises. Por ejemplo, todo sudamerica
pesa **3.4GiB**, y todo Argentina pesa **352MiB**.

En [BBBike](https://download.bbbike.org/osm/bbbike) puedes descargar
ciertas áreas o ciudades importantes.

Para descargar un área en específico ve a
[Protomaps](https://app.protomaps.com/)
y selecciona el área que quieres descargar.
Yo descargaré Arica, Chile para el tutorial.

<div class="text-center"><img src="/img/blog/es/osm/15.jpg" style="display: inline-block;max-height: 800px;" /></div>

Otra herramienta útil para obtener un área en coordenadas es
[Tile Calculator](https://tools.geofabrik.de/calc/).

Tras presionar "Create Extract" se empezará a procesar la solicitud:

<div class="text-center"><img src="/img/blog/es/osm/16.jpg" style="display: inline-block;max-height: 800px;" /></div>

Una vez termine, descarga el mapa con el boton "Download .OSM.PBF":

<div class="text-center"><img src="/img/blog/es/osm/17.jpg" style="display: inline-block;max-height: 800px;" /></div>

Dependiendo del área que descargaste este archivo pesará entre 1-10 MiB.

Ahora tienes un archivo `.osm.pbf`. Este archivo contiene toda la información de (en mi caso) Arica:
calles, edificios, museos, parques, mercados, etc etc etc. Cambiale de nombre a uno fácil de usar.
Yo llamaré a mi mapa `arica.osm.pbf`.

El siguiente paso es generar tiles con este archivo pbf.


## Crear un renderizador on-demand

Basado en la guía de
[https://switch2osm.org/serving-tiles/using-a-docker-container/](https://switch2osm.org/serving-tiles/using-a-docker-container/).

En un terminal en linux:

- Crea una carpeta y mueve tu archivo `.osm.pbf` allí.
- Crea un volumen de docker con:

```sh
docker volume create osm-data
```

- Importa tu archivo `.osm.pbf` con este comando. Reemplaza 
  donde sea necesario:

```sh
docker run  -v /ruta/absoluta/al/archivo/arica.osm.pbf:/data/region.osm.pbf  -v osm-data:/data/database/  overv/openstreetmap-tile-server  import
```

Esto demorará varios minutos, dependiendo de tu velocidad de internet.
Al final de este comando debes tener un mensaje como:

```plain
INFO:root:  Import complete
+ sudo -u renderer touch /data/database/planet-import-complete
+ service postgresql stop
 * Stopping PostgreSQL 15 database server
   ...done.
+ exit 0
```



Una vez termine el comando anterior ejecuta:

```sh
docker run -p 8080:80 -v osm-data:/data/database -d overv/openstreetmap-tile-server run
```

Esto creará un contenedor de docker con el servidor de tiles on-demand.
Ahora entra en tu navegador a [http://localhost:8080/](http://localhost:8080).

Verás un mapa:

![Leaflet](/img/blog/es/osm/18.jpg)

Aquí ve al lugar que importaste y asegurate de que se renderiza.
Verás que los lugares fuera del área que definiste están en blanco.
Esto es normal.

![Leaflet](/img/blog/es/osm/19.jpg)

Con esto ya tienes un servidor on-demand. Puedes configurar tu sistema para que
sea accesible desde el exterior, levantarlo en un vps, etc etc.

O también puedes obtener todos los tiles, almacenarlos y servirlos estáticamente.
Eso se ve en el siguiente paso.


## Scrapear nuestro renderizador

Continuara...


## Compilar nuestros tiles



## Personalizar nuestros tiles

Habrás visto que los tiles vienen con un estilo por defecto:

![Leaflet](/img/blog/es/osm/20.jpg)

Tal vez no te gustan los colores, tal vez no necesitas
tantos íconos de negocios, tal vez quieres cambiar
el tamaño o fuente de las letras. Todo esto se puede
personalizar, lo que será tema de un próximo post.




