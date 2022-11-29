const database = require('../connection/databaseConnection');

async function listar() {
    let sql = 'SELECT * FROM tb_veiculo'; 

    return await database.executar(sql);
}

function cadastrar(dados) {
    return "Cadastrando veiculo..." + dados; //INSERT INTO...
}

function editar() {
    return "Editando veiculo";
}

function excluir() {
    return "Excluindo veiculo";
}

module.exports = {  
    listar, 
    cadastrar,
    editar,
    excluir,
};