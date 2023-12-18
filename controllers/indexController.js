const Reserva = require('../models/reservaModel');
const Acomodacao = require('../models/acomodacaoModel');
const Cliente = require('../models/clienteModel');
const Hotel = require('../models/hotelModel');

function abreIndex(req,res){
    res.render('inicio/index')
}


module.exports = { 
    abreIndex
  };