# API REST
> API REST feita para aprender ExpressJS e Banco de Dados

## Tecnologias
- NodeJS v18.12.1
- Express v4.18
- MySQL/MariaDB v8

## Instalação
Para baixar a aplicação execute o seguinte comando em seu terminal:
`git clone https://github.com/wizard5555/fs06.git`

Após baixar a aplicação, entre no diretório através do terminal e execute:
`npm install' ou 'npm i`

## Configuração do BD
É necessário configurar a credencial do Banco de Dados

### Estrutura do Banco de Dados
Acesse seu cliente de terminal do seu Banco de Dados;

> Copie e execute os comandos que estao no arquivo `/db.sql`;

#### Credenciais
Abra o arquivo que se encontra no caminho `/connection/databaseConnection.js`
e edite as seguintes linhas de acordo com suas credenciais do banco de dados:

```js
{
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'fs06_api'
}

```

### Executar o projeto
Para executar o projeto no diretório da aplicação através do terminal, execute:
`nodemon index.js` ou `node index.js`

Sua API estará disponível nos endereços:
- http://localhost:8000/clientes
- http://localhost:8000/veiculos
