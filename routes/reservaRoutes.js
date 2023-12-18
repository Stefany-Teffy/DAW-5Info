const express = require('express');
const routes = express.Router();
const controller = require('../controllers/reservaController');
const multer = require('multer');
const upload = multer({ dest: 'public/imagens' });

routes.get('/reserva/add', controller.abreAdd);
routes.post('/reserva/add', upload.single('imagem'), controller.add);

routes.get('/reserva/list', controller.listar);
routes.post('/reserva/list', controller.filtrar);

routes.get('/reserva/del/:id', controller.del);

routes.get('/reserva/edit/:id', controller.abreEdit);
routes.post('/reserva/edit/:id', controller.edit);

module.exports = routes;
