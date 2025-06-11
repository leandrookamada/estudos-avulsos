/*
OPERADORES ARITMÉDICOS:
    + ADIÇÃO / CONCATENAÇÃO
    - SUBTRAÇÃO
    * MULTIPLICAÇÃO
    ** POTENCIAÇÃO
    / DIVISÃO
    % RESTO DE
    ++ INCREMENTO
    -- DECREMENTO
    += OPERADOR DE ATRIBUIÇÃO ADIÇÃO
    -= OPERADOR DE ATRIBUIÇÃO SUBTRAÇÃO
    *= OPERADOR DE ATRIBUIÇÃO MULTIPLICAÇÃO
    /= OPERADOR DE ATRIBUIÇÃO DIVISÃO

    OS OPERADORES NO JAVASCRIPT POSSUEM PRECEDÊNCIA, QUE PODE SER QUEBRADO PELO USO DOS PARÊNTESES.
*/

let num1 = 2;
let num2 = 8;
const potenciacao = () => {
  return num1 ** num2;
};
console.log(potenciacao());

let num3 = 17;
let num4 = 7;
const restoDe = () => {
  if (num3 > num4) {
    return num3 % num4;
  } else {
    return num4 % num3;
  }
};
console.log(restoDe());

let incremento = 2;
incremento++;
console.log(++incremento);

let decremento = 7;
--decremento;
console.log(--decremento);

let dois = 2;
dois += 2;
dois += 2;
dois += 2;
console.log("aqui deve aparecer 8, e aparece:", dois);

let cinco = 5;
cinco -= 1;
cinco -= 1;
cinco -= 1;
console.log("aqui deve aparecer 2, e aparece:", cinco);

let tres = 3;
tres *= 2;
tres *= 2;
tres *= 2;
console.log("Aqui deve aparecer 24, e aparece:", tres);

let sessentaEQuatro = 64;
sessentaEQuatro /= 2;
sessentaEQuatro /= 2;
sessentaEQuatro /= 2;
sessentaEQuatro /= 2;
console.log("aqui deve aparecer 4, e aparece:", sessentaEQuatro);

//NÃO PODE SER ESCRITA COMO CONST POIS O VALOR DE UMA CONST NÃO PODE SER ALTERADO, POR ISSO DEVE-SE USAR LET, QUE POSSUE VALOR VARIÁVEL
