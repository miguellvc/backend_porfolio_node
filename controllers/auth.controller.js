const { getLogin } = require('../util/request');
const { generarJWT } = require('../util/jwt')
const { transporter, sgMail } = require('../util/emailer');

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
    // sgMail 
    
    const { mail } = req.body; 
    let query = `SELECT * FROM user where mail = '${mail}'`;
    getLogin(query)
    .then(data => {

        if(data.length != 0) {

                //generar el token y devolverlo. 
                const { id } = data[0];
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
                                msg: "Error en el envío del mail"
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
    
}

const SendMail = (token, mail) => {
    
}
module.exports = {
    loginUser,
    resetPassword,
    newPassword
}
