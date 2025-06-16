// Escreva uma função que recebe dois números e retorna o maior deles
function maiorNumero(max, min) {
  const num1 = Math.floor(Math.random() * (max - min) + min);
  const num2 = Math.floor(Math.random() * (max - min) + min);

  if (num1 > num2) {
    return `O primeiro número gerado(${num1}), é maior que o segundo número gerado (${num2})`;
  } else if (num1 == num2) {
    return `Os dois números gerados(${(num1, num2)}) são iguais`;
  } else {
    return `O segundo número gerado (${num2}) é maior que o primeiro número gerado(${num1})`;
  }
}
console.log(maiorNumero(10, 1));
