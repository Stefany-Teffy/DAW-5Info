const express = require('express');
const routes = express.Router();
const controller = require('../controllers/indexController');

routes.get('/', controller.abreIndex);

module.exports = routes;