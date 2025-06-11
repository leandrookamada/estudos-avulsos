const path = require("path");

module.exports = {
  entry: "./server.js", // Arquivo de entrada
  output: {
    filename: "bundle.js", // Arquivo de saída
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development", // ou 'production'
};
