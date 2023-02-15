const { udpadate, getLogin } = require('../util/request');
const { generarJWT } = require('../util/jwt');
const bcrypt = require('bcryptjs');
const { transporter, sgMail } = require('../util/emailer');

const loginUser = (req, resp) => {
    const { password, mail } = req.body; 
    let query = `SELECT * FROM user where mail = '${mail}'`;
    getLogin(query)
    .then(usuario => {

        if(usuario.length != 0) {

            console.log(usuario);
            if(usuario[0].password === password){

                //generar el token y devolverlo. 
                const { id } = usuario[0];
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
    // sgMail 
    
    const { mail } = req.body; 
    let query = `SELECT * FROM user where mail = '${mail}'`;
    getLogin(query)
    .then(usuario => {

        if(usuario.length != 0) {

                //generar el token y devolverlo. 
                const { id } = usuario[0];
                generarJWT(id, mail)
                .then(token => {
                    // enviar el mail

                    const mailOptions = {
                        from: 'miguel.lrvc@gmail.com',
                        to: mail,
                        subject: 'mail de verificación',
                        html:
                        ` <h2>Reestablecer password</h2>
                          <p>Para restablecer la constraseña por favor haga click en el siguiente vínculo</p>
                          <a href="https://myn-inner.web.app/?x-token=${token}">https://myn-inner.web.app/?x-token=${token}</a>
                        `
                    };

                      transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                            resp.json({
                                status: "ok",
                                msg: "Error en el envío del mail",
                                token
                            });
                        } else {
                          resp.json({
                                status: "ok",
                                msg: "Por favor verifique su casilla de correo"
                            });
                        }
                      });

                    
                }).catch(error => {
                    resp.json({
                        status: "error",
                        msg: error
                    });
                })
                    
            
        }else {
            resp.json({
                status : "error",
                message : "Mail no encontrado", 
            });
        }

    })
    
}

const newPassword = (req, resp) => {
    
    /*data_x_toke: es una variable que se le agrega a la petición en el req al pasar por el middlewares del 
    token*/ 
    const { id, mail } = req.data_x_toke; 
    const { password, repetPassword } = req.body
    let query = `SELECT * FROM user where mail = '${mail}'`;
    getLogin(query)
    .then(usuario => {
        
        if(password == repetPassword) {
            if(usuario.length != 0) {
                // encriptar la contraseña.const salt = bcrypt.genSaltSync();
                const salt = bcrypt.genSaltSync();
                const passwordBcrypt = bcrypt.hashSync( password, salt );
                //realizar la consulta para actualizar la clave.
                const { id, name, surname, mail, url_img } = usuario[0];
                let query = `UPDATE user SET name = '${name}', surname = '${surname}', mail = '${mail}', url_img = '${url_img}', password = '${passwordBcrypt}' WHERE id = ${id}`;
                udpadate(req, resp, query);
            }else {
                resp.json({
                    status : "error",
                    message : "error no fue posible restablecer password", 
                });
            }
        }else {
            resp.json({
                status : "error",
                message : "Las contraseñas no coiciden", 
            });
        }

       

    })
     
}

const SendMail = (token, mail) => {
    
}
module.exports = {
    loginUser,
    resetPassword,
    newPassword
}
