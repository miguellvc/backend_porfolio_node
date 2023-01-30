const { getLogin } = require('../util/request');
const { generarJWT } = require('../util/jwt')

const loginUser = (req, resp) => {
    const { password, mail } = req.body; 
    let query = `SELECT * FROM user where mail = '${mail}'`;
    getLogin(query)
    .then(data => {

        if(data.length != 0) {

            console.log(data);
            if(data[0].password === password){

                //generar el token y devolverlo. 
                const { id } = data[0];
                generarJWT(id)
                .then(token => {
                    console.log(token);
                    resp.json(token);
                }).catch(error => {
                    resp.json(token);
                })
                    
            }
        }else {
            resp.json({
                status : "error",
                message : "datos incorrectos", 
            });
        }

    })
    
}

const resetPassword = (req, resp) => {
    
}

module.exports = {
    loginUser,
    resetPassword
}
