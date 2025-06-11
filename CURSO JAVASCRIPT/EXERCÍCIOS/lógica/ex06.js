const max = 3000;
const min = 900;
let largura = Math.floor(Math.random() * (max - min) + min);
let altura = Math.floor(Math.random() * (max - min) + min);

function ePaisagem(largura, altura) {
  if (largura > altura)
    return `As suas medidas são: ${
      largura + "x" + altura
    }. Por isso, ela está no modo paisagem.`;
  if (largura < altura)
    return `As suas medidas são: ${
      largura + "x" + altura
    }. Por isso, ela está no modo retrato.`;
  if ((largura = altura))
    return `As suas medidas são: ${
      largura + "x" + altura
    }. Por isso, ela é um quadrado.`;
}
console.log(ePaisagem(largura, altura));
