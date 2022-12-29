// variables de entorno 
require('dotenv').config();

const express = require("express"),
    app = express()


app.get('/test', (peticion, respuesta) => {
    let mascota = {
        nombre: "Maggie",
        edad: 2,
    };
    respuesta.json(mascota);
});

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(process.env.PORT, err => {
    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${process.env.PORT}`);

});