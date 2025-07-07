//WHILE E DO-WHILE
function random(max, min) {
  const r = Math.random() * (max - min) * min;
  return Math.floor(r);
}
const min = 1;
const max = 50;
let rand = random(max, min);
while (rand !== 10) {
  rand = random(max, min);
  console.log(rand);
}
