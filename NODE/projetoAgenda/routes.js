const express = require("express"); // Importa o Express para criação de rotas
const route = express.Router(); // Cria um roteador para a aplicação
const homeController = require("./src/controllers/homeController"); // Importa o controller que gerencia a lógica das rotas

// Rota principal GET (home)
route.get("/", homeController.paginaInicial); // Exibe a página inicial

// Rota principal POST (formulário da home)
route.post("/", homeController.trataPost); // Processa dados enviados por formulário

module.exports = route; // Exporta o roteador para ser usado no server.js

// 📌 Para que serve?
// Este arquivo define o caminho que o usuário pode acessar na aplicação (/),
// e qual função deve ser executada ao acessar cada rota. Facilita a organização
// separando as rotas da lógica de negócio (controllers).
