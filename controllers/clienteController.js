const mongoose = require('mongoose');
const Cliente = require('../models/clienteModel');
const Acomodacao = require('../models/acomodacaoModel');

function abreAdd(req, res) {
  Acomodacao.find({}).then(function(acomodacoes){
      res.render('cliente/addCliente', { Acomodacoes: acomodacoes });
  })    
}

function add(req, res) {
  const { CLI_CONTATO, CLI_NOME, CLI_CPF, CLI_ENDERECO, CLI_NASCIMENTO, CLI_EMAIL } = req.body;
  console.log(req.body)
  const cliente = new Cliente({
    CLI_CONTATO,
    CLI_NOME,
    CLI_CPF,
    CLI_ENDERECO,
    CLI_NASCIMENTO,
    CLI_EMAIL
  });

  cliente.save().then(function (cliente, err) {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/cliente/add");
    }
  });
}

function listar(req, res) {
  Cliente.find({}).then(function (clientes, err) {
    if (err) {
      res.send(err);
    } else {
      
      res.render('cliente/listCliente', {
        clientes: clientes
      });
    }    
  });
}


function filtrar(req, res) {
  Cliente.find({
    CLI_NOME: new RegExp(req.body.pesquisar.split(' ').join('.*'), 'ig')
  }).populate('acomodacao').then(function (clientes, err) {
    if (err) {
      res.send(err);
    } else {
      res.render('cliente/list', {
        clientes: clientes
      });
    }
  });
}

function del(req, res) {
  Cliente.findByIdAndDelete(req.params.id).then(function (cliente, err) {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/cliente/list');
    }
  });
}

function abreEdit(req, res) {
  Cliente.findById(req.params.id).then(function (cliente, err) {
    if (err) {
      res.send(err);
    } else {
          res.render('cliente/editCliente', {
            cliente: cliente,
          });
        }
      });   
    }

function edit(req, res) {
  Cliente.findById(req.params.id).then(function (cliente, err) {
    if (err) {
      res.send(err);
    } else {
      const { CLI_CONTATO, CLI_NOME, CLI_CPF, CLI_ENDERECO, CLI_NASCIMENTO, CLI_EMAIL } = req.body;

      cliente.CLI_CONTATO = CLI_CONTATO;
      cliente.CLI_NOME = CLI_NOME;
      cliente.CLI_CPF = CLI_CPF;
      cliente.CLI_ENDERECO = CLI_ENDERECO;
      cliente.CLI_NASCIMENTO = CLI_NASCIMENTO;
      cliente.CLI_EMAIL = CLI_EMAIL;

      cliente.save().then(function (cliente, err) {
        if (err) {
          res.send(err);
        } else {
          res.redirect('/cliente/list');
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
