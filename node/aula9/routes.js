const express = require('express');
const route = express.Router();
const homeController = require('./contollers/homeController')
const contatoController = require('./contollers/contatoController');

//Rotas da Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost)

//Rota de COntato

route.get('/contato', contatoController.paginaInicial)

module.exports = route;