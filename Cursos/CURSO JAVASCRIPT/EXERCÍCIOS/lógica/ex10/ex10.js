const tarefas = [];

function salvarTarefa() {
  const mainSectionFormPInput = document.querySelector(
    ".main_section_form_p_input"
  );
  const mainSectionForm = document.querySelector(".main_section_form");
  const mainDiv = document.querySelector(".main_div");

  function postarTarefa(eventos) {
    eventos.preventDefault();
    tarefas.push(mainSectionFormPInput.value);

    mainDiv.innerHTML = `<p>${tarefas.join(", ")}.</p><button> apagar</button>`;
    mainSectionFormPInput.value = " ";
  }
  function renderizarTarefa() {
    mainDiv.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
      const p = document.createElement("p");
      p.textContent = tarefa;
      const btn = document.createElement("button");
      btn.textContent = "Apagar";
      btn.addEventListener("click", () => {
        tarefas.splice(index, 1);
        renderizarTarefa();
      });
    });
    const divTarefa = document.createElement("div");
    divTarefa.appendChild(p);
    divTarefa.appendChild(button);
    mainDiv(divTarefa);
  }
  mainSectionForm.addEventListener("submit", postarTarefa);
}
salvarTarefa();
