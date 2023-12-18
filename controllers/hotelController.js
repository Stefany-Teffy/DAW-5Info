const Hotel = require('../models/hotelModel');

function abreAdd(req, res) {
  res.render('hotel/addHotel');
}

function add(req, res) {
  const { HO_NOME, HO_NUMERO, HO_ENDERECO, HO_CEP, HO_HONRA, HO_FOTO } = req.body;

  console.log('Request Body:', req.body); // Verifique se os dados do formulário estão corretos

  const hotel = new Hotel({
    HO_NOME,
    HO_NUMERO,
    HO_ENDERECO,
    HO_CEP,
    HO_HONRA,
    HO_FOTO
  });

  console.log('Hotel Object:', hotel); // Verifique se o objeto do hotel está correto

  hotel.save().then(function (hotel, err) {
    if (err) {
      console.error('Erro ao salvar o hotel:', err); // Mensagem de erro, se houver
      res.send(err);
    } else {
      console.log('Hotel salvo com sucesso:', hotel); // Mensagem de sucesso
      res.redirect("/hotel/add");
    }
  });
}


function listar(req, res) {
  Hotel.find({}).then(function (hotels, err) {
    if (err) {
      res.send(err);
    } else {
      res.render('hotel/listHotel', {      
        hotels: hotels
      });
    }
  });
}

function filtrar(req, res) {
  Hotel.find({
    HO_NOME: new RegExp(req.body.pesquisar.split(' ').join('.*'), 'ig')
  }).then(function (hotels, err) {
    if (err) {
      res.send(err);
    } else {
      res.render('hotel/list', {
        hotels: hotels
      });
    }
  });
}

function del(req, res) {
  Hotel.findByIdAndDelete(req.params.id).then(function (hotel, err) {
    if (err) {
      res.send(err);
    } else {
      res.redirect('/hotel/list');
    }
  });
}

function abreEdit(req, res) {
  Hotel.findById(req.params.id).then(function (hotel, err) {
    if (err) {
      res.send(err);
    } else {
      res.render('hotel/editHotel', {
        hotel: hotel
      });
    }
  });
}

function edit(req, res) {
  Hotel.findById(req.params.id).then(function (hotel, err) {
    if (err) {
      res.send(err);
    } else {
      const { HO_NOME, HO_NUMERO, HO_ENDERECO, HO_CEP, HO_HONRA } = req.body;

      hotel.HO_NOME = HO_NOME;
      hotel.HO_NUMERO = HO_NUMERO;
      hotel.HO_ENDERECO = HO_ENDERECO;
      hotel.HO_CEP = HO_CEP;
      hotel.HO_HONRA = HO_HONRA;

      if (req.file) {
        hotel.HO_FOTO = req.file.path;
      }

      hotel.save().then(function (hotel, err) {
        if (err) {
          res.send(err);
        } else {
          res.redirect('/hotel/list');
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
