// const http = require ('http');
const express = require('express');
const app = express();

// http.createServer((req, res) => {
//     res.end('Hello World');
// }).listen(3000);

// midlewares
app.use(function (req, res, next) {
    console.log('request url:' + req.url);
    next();
});

app.use((req, res, next) => {
    console.log('ha pasado por esta función');
    next();
});

// rutas
app.get('/', (req, res) => {
    res.end('Hello World');
});

app.get('/login', (req, res) => {
    res.end('Aqui va el login');
});

app.get('*', (req, res) => {
    res.end('Archivo no encontrado');
});

app.listen(3000, () => {
    console.log('servidor funcionando');
});