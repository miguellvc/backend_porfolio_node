const nodemailer = require('nodemailer');
  
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
    auth: {
    user: 'miguel.lrvc@gmail.com',
    pass: 'pqtesftpomjyexdo'
    }
  });

module.exports = {
    // sgMail
    transporter
} 

