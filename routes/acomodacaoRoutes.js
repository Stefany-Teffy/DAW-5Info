const express = require('express');
const routes = express.Router();
const controller = require('../controllers/acomodacaoController');
const multer = require('multer');
const upload = multer({ dest: 'public/imagens' });

routes.get('/acomodacao/add', controller.abreAdd);
routes.post('/acomodacao/add', upload.single('imagem'), controller.add);

routes.get('/acomodacao/list', controller.listar);
routes.post('/acomodacao/list', controller.filtrar);

routes.get('/acomodacao/del/:id', controller.del);

routes.get('/acomodacao/edit/:id', controller.abreEdit);
routes.post('/acomodacao/edit/:id', controller.edit);

module.exports = routes;
