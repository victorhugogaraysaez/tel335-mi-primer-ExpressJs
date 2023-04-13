const express = require('express');
const bodyparser = require('body-parser');
const methodoverride = require('method-override');
const app = express();
const router = express.Router();

router.get("/usuario",function(req,res) {
    console.log('Aparece una respuesta Response')
    res.send('Aplicación GET ha resuelto bien, vea su consola');
});

router.post("/usuario",function(req,res) {
    console.log('Aparece una respuesta Response')
    res.status(201).send({mensaje:'Aplicación POST ha resuelto bien, vea su consola'});
});

router.get("/usuario/:id",function(req,res) {
    console.log('Aparece una respuesta Response')
    res.status(200).send({mensaje:'Aplicación GET ha resuelto bien, vea su consola'});
});

router.put("/usuario/:id",function(req,res) {
    console.log('Aparece una respuesta Response')
    res.status(201).send({mensaje:'Aplicación PUT ha resuelto bien, vea su consola'});
});

router.delete("/usuario/:id",function(req,res) {
    console.log('Aparece una respuesta Response')
    res.status(201).send({mensaje:'Aplicación DELETE ha resuelto bien, vea su consola'});
});

app.use(router);
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.json({limit : '50 mb'}))
app.use(methodoverride());                          // acepta PUT y DELETE

app.listen (3002,() => {
    console.log('Ingreso al servidor')
});
