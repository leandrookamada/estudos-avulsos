// Importa os hooks do React
import { useState, useEffect, useRef, useMemo, useCallback } from "react";

function App() {
  // Referência ao input para manipular foco
  const inputRef = useRef<HTMLInputElement>(null);

  // Referência para evitar que o useEffect de salvar rode na primeira renderização
  const renderRef = useRef(true);

  // Estado do valor atual do input
  const [input, setInput] = useState("");

  // Estado que armazena a lista de tarefas
  const [task, setTask] = useState<string[]>([]);

  // Estado que controla o modo de edição
  const [edita, setEdita] = useState({
    enabled: false, // se está editando ou não
    task: "", // qual tarefa está sendo editada
  });

  // useEffect que carrega as tarefas do localStorage quando o componente monta
  useEffect(() => {
    const salvarTarefas = localStorage.getItem("@testando");
    if (salvarTarefas) {
      // Converte a string salva para um array de tarefas
      setTask(JSON.parse(salvarTarefas));
    }
  }, []); // Dependência vazia: roda apenas na montagem

  // useEffect que salva as tarefas no localStorage sempre que elas mudam
  useEffect(() => {
    if (renderRef.current) {
      // Se for a primeira renderização, evita salvar para não sobrescrever dados
      renderRef.current = false;
      return;
    }
    // Salva o array de tarefas como string no localStorage
    localStorage.setItem("@testando", JSON.stringify(task));
  }, [task]); // Roda sempre que 'task' mudar

  // useMemo - memoriza a quantidade de tarefas
  const contadorDeTarefas = useMemo(() => {
    // Sempre que o array 'task' mudar, recalcula a quantidade
    return task.length;
  }, [task]);

  // Função para enviar uma nova tarefa ou salvar uma edição
  // useCallback - memoriza a função para evitar recriações desnecessárias
  const enviarTarefa = useCallback(() => {
    if (!input) {
      alert(`preencha o input de "tarefas" `);
      return;
    }
    if (edita.enabled) {
      // Se estiver editando, salva a edição
      salvaEdicao();
      return;
    }
    // Se não, adiciona nova tarefa ao array
    setTask(e => [...e, input]);
    setInput(""); // Limpa o input
  }, [input, task]);
  // Dependências: 'input' (porque envia o valor) e 'task' (por segurança, embora neste caso não seja estritamente necessário)

  // Função para apagar uma tarefa
  function apagar(item: string) {
    // Filtra todas as tarefas diferentes da que será apagada
    const removeTask = task.filter(task => task !== item);
    setTask(removeTask);
  }

  // Função para iniciar a edição de uma tarefa
  function editar(item: string) {
    setInput(item); // Coloca a tarefa no input
    setEdita({
      enabled: true, // Ativa o modo de edição
      task: item, // Define qual tarefa será editada
    });
    inputRef.current?.focus(); // Dá foco no input
  }

  // Função para salvar a edição de uma tarefa
  function salvaEdicao() {
    // Encontra o índice da tarefa a ser editada
    const editaTask = task.findIndex(task => task === edita.task);
    // Cria uma cópia do array de tarefas
    const allTask = [...task];
    // Substitui a tarefa antiga pelo novo valor do input
    allTask[editaTask] = input;
    // Atualiza o estado com a nova lista de tarefas
    setTask(allTask);
    // Reseta o modo de edição
    setEdita({
      enabled: false,
      task: "",
    });
    setInput(""); // Limpa o input
  }

  return (
    <div>
      <h1>Lista de tarefas</h1>

      {/* Input controlado pelo estado 'input' */}
      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={input}
        onChange={e => setInput(e.target.value)}
        ref={inputRef} // Referência para focar no input
      />

      {/* Botão que envia ou edita a tarefa, dependendo do estado */}
      <button onClick={enviarTarefa}>
        {edita.enabled ? "Editar tarefa" : "Enviar tarefa"}
      </button>

      <br />
      <br />
      <br />

      {/* Exibe a quantidade de tarefas usando o valor memoizado */}
      <strong>Você possui {contadorDeTarefas} itens na sua lista.</strong>

      <hr />
      <br />
      <br />

      {/* Renderiza a lista de tarefas */}
      {task.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          {/* Botão para iniciar edição da tarefa */}
          <button onClick={() => editar(item)}>Editar</button>
          {/* Botão para apagar a tarefa */}
          <button onClick={() => apagar(item)}>Apagar</button>
        </section>
      ))}
    </div>
  );
}

// Exporta o componente principal
export default App;
