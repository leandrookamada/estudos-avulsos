const min = 1;
const max = 100;
let num1 = Math.floor(Math.random() * (max - min) + min);
function fizzBuzz(num1) {
  if (num1 % 3 === 0 && num1 % 5 === 0) return "FizzBuzz";
  if (num1 % 3 === 0) return "Fizz";
  if (num1 % 5 === 0) return "Buzz";
  else return `não divisível por 3 nem por 5`;
}
console.log(`O número gerado foi ${num1}, logo ele é ${fizzBuzz(num1)}`);
