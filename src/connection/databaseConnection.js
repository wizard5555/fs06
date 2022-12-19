const mysql = require('mysql2/promise');

async function executar(sql) {
    const conexao = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'D1@9n7i8',
        database: 'fs06_api'
    });

    const [results] = await conexao.execute(sql);

    conexao.end();

    return results;
}

module.exports = {executar};