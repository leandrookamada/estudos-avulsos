const mainSectionDivH1 = document.querySelector(".main_section_div_h1");
const mainSectionNavButtonIniciar = document.querySelector(
  ".main_section_nav_button_iniciar"
);
const mainSectionNavButtonPausar = document.querySelector(
  ".main_section_nav_button_pausar"
);
const mainSectionNavButtonZerar = document.querySelector(
  ".main_section_nav_button_zerar"
);
let segundos = 0;
let timer;

function horario(segundos) {
  let data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-br", {
    hour12: false,
    timeZone: "UTC",
  });
}
function iniciar() {
  timer = setInterval(function () {
    segundos++;
    mainSectionDivH1.innerHTML = horario(segundos);
  }, 1000);
}
mainSectionNavButtonIniciar.addEventListener("click", function (event) {
  clearInterval(timer);
  iniciar();
});

mainSectionNavButtonPausar.addEventListener("click", function (event) {
  clearInterval(timer);
});
mainSectionNavButtonZerar.addEventListener("click", function (event) {
  clearInterval(timer);
  mainSectionDivH1.innerHTML = "00:00:00";
  segundos = 0;
});
