# yard-sale-venta-de-garage-vainilla
Proyecto HTML y CSS donde se pasaron todos los diseños del área de Diseño a pantallas HTML con CSS de yard-sale-venta-de-garage Maquetacion basica de HTML y CSS sin JS 

* Se desarrolla aporte con codigo JS Vanilla para aprende JS Vanilla

##TIPS:
1. > code ./ -r
* Me traslada desde la linea de comandos de VScode al directorio al que hice cd <directorio>

## ¿ De que consta ?
1. Se van a fusionar todas las pantallas que se desarrollaron con pegamento JS (jejeje)
* Se crea index.html
* Se crea styles.css
* Se crea Main.js
* Se pasan los estilos al archivo css
* Se pasa el menu superior navbar.html al index.html
* Se pasa el codigo de desktopMenu al index debajo de la etiqueta <nav>
* Se usa main.js para escuchar el click del correo y asi renderizar el <div> que contiene el desktopMenu al cual le hemos puesto una clase inactive asiciada a su display (none vs. block) con la que vamos ha hacer toggle/iterar en cada click del email. Se le adiciona el atributo cursor:pointer al email para que salga la manito.

## Subida del proyecto en ramas.
* Creacion de rama para cada avance: avanceX
* <git checkout -b avance1
* Se adicionan todos los archivos al proximo commit
* <git add .
* <git commit -m "Primer avance del proyecto: NavBar + desktopMenu"
* Se suben los archivos a la nueva rama avanceX. En este caso avance1
* <git push -u origin avance1

## Como alternar entre menus horizontales y verticales segun el tamaño de pantalla
* Se debe de jugar con display: none, se deben de hacer mediaquerys

## Avance 3: Hacer que aparezca y desaparezca el carrito de la compra con el logo del carrito
* Se eliminan todos los elementos de targetas de producto duplicadas de la importancion que hacemos del archivo order.html
* Se crean los elementos en main.JS (con eso queda lista para cuando se importen de una API REST)
* Se crea un areglo vacio al que se le hace push de 1 elemento con nombre, precio y URL de la imagen
* Usamos el ciclo (for product in productList) para mayor comodidad de iterancia en el areglo
* Maquetamos todas las etiquetas del product Card con instrucciones de createElement y appendChild de JS 

## Avance 4: solucionar 2 elementos con nombres de clases iguales
* Todas las clases que eran iguales, les puse prefijo detail_

## Avance 5: Al hacer click en una imagen de producto, abre el aside lateral del detalle del producto
* Se pone una escucha dentro del bucle.
* Se deberian ver los datos del producto en particular pero no esta hecha la implementacion.

## Avance 6: Deploy a github
* 