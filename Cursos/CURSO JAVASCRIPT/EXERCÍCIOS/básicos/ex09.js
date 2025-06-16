const variaveis = ["luiz", "marcelo", "igor", "jorge", "carina"];
const remov = variaveis.pop(); //AQUI EU VOU TIRAR O ULTIMO ELEMENTO DO ARRAY (ATÉ A LINHA EM QUESTÃO)
const remoov = variaveis.shift(); //AQUI EU REMOVO O INDICE ZERO ATÉ A LINHA E QUESTÃO, OBS: ISSO ALTERA TODOS OS ÍNIDICES SEQUENTES

variaveis[variaveis.length] = "eliane"; //AQUI EU ESTOU CHAMANDO A ULTIMA CAIXINHA DO MEU ARRAY E ESTOU COLOCANDO LÁ
variaveis.push("Katarina"); // AQUI EU ESTOU CHAMANDO UMA FUNÇÃO QUE FAZ EXATAMENTE ISSO (PUXA A ULTIMA CAIXINHA E ENFIA ALGO LÁ DENTRO)
variaveis.unshift("Jose maria"); //AQUI EU PUXO A PRIMEIRA CAIXINHA E COLOCO NELA O MEU NOVO ARRAY, ELE PASSA A ADOTAR O INDICE 0

/////////////////////////////////////////////////////////////////////////////////////////////
variaveis.forEach(elementos => {
  console.log(`${elementos} é do tipo ${typeof elementos}`);
});
console.log("\nO ultimo valor que foi removido foi:", remov);
console.log("\nO valor do indice zero que foi removido foi:", remoov);
