// ===============================================
// 1. Carregamento de variáveis de ambiente (.env)
// ===============================================
require("dotenv").config(); // Carrega as variáveis do arquivo .env
console.log("variável:", process.env.CONNETIONSTRING); // Apenas para debug - imprime a string de conexão

// ===============================================
// 2. Importações de módulos e dependências
// ===============================================
const express = require("express"); // Framework para criar o servidor HTTP
const app = express(); // Instância do servidor express
const mongoose = require("mongoose"); // ODM para conectar e interagir com o MongoDB
const routes = require("./routes"); // Importa as rotas definidas separadamente
const path = require("path"); // Utilitário para manipular caminhos de arquivos e pastas
const middleware = require("./src/middlewares/middleware"); // Middleware customizado
const session = require("express-session"); // Middleware de sessão
const MongoStore = require("connect-mongo"); // Armazena sessões no MongoDB
const flash = require("connect-flash"); // Mensagens temporárias entre requisições (como mensagens de erro)

// ===============================================
// 3. Configuração da sessão com MongoDB
// ===============================================
const sessionOptions = session({
  secret: "atirei o pau no gato", // Chave secreta para assinar a sessão
  store: MongoStore.create({
    mongoUrl: process.env.CONNETIONSTRING, // URL do MongoDB vindo do .env
  }),
  resave: false, // Evita salvar a sessão se nada foi modificado
  saveUninitialized: false, // Evita salvar sessões vazias
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // Duração de 7 dias para o cookie de sessão
    httpOnly: true, // Evita que o cookie seja acessado via JavaScript no cliente
  },
});

// ===============================================
// 4. Middlewares globais
// ===============================================
app.use(express.urlencoded({ extended: true })); // Permite interpretar requisições com body tipo application/x-www-form-urlencoded
app.use(express.static(path.resolve(__dirname, "public"))); // Define a pasta "public" como pública para arquivos estáticos (CSS, JS, imagens)
app.use(sessionOptions); // Ativa o uso de sessões
app.use(flash()); // Ativa mensagens flash
app.use(middleware); // Middleware customizado (por exemplo, variáveis globais, checagens etc.)
app.use(routes); // Ativa as rotas da aplicação

// ===============================================
// 5. Configuração do mecanismo de views
// ===============================================
app.set("views", path.resolve(__dirname, "src", "views")); // Define onde estão os arquivos de views (EJS)
app.set("view engine", "ejs"); // Define EJS como o template engine

// ===============================================
// 6. Conexão com o banco de dados MongoDB
// ===============================================
mongoose
  .connect(process.env.CONNETIONSTRING) // Conecta ao MongoDB com a string de conexão
  .then(() => {
    app.emit("pronto"); // Dispara evento quando a conexão com o banco estiver estabelecida
  })
  .catch(e => console.log(e)); // Mostra erro caso a conexão falhe

// ===============================================
// 7. Inicialização do servidor
// ===============================================
app.on("pronto", () => {
  app.listen(3000, () => {
    console.log("Acessar http://localhost:3000"); // Inicia o servidor na porta 3000
  });
});
