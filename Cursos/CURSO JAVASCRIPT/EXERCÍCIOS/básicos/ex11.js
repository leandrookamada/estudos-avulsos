//OBJETOS
function criadorDePessoas(nome, sobrenome, idade, dataDeNascimento) {
  //aqui eu criei uma função e dei alguns parâmetros para ela.
  return { nome, sobrenome, idade, dataDeNascimento };
}
const pessoa1 = criadorDePessoas("luiz", "carlos", 25, "23/07/2004"); //aqui eu criei um objeto, que recebe todos arguementos (argumentos são os parametros de um objeto)
console.log(typeof pessoa1); //AQUI EU ESTOU PROVANDO QUE pessoas1 É UM OBJETO
console.log(pessoa1); //AQUI EU ESTOU MOSTRANDO TODOS OS PARAMETROS DA pessoa1
console.log(pessoa1.idade); //AQUI EU ESTOU PEDINDO UM VALOR ESPECÍFICO
