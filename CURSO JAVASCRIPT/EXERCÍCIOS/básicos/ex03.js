const primeiroNumero = 5;
const segundoNumero = 10;

const somar = primeiroNumero + segundoNumero;

const subtrair = (function () {
  if (primeiroNumero < segundoNumero) {
    return segundoNumero - primeiroNumero;
  } else {
    return primeiroNumero - segundoNumero;
  }
})();

const multiplicar = primeiroNumero * segundoNumero;

const dividir = (() => {
  if (primeiroNumero < segundoNumero) {
    return segundoNumero / primeiroNumero;
  } else {
    return primeiroNumero / segundoNumero;
  }
})();

console.log(somar);
/*
DENTRO DO JAVASCRIPT, NÃO PODEMOS CRIAR CONSTANTES COM PALAVRAS RESERVADAS, ELAS PRECISAM TER NOMES SIGNIFICATIVOS.
NÃO PODE CRIAR CONSTANTES QUE INICIEM COM NÚMEROS, E DE PREFERENCIA COM LETRAS MINÚSCULAS.
NÃO PODE USAR CARACTERES ESPECIAIS, NEM ESPAÇO. Nesse caso ultilizamos a camelCase, que é cada palavra incicia com eltra maiúscula, menos a primeira 
ex:nomeCliente
AS CONSTANTES SÃO CASE-SENSITIVE, Isso significa que letra maiúscula e minúscula possuem diferentes. 
NÃO PODEMOS MODIFICAR O VALOR DE UMA CONSTANTE, ELA É CRIADA E INICIALISADA NO MESMO TEMPO
SE ULTILIZA CONST
*/
