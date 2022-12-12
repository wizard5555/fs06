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

async function excluir(id) {
    let sql = "DELETE FROM tb_veiculo WHERE id="+id;

    await database.executar(sql);
}

module.exports = {  
    listar, 
    cadastrar,
    editar,
    excluir,
};