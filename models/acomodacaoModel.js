const conexao = require('../config/conexao');

let AcomodacaoSchema = new conexao.Schema({
  HO_CODIGO: { type: conexao.Schema.Types.ObjectId, ref: 'Hotel' },
  ACO_TIPO: String,  
  ACO_DESCRICAO: String,
  ACO_DISPONIBILIDADE: String,
  ACO_FOTO: String,
  ACO_ACESSO: Number,
  ACO_MANUTENCAO: Number
});

module.exports = conexao.model("Acomodacao", AcomodacaoSchema);
