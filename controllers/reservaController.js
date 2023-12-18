const Reserva = require('../models/reservaModel');
const Acomodacao = require('../models/acomodacaoModel');
const Cliente = require('../models/clienteModel');

function abreAdd(req, res) {
  Acomodacao.find({}).then(function(acomodacoes){
    Cliente.find({}).then(function(clientes){
      res.render('reserva/addReserva', {
        Acomodacoes: acomodacoes,
        Clientes: clientes
      });
    });
  });  
}  

function add(req, res) {
  const { RE_NPESSOAS, RE_NUMERO, ACO_CODIGO, CLI_CODIGO, RE_PRECO, RE_CHECKIN, RE_SERVICO_ESPECIAL } = req.body;

  const reserva = new Reserva({
    RE_NPESSOAS,
    RE_NUMERO,
    ACO_CODIGO,
    CLI_CODIGO,
    RE_PRECO,
    RE_CHECKIN,
    RE_SERVICO_ESPECIAL
  });

  reserva.save().then(function (reserva, err) {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/reserva/add");
    }
  });
}

function listar(req, res) {
  Reserva.find({}).populate('acomodacao').populate('cliente').then(function (reservas, err) {
    if (err) {
      res.send(err);
    } else {
      res.render('reserva/list', {
        reservas: reservas
      });
    }
  });
}

function filtrar(req, res) {
  Reserva.find({
    RE_SERVICO_ESPECIAL: new RegExp(req.body.pesquisar.split(' ').join('.*'), 'ig')
  }).populate('acomodacao').populate('cliente').then(function (reservas, err) {
    if (err) {
      res.send(err);
    } else {
      res.render('reserva/list', {
        reservas: reservas
      });
    }
  });
}

function del(req, res) {
  Reserva.findByIdAndDelete(req.params.id).then(function (reserva, err) {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/reserva/list');
    }
  });
}

function abreEdit(req, res) {
  Reserva.findById(req.params.id).populate('acomodacao').populate('cliente').then(function (reserva, err) {
    if (err) {
      res.send(err);
    } else {
      Acomodacao.find({}).then(function(acomodacoes){
        Cliente.find({}).then(function(clientes){
          res.render('reserva/edit', {
            reserva: reserva,
            Acomodacoes: acomodacoes,
            Clientes: clientes
          });
        });
      });
    }
  });
}

function edit(req, res) {
  Reserva.findById(req.params.id).then(function (reserva, err) {
    if (err) {
      res.send(err);
    } else {
      const { RE_NPESSOAS, RE_NUMERO, ACO_CODIGO, CLI_CODIGO, RE_PRECO, RE_CHECKIN, RE_SERVICO_ESPECIAL } = req.body;

      reserva.RE_NPESSOAS = RE_NPESSOAS;
      reserva.RE_NUMERO = RE_NUMERO;
      reserva.ACO_CODIGO = ACO_CODIGO;
      reserva.CLI_CODIGO = CLI_CODIGO;
      reserva.RE_PRECO = RE_PRECO;
      reserva.RE_CHECKIN = RE_CHECKIN;
      reserva.RE_SERVICO_ESPECIAL = RE_SERVICO_ESPECIAL;

      reserva.save().then(function (reserva, err) {
        if (err) {
          res.send(err);
        } else {
          res.redirect('/reserva/list');
        }
      });
    }
  });
}

module.exports = {
  abreAdd,
  add,
  listar,
  filtrar,
  del,
  abreEdit,
  edit
};
