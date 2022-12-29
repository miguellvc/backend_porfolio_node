// variables de entorno 
require('dotenv').config(); 
express = require('express'); 
const app = express();

//Ruta de prueba
app.use('/api/test', require('./routes/test'))

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