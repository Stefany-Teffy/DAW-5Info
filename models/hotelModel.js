const conexao = require('../config/conexao');

let HotelSchema = new conexao.Schema({
  HO_NOME: String,
  HO_NUMERO: String,
  HO_ENDERECO: String,
  HO_CEP: String,
  HO_HONRA: Number,
  HO_FOTO: String,
});

module.exports = conexao.model("Hotel", HotelSchema);
