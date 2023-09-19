### **Debe realizar un Servidor en Express que cumpla las siguientes features:**

* Debe tener separadas las capas ruta y controlador.

* Debe exponer los siguientes endpoints:  

1.  `GET /stars`: Recupera todas las estrellas, con un parámetro de consulta opcional para filtrar.
2.  `POST /stars`: Crea una nueva estrella, con validación Joi en el cuerpo de la solicitud.
3.  `GET /stars/:id`: Recupera una estrella específica por su ID

Enviar el repositorio con el código.  

Puede usar TS o JS.

Ejemplo de contrato de entrada para objeto Star;
 
{

"id": 1,

"name": "Sirius",

"type": "Estrella binaria, Secuencia Principal (tipo A1V)",

"distancia": "8.6 años luz",

"mass": "2.02 masas solares",

"radius": "1.711 radios solares",

"temperature": "9,940 K",

"luminosity": "25.4 luminosidades solares",

"age": "200-300 millones de años",

"composition": {

"hydrogen": "71%",

"helium": "27%",

"otros_elementos": "2%"

},

"stellar_history": "Sirius es una de las estrellas más brillantes en el cielo nocturno y es una estrella binaria compuesta por Sirius A y Sirius B. Es una estrella blanca de la secuencia principal que ha consumido la mayor parte de su hidrógeno y se encuentra en una etapa avanzada de su vida."

}