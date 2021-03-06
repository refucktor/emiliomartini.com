const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Emilio Martini'});
});

router.post('/sendEmail', function (req, res, next) {
    try{
        console.info(req.body);
        let email = process.env.EMAIL;
        let passw = process.env.EMAIL_PASSWORD;
        let emailReceiver = process.env.EMAIL_RECEIVER;
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: email,
                pass: passw
            }
        });

        let mailOptions = {
            from: '"'+ req.body.name + '" <' + req.body.email + '>',
            to: 'emartini.contact@gmail.com',
            subject: 'Martini Web Page message',
            text: req.body.message,
            html: '<h2><b>From Martini Web Page</b></h2><h3>Name: '+ req.body.name+', Email: '+ req.body.email +'</h3><p>'+ req.body.message+'</p>'
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.error(error);
            }
            console.info('Message %s sent: %s', info.messageId, info.response);
        });
    }
    catch (ex){
        console.error(ex);
        res.end({message: "Your message was not sent"});
    }
    res.render('index', {title: 'Emilio Martini'});
});

module.exports = router;
