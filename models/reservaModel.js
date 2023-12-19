const conexao = require('../config/conexao');

let ReservaSchema = new conexao.Schema({
  RE_NPESSOAS: Number,
  RE_NUMERO: Number,
  RE_PRECO: Number,
  RE_CHECKIN: Date,
  RE_SERVICO_ESPECIAL: String
});

module.exports = conexao.model("Reserva", ReservaSchema);
