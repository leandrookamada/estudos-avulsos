//FUNCÕES - É UM TRECHO DE CÓDIGO QUE EXECUTA UMA FUNÇÃO
function func(nome) {
  console.log(`como você está ${nome}?`);
}
func("eduarda");
//uma função recebe um valor e pode, ou não retornar um valor

function basicos() {
  const somar = (x, y) => {
    return x + y;
  };
  const subtrair = (x, y) => {
    if (x > y) {
      return x - y;
    } else {
      return y - x;
    }
  };
  const multiplicar = (x, y) => {
    return x * y;
  };
  const dividir = (x, y) => {
    if (x > y) {
      return x / y;
    } else {
      return y / x;
    }
  };
  return {
    somar,
    subtrair,
    multiplicar,
    dividir,
  };
}
const resultados = basicos();
console.log(resultados.somar(8, 4));
console.log(resultados.subtrair(8, 4));
console.log(resultados.multiplicar(8, 4));
console.log(resultados.dividir(8, 4));
