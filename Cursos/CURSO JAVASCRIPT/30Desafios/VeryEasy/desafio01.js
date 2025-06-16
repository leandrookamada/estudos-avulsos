// Definimos uma função chamada 'media' que recebe um parâmetro 'Numbers' (um array de números)
function media(Numbers) {
  // Criamos uma variável 'num' e inicializamos com 0.
  // Esta variável vai acumular a soma de todos os elementos do array.
  let num = 0;

  // Usamos o método 'forEach' para percorrer cada elemento do array 'Numbers'.
  // Para cada 'number' no array, adicionamos seu valor à variável 'num'.
  Numbers.forEach(number => {
    num += number; // Equivalente a: num = num + number;
  });

  // Após somar todos os elementos, calculamos a média.
  // A média é a soma total dividida pelo número de elementos do array.
  const media = num / Numbers.length;

  // A função retorna o valor calculado da média.
  return media;
}

// Chamamos a função 'media' passando um array de números como argumento.
// O resultado será exibido no console.
console.log(media([10, 9, 6, 8, 9, 1, 5, 7]));
