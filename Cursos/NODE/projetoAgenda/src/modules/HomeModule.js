const mongoose = require("mongoose");

// Define o schema que estrutura os dados no banco de dados
const HomeSchema = new mongoose.Schema({
  titulo: { type: String, required: true }, // Campo obrigatório
  descricao: String, // Campo opcional
});

// Cria o modelo "home" baseado no schema
const HomeModel = mongoose.model("home", HomeSchema);

// Classe vazia (pode ser usada para métodos estáticos personalizados)
class Home {}

module.exports = HomeModel;

// 📌 Para que serve?
// Define o formato dos dados que serão salvos no banco de dados.
// Este modelo será usado no controller para criar, buscar ou manipular
// os documentos da coleção home.
