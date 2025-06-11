//EXTRUTURAÇÃO POR MEU DE DESESTRUTURAÇÃO
let a = "A";
let b = "B";
let c = "C";

const valores = ["B", "C", "A"];
[a, b, c] = valores;

console.log(a, b, c);
console.log(valores[2]);
valores.push("D", "E", "F");
console.log(valores[5]);
