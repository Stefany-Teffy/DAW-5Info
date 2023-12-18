const conexao = require('../config/conexao');

let ReservaSchema = new conexao.Schema({
  RE_NPESSOAS: Number,
  RE_NUMERO: Number,
  ACO_CODIGO: { type: conexao.Schema.Types.ObjectId, ref: 'Acomodacao' },
  CLI_CODIGO: { type: conexao.Schema.Types.ObjectId, ref: 'Cliente' },
  RE_PRECO: Number,
  RE_CHECKIN: Date,
  RE_SERVICO_ESPECIAL: String
});

module.exports = conexao.model("Reserva", ReservaSchema);
