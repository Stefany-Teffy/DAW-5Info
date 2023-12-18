const express = require('express');
const routes = express.Router();
const controller = require('../controllers/hotelController');
const multer = require('multer');
const upload = multer({ dest: 'public/imagens' });


routes.get('/hotel/add', controller.abreAdd);
routes.post('/hotel/add', upload.single('HO_FOTO'), controller.add);

routes.get('/hotel/list', controller.listar);
routes.post('/hotel/list', controller.filtrar);

routes.get('/hotel/del/:id', controller.del);

routes.get('/hotel/edit/:id', controller.abreEdit);
routes.post('/hotel/edit/:id',upload.single('HO_FOTO'), controller.edit);

module.exports = routes;
