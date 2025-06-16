exports.paginaInicial = (req, res) => {
  res.render("index");
};
exports.trataPost = (req, res) => {
  res.send("ei, sou uma nova página");
};
