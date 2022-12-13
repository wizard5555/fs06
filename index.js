//importando o express pra substituir a necessidade do "http"

//const express = require('express');
//const app = express();
//app.use(express.json());

const app = require('express')();
app.use(require('express').json());

const rotas = require('./router');

const servidor = 'localhost';
const porta = '8000';

const veiculoController = require('./src/controller/veiculoController'); 

app.get('/veiculos', async (req, res) => {
    let dados = await veiculoController.listar();

    res.send(dados);
});

app.get('/veiculos/:id', async (req, res) => {
    let dados = await veiculoController.buscarUm(req.params.id);

    res.send(dados);
});

app.delete('/veiculos/:id', async (req, res) => {
    await veiculoController.excluir(req.params.id);
    
    res.send(204); 
});

app.post('/veiculos', async (req, res) => {
    await veiculoController.cadastrar(req.body);

    res.send(201); //created
});

app.put('/veiculos/:id', async (req, res) => {
    await veiculoController.editar(req.body, req.params.id);

    res.send(req.body);
});


app.listen(porta, () => {
    console.log('API rodando no endereço http://localhost:8000')
});
