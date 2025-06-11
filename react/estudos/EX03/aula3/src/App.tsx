import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [task, setTask] = useState<string[]>([]);
  const [edita, setEdita] = useState({
    enabled: false,
    task: "",
  });

  function enviarTarefa() {
    if (!input) {
      alert(`preencha o input de "tarefas" `);
      return;
    }
    if (edita.enabled) {
      salvaEdicao();
      return;
    }
    setTask(e => [...e, input]);
    setInput("");
  }

  function apagar(item: string) {
    const removeTask = task.filter(task => task !== item);
    setTask(removeTask);
  }

  function editar(item: string) {
    setInput(item);
    setEdita({
      enabled: true,
      task: item,
    });
  }
  function salvaEdicao() {
    const editaTask = task.findIndex(task => task === edita.task);
    const allTask = [...task];
    allTask[editaTask] = input;
    setTask(allTask);
    setEdita({
      enabled: false,
      task: "",
    });
    setInput("");
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={enviarTarefa}>
        {edita.enabled ? "Editar tarefa" : "Enviar tarefa"}
      </button>
      <hr />
      {task.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => editar(item)}>Editar</button>
          <button onClick={() => apagar(item)}>Apagar</button>
        </section>
      ))}
    </div>
  );
}

export default App;
