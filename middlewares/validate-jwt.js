const jwt = require('jsonwebtoken'); 
const { JWT_SECRET } = require('../config');

const validateJWT = (req, res, next) => {

    // Leer el Token, el mismo viene en la cabecera de la petición. 
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        /*aquí se verifica si el token que viene en la cabecera es igual al 
        token generado*/ 
        const { id } = jwt.verify( token, JWT_SECRET );
        /*esto se realiza para pasar el token al método que se ejecuta 
        al hacer la petición. Por ejemplo al getUsuarios*/
        req.uid = id;

        next();

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        });
    }
 
}


module.exports = {
    validateJWT
}