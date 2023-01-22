// variables de entorno 
express = require('express'); 
const app = express();

//lectura y parseo del body
app.use(express.json());

//Ruta de prueba
app.use('/api/test', require('./routes/test.routes'))

/***********
 * RUTAS
 * **************/
app.use('/api/banner', require('./routes/banner.route'))
app.use('/api/certificate', require('./routes/certificate.route'))
app.use('/api/education', require('./routes/education.route'))
app.use('/api/skill', require('./routes/skill.route'))
app.use('/api/project', require('./routes/project.route'))
app.use('/api/user', require('./routes/user.route'))



/*******
 * 
 *  
 * 
 * ***********/ 
const { dbConnection } = require('./database/config');
dbConnection(); 

// Una vez definidas nuestras rutas podemos iniciar el servidor
app.listen(process.env.PORT || 3000, err => {

    if (err) {
        // Aquí manejar el error
        console.error("Error escuchando: ", err);
        return;
    }
    // Si no se detuvo arriba con el return, entonces todo va bien ;)
    console.log(`Escuchando en el puerto :${process.env.PORT}`);

});