const sgMail = require('@sendgrid/mail');

const sendgridAPIKey = '';

sgMail.setApiKey(sendgridAPIKey);

sgMail.send({
    to: "ermondel@gmail.com",
    from: "ermondel@gmail.com",
    subject: "This is my first creation.",
    text: "I hope this one actually get to you." 
});
