const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// rota / recurso
/* 
    GET: bUSCAR/listar UMA INFO NO BACK
    POST: cRIAR UMA INFO
    PUT: ALTERAR UMA INFO
    DELETE: DELETAR UMA INFO
*/

/* tipos de paramentros
    Query params: Parametros nomeados enviados na rota após "?" (filtros, paginação) 
    Route params: utilizados para identificar recursos  ex: ":id"
    Request Body: Corpo da requisição, utilizado para criar ou alterar recursos


     //const params = request.query;
    //request.body

    //console.log(params);

    // return response.json({
    //     evento: 'Semana OnmiStack 11.0',
    //     aluno: 'Isabela Aquino'
    // })

*/ 
// app.get('/', (request, response) => {
//     return response.send('Hello Word!')
// })

/* Driver: select * from users
   Query Builder: table('users').select('*').where()
*/
routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);

routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;