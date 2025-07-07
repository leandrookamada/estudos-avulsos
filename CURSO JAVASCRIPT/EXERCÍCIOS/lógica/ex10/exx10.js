const mainSectionP = document.querySelector(".main_section_p");
const mainSectionPInput = document.querySelector(".main_section_p_input");
const mainSectionPInputButton = document.querySelector(
  ".main_section_p_input_button"
);
const mainDiv = document.querySelector(".main_div");

mainSectionPInputButton.addEventListener("click", () => {
  if (!mainSectionPInput.value) return;
  criarTarefa(mainSectionPInput.value);
});
mainSectionPInput.addEventListener("keypress", e => {
  if (e.keyCode === 13) {
    if (!mainSectionPInput.value) return;
    criarTarefa(mainSectionPInput.value);
  }
});
document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("apagar")) {
    el.parentElement.remove();
    salvarTarefas();
  }
});
function criarLi() {
  const li = document.createElement("Li");
  return li;
}
function criarButton(li) {
  li.innerText += " ";
  const bnt = document.createElement("button");
  bnt.innerText = "Apagar";
  bnt.setAttribute("class", "apagar");
  bnt.setAttribute("title", "apagar está tarefa.");
  li.appendChild(bnt);
}
function apagarInput() {
  mainSectionPInput.value = "  ";
  mainSectionPInput.focus;
}
function criarTarefa(textoInserido) {
  const li = criarLi();
  li.textContent = textoInserido;
  mainDiv.appendChild(li);
  criarButton(li);
  apagarInput();
  salvarTarefas();
}
function salvarTarefas() {
  const slvTarefas = mainDiv.querySelectorAll("li");
  const slvListaDeTarefas = [];

  for (let tarefa of slvTarefas) {
    let tarefas = tarefa.innerText;
    tarefas = tarefas.replace("Apagar", "").trim();
    slvListaDeTarefas.push(tarefas);
  }

  const slvListaDeTarefasJSON = JSON.stringify(slvListaDeTarefas);
  localStorage.setItem("tarefas", slvListaDeTarefasJSON);
  console.log(slvListaDeTarefasJSON);
}
function adicionaTarefas() {
  const tarefasSalvas = localStorage.getItem("tarefas");
  const listaDeTarefasSalvas = JSON.parse(tarefasSalvas);

  for (let tarefa of listaDeTarefasSalvas) {
    criarTarefa(tarefa);
  }
}
adicionaTarefas();
