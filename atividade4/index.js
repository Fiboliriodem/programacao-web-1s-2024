const express = require('express');
const calculadora = require('./util/calculadora');

const app = express();
const PORT = 8080;

app.get('/somar/:a/:b', (req, res) => {
    const resultado = calculadora.somar(parseInt(req.params.a), parseInt(req.params.b));
    res.send(`Resultado da soma: ${resultado}`);
});

app.get('/subtrair/:a/:b', (req, res) => {
    const resultado = calculadora.subtrair(parseInt(req.params.a), parseInt(req.params.b));
    res.send(`Resultado da subtração: ${resultado}`);
});

app.get('/multiplicar/:a/:b', (req, res) => {
    const resultado = calculadora.multiplicar(parseInt(req.params.a), parseInt(req.params.b));
    res.send(`Resultado da multiplicação: ${resultado}`);
});

app.get('/dividir/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

        const resultado = calculadora.dividir(a, b);
        res.send(`Resultado da divisão: ${resultado}`);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});