const { getLogin } = require('../util/request');

const loginUser = (req, resp) => {
    const { password, mail } = req.body; 
    let query = `SELECT * FROM user where mail = '${mail}'`;
    getLogin(query)
    .then(data => {

        if(data.length != 0) {

            console.log(data);
            if(data[0].password === password){

                //generar el token y devolverlo. 
                
                resp.json(data);
            }
        }else {
            resp.json({
                status : "error",
                message : "datos incorrectos", 
            });
        }


    })
    
}

module.exports = {
    loginUser
}
