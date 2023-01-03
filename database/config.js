// require('dotenv').config();

const mysql = require('mysql');
const connection = mysql.createConnection({
    host : process.env.HOST,
    database : process.env.DATABASE, 
    user : process.env.USER,
    password : process.env.PASSWORD,
}); 

const dbConnection = ()  => {

    connection.connect(function(err) {
        if (err) {
            console.error('Error de conexion: ' + err.stack); 
        }else {
            console.log("Se estableció la conexión con la base de datos correctamente")
        }
        
        // console.log('Conectado con el identificador ' + conexion.threadId);
    });

}

module.exports =  { 
    dbConnection,
    connection 
}
