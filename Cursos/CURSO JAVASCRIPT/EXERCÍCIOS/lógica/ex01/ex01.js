function status(imc) {
  if (imc <= 18.5) return "Você está abaixo do peso";
  if (imc <= 24.9) return "Você está no seu peso ideal";
  if (imc <= 29.9) return "Você está com sobrepeso";
  if (imc <= 34.9) return "Você está com obesidade grau 1";
  if (imc <= 39.9) return "Você está com obesidade grau 2";
  return "Você está com obsesidade grau 3";
}
function validarValores(peso, altura) {
  return (
    peso && altura && !isNaN(peso) && !isNaN(altura) && peso > 0 && altura > 0
  );
}
function IMC() {
  const resultadoFinal = document.querySelector("#resultado");
  const form = document.querySelector("#form");
  const imcResultado = [];

  function calcularResultado(eventos) {
    eventos.preventDefault();

    const peso = parseFloat(form.querySelector("#input-peso").value);
    const altura = parseFloat(form.querySelector("#input-altura").value);

    if (!validarValores(peso, altura)) {
      resultadoFinal.innerHTML = `<p>Por favor, inserir valores.</P>`;
      return;
    }

    const imc = peso / altura ** 2;

    imcResultado.push({ imc, status: status(imc) });

    resultadoFinal.innerHTML = `<p>
    O seu IMC é: ${imc.toFixed(2)}. <br> ${status(imc)}
    </p>`;

    console.log(imcResultado);
  }
  form.addEventListener("submit", calcularResultado);
}
IMC();
