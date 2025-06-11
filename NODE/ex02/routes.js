const express = require("express");
const rout = express.Router();
const homeController = require("./src/controllers/homecontoller");
const contatoController = require("./src/controllers/contatoController");

//rotas da home:
rout.get("/", homeController.paginaInicial);
rout.post("/", homeController.trataPost);
rout.get("/contatos", contatoController.contato);

module.exports = rout;
