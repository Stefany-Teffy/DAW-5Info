const conexao = require('../config/conexao');

let ClienteSchema = new conexao.Schema({
  CLI_CONTATO: String,
  CLI_NOME: String,
  CLI_CPF: String,
  CLI_ENDERECO: String,
  CLI_NASCIMENTO: Date,
  CLI_EMAIL: String
});  

module.exports = conexao.model("Cliente", ClienteSchema);
