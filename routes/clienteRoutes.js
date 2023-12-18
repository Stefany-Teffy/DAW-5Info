const express = require('express');
const routes = express.Router();
const controller = require('../controllers/clienteController');

routes.get('/cliente/add', controller.abreAdd);
routes.post('/cliente/add', controller.add);

routes.get('/cliente/list', controller.listar);
routes.post('/cliente/list', controller.filtrar);

routes.get('/cliente/del/:id', controller.del);

routes.get('/cliente/edit/:id', controller.abreEdit);
routes.post('/cliente/edit/:id', controller.edit);

module.exports = routes;
