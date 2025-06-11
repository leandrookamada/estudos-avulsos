const HomeModel = require("../modules/HomeModule");

// Código comentado de exemplo para criar um documento
// HomeModel.create({
//   titulo: "um exmplo de titulo",
//   descricao: "um exemplo de descrição",
// })
//   .then(dados => {
//     console.log(dados);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// Consulta de todos os documentos da Home
HomeModel.find().then(dados => console.log(dados)); // Exibe os dados da Home no console

// Função para renderizar a página inicial
exports.paginaInicial = (req, res) => {
  res.render("index"); // Renderiza a view 'index.ejs'
};

// Função para tratar o envio de formulário
exports.trataPost = (req, res, next) => {
  res.send(req.body); // Retorna os dados enviados no corpo da requisição
  return;
};

// 📌 Para que serve?
// Este controller é o intermediário entre as rotas e os dados.
// Ele recebe chamadas das rotas e decide o que fazer:

// Exibe uma página (paginaInicial)

// Processa dados enviados via formulário (trataPost)

// (Opcionalmente) interage com o banco usando o modelo HomeModel
