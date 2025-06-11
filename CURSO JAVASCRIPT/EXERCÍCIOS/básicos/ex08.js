let num1 = 9.74;
let num2 = 9.42;

let num3 = Math.floor(num1); //aqui ele vai arredondar o valor para baixo
console.log(num3);

let num4 = Math.ceil(num1); //aqui ele vai arredondar o valor para cima
console.log(num4);

let num5 = Math.round(num1); //aqui, caso o valor seja acima que 0.5, ele vai arredondar para cima o valor
console.log(num5);
let num6 = Math.round(num2); // Caso o valor seja menor que 0.5, ele vai arredondar o valor para baixo
console.log(num6);

console.log(Math.random()); //Math.random sempre vai gerar um número aleatório entre 0 e 1, não considerando o 1 nem o 0 absoluto
const aleatorio = Math.round(Math.random() * (10 - 5) + 5); //Nessa linha de código estou dizendo que eu quero um número aleatório entre 10 e 5, porem esse número
// sempre deve ser um número inteiro
console.log(aleatorio);
