Desafio Back End API dev.to JavaScript 27G

El objetivo de este proyecto es construir un servicio RESTful aplicando los conocimientos de HTTP, JavaScript, Node, Express, Mongo, Mongoose y JWT, que fueron adquiridos en el modulo de back-end de kodemia.  
Este servidor esta diseñado para poder recrear los requerimientos basicos de login, usuarios y posts de la pagina www.dev.to

Este repositorio está disponible y  abierto al público interesado en desarrollar código Back End.

Colaboradores (Equipo 2):
- May Rodriguez
- Héctor Hernández
- Oscar Guerrero Maya

Para utilizar este servidor sigue los siguientes pasos:

Debes clonar el repositorio a un archivo local.
Una vez clonado, y abierto en Visual Studio Code (o tu editor de código seleccionado) debes correr el comando “npm install” desde la terminal del editor de código. Esto instalará todas las dependencias necesarias para ejecutarlo. 
En la terminal, escribe el comando “npm run dev” para que el servidor comienza a correr.
Desde tu software de requests HTTP favorito (nosotros recomendamos Insomnia), escribe la siguiente dirección: http://localhost:8080/
¡Listo! Ya puedes hacer requests y comprobar el correcto funcionamiento de nuestra API. 

EndPoints implementados.

Con Autorización.
POST    /posts
PATCH   /posts/:id
DELETE  /posts/:id

Sin Autorización.
GET     /user/:id
POST    /user
POST    /auth/login
GET     /posts

