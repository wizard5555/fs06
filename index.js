//importando o express pra substituir a necessidade do "http"
//const express = require('express');
//const app = express();

const app = require('express')();

const rotas = require('./router');

const servidor = 'localhost';
const porta = '8000';

const veiculoController = require('./src/controller/veiculoController'); 

app.get('/veiculos', async (req, res) => {
    let dados = await veiculoController.listar();

    res.send(dados);
});

app.delete('/veiculos/:id', async (req, res) => {
    await veiculoController.excluir(req.params.id);
    
    res.send(204); 
});

app.listen(porta, () => {
    console.log('API rodando no endereço http://localhost:8000')
});
