/** 
 método GET: Buscar uma informação do back-end
 método POST: Criar uma informação no back-end
 método PUT: Alterar uma informação no back-end
 método DELETE: Deletar uma informação no back-end
*/

/**
 *tipos de parâmetros:
 Query params: Parâmetros nomeados enviados na rota após o "?" (filtros, paginação)
 Route params: Parâmetros utilizados para identificar recursos.
 Request Body: Corpo da requisição, utilizado oarar criar ou alterar recursos.
 */

/** Banco de dados:
  Driver: select * from users
  Query Builder js: table('users').select('*').where()
*/

const express = require('express'); //importando funcionalidades do express
const routes = require('./routes')

const app = express(); //criando aplicação 

app.use(cors());
app.use(express.json()); //converte json em obj do js
app.use(routes);

app.listen(3333);

