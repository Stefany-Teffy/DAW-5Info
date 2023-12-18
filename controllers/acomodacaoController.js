const Acomodacao = require('../models/acomodacaoModel');

function abreAdd(req, res) {
  res.render('acomodacao/addAcomodacao');
}

function add(req, res) {
  const { HO_CODIGO, ACO_ACESSO, ACO_MANUTENCAO, ACO_TIPO, ACO_FOTO, ACO_DESCRICAO, ACO_DISPONIBILIDADE } = req.body;

  const acomodacao = new Acomodacao({
    HO_CODIGO,
    ACO_ACESSO,
    ACO_MANUTENCAO,
    ACO_TIPO,
    ACO_FOTO,
    ACO_DESCRICAO,
    ACO_DISPONIBILIDADE
  });

  acomodacao.save().then(function (acomodacao, err) {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/acomodacao/add");
    }
  });
}

function listar(req, res) {
  Acomodacao.find({}).then(function (acomodacoes, err) {
    if (err) {
      res.send(err);
    } else {  
      res.render('acomodacao/listAcomodacao', {
        acomodacoes: acomodacoes
      });
    }
  });
}

function filtrar(req, res) {
  Acomodacao.find({
    ACO_TIPO: new RegExp(req.body.pesquisar.split(' ').join('.*'), 'ig')
  }).then(function (acomodacoes, err) {
    if (err) {
      res.send(err);
    } else {
      res.render('acomodacao/list', {
        acomodacoes: acomodacoes
      });
    }
  });
}

function del(req, res) {
  Acomodacao.findByIdAndDelete(req.params.id).then(function (acomodacao, err) {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/acomodacao/list');
    }
  });
}

function abreEdit(req, res) {
  Acomodacao.findById(req.params.id).then(function (acomodacao, err) {
    if (err) {
      res.send(err);
    } else {
      res.render('acomodacao/editAcomodacao', {
        acomodacao: acomodacao
      });
    }
  });
}

function edit(req, res) {
  Acomodacao.findById(req.params.id).then(function (acomodacao, err) {
    if (err) {
      res.send(err);
    } else {
      const { ACO_ACESSO, ACO_MANUTENCAO, ACO_TIPO, ACO_DESCRICAO, ACO_DISPONIBILIDADE } = req.body;

      acomodacao.ACO_TIPO = ACO_TIPO;
      acomodacao.ACO_DESCRICAO = ACO_DESCRICAO;
      acomodacao.ACO_DISPONIBILIDADE = ACO_DISPONIBILIDADE;
      acomodacao.ACO_ACESSO = ACO_FOTO;
      acomodacao.ACO_ACESSO = ACO_ACESSO;
      acomodacao.ACO_MANUTENCAO = ACO_MANUTENCAO;

      acomodacao.save().then(function (acomodacao, err) {
        if (err) {
          res.send(err);
        } else {
          res.redirect('/acomodacao/list');
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
