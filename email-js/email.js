// Importar o módulo nodemailer
const nodemailer = require('nodemailer');

// Configurar o transporte
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arthurmartinsousa@gmail.com', // Seu endereço de e-mail
        pass: '020409ar' // Sua senha de e-mail
    }
});

// Configurar o e-mail a ser enviado
let mailOptions = {
    from: 'arthurmartinsousa@gmail.com', // Remetente
    to: 'arthurmartinsousa@gmail.com', // Destinatário
    subject: 'Assunto do e-mail',
    text: 'Conteúdo do e-mail'
};

// Enviar o e-mail
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('E-mail enviado: ' + info.response);
    }
});
