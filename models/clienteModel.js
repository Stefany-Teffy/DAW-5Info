const conexao = require('../config/conexao');

let ClienteSchema = new conexao.Schema({
  CLI_CONTATO: String,
  CLI_NOME: String,
  CLI_CPF: String,
  CLI_ENDERECO: String,
  CLI_NASCIMENTO: String,
  ACO_ACESSO: { type: conexao.Schema.Types.ObjectId, ref: 'Acomodacao' },
  CLI_EMAIL: String
});  

module.exports = conexao.model("Cliente", ClienteSchema);
