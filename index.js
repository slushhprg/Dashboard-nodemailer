const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'costanetomj@gmail.com',
        pass: 'pexv xaap joef fudw',
    }
});

transport.sendMail({
    from: 'We Stand <costanetomj@gmail.com>',
    to: 'netocostaof01@gmail.com',
    subject: 'Bem vindo a We Stand',
    html: '<h1>Teste We Stand...</h1> <p>Esse email é um TESTE TESTE TESTE TESTE',
    text: 'Teste We Stand...'
})
.then((response) => console.log('Email enviado com sucesso!'))
.catch((err) => console.log('Erro ao enviar email: ', err))