module.exports = (req, res, next) => {
  next();
};

// 📌 Para que serve?
// Esse arquivo define um middleware global,
// que é executado a cada requisição. Atualmente está vazio,
// mas você pode usá-lo para:

// Definir variáveis globais

// Fazer verificações de autenticação

// Registrar logs
