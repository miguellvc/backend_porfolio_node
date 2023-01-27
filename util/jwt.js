const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')
const generarJWT = (id) => {

    return new Promise(( resolve, reject ) =>{
        const payload = {
            id,
        }
        jwt.sign(payload, JWT_SECRET, {
            expiresIn: '1y'
        }, (error, token) =>{

            if(error){
                return reject('no se puede generar el JWT');
            }else{
                return resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT
}