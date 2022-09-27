# RestAPI_Nodejs_MySQL-
Nodejs MySQL REST API, Desde cero a Despliegue

Aplicacion RestAPI de practica.

![esquema proyecto excalidraw](https://user-images.githubusercontent.com/64224078/192518569-46a7d9da-1e40-43fa-b5d5-57bc1b91b89b.png))



Se utilizo un Cliente rest el cual sirve para enviar peticiones al servidor sin utilizar codigo HTML :
Thunder client

Configuracion
  - instalacion de dependencias 
  - organizacion del directorio
conexion a BD de MySQL
  - creacion de BD por consola
creacion de rutas del servidor
 - configuracion de controladores
 - POST, GET, DELETE, UPDATE, PATCH
Manejo de errores
 - se enseña un manejo basico de errores con try catch sin embargo existe formas mas profesionales de hacerlo por ejemplo con express-promise-router,
 es similar al router de express solamente que se reemplaza el router por un modulo y el resto es igual
- tambien se debe tener en cuenta que deben manejarse las rutas que no existen por defecto el navegar envia un html de get not found 
pero nosotros podemos crear una respuesta propia. 
Not found
Variables de entorno
Despliegue en railway
