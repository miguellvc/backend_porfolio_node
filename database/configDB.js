// require('dotenv').config();

const mysql = require('mysql');
const { HOST, DATABASE, USER, PASSWORD } = require('../config');
const connection = mysql.createConnection({
    host : HOST,
    database : DATABASE, 
    user : USER,
    password : PASSWORD,
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
