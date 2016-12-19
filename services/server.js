/**
 * Created by Leo on 03/11/2016.
 */
// <editor-fold defaultstate="collapsed" desc="Dependencias">
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var nodemailer = require('nodemailer');
var email = require("emailjs");
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="MongoDb">
//mongoose.connect('mongodb://localhost/TesisSaludOcupacional');
//mongoose.connect('xaipo:xaipo14@ds064278.mlab.com:64278/MongoLab-l');


//mongoose.connect('mongodb://40.83.182.235/saludOcupacional', function(error){
mongoose.connect('mongodb://localhost/baniosTuristicoBD', function (error) {
    if (error) {
        throw error;
    } else {
        console.log('Conectado a MongoDB');
    }
});
// </editor-fold>


// <editor-fold defaultstate="collapsed" desc="Express">
var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());// permite angular interactuar
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="Routes">

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.use('/api', require('./routes/userApi'));
app.use('/api', require('./routes/establecimientoApi'));

var server = email.server.connect({
    user: "mrjleo1989@gmail.com",
    password: "00000889",
    host: "smtp.gmail.com",
    ssl: true
});


app.post('/sendEmail', function (req, res) {
    console.log("post en el server");
    console.log("from: " + req.body.mailFrom + "to: " + req.body.mailTo + "subject: " + req.body.title + "text: " + req.body.text);
    var mailFrom = req.body.mailFrom;
    var mailTo = req.body.mailTo;
    var title = req.body.title;
    var text = req.body.text;

    /*server.send({
     text: text,
     from: mailFrom,
     to: mailTo,
     cc: "",
     subject: title
     }, function (err, message) {
     console.log(err || message);
     });*/
    var message = {
        text: "I hope this works",
        from: mailFrom,
        to: mailTo,
        cc: "",
        subject: title,
        attachment: [
            {data: text, alternative: true}
        ]
    };

// send the message and get a callback with an error or details of the message that was sent
    server.send(message, function (err, message) {
        console.log(err || message);
        console.log(mailFrom + '-- ' + mailTo + '-- ' + title );

    });


    res.send(mailFrom + ' ' + mailTo + ' ' + title + ' ' + text);

});

/*var server  = email.server.connect({
 user:    "mrjleo1989@gmail.com",
 password:"00000889",
 host:    "smtp.gmail.com",
 ssl:     true
 });

 // send the message and get a callback with an error or details of the message that was sent
 server.send({
 text:    "i hope this works",
 from:    "you <mrjleo1989@gmail.com>",
 to:      "Xaipa <xaipoj@hotmail.com>, Jota <jmunoz@munditop.com>",
 cc:      "",
 subject: "testing emailjs"
 }, function(err, message) { console.log(err || message); });*/

// </editor-fold >

// <editor-fold defaultstate="collapsed" desc="Server Run">
app.listen(3000);
console.log("servidor ejecutando en el puerto 3000");

// </editor-fold>