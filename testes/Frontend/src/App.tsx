// Importa o hook useState para armazenar valores
import { useState } from "react";

function App() {
  // "nome" armazena o que o usuário digita no input
  // "setNome" é a função que atualiza esse valor
  const [nome, setNome] = useState("");

  // "mensagem" armazena o que a API responder (saudação)
  const [mensagem, setMensagem] = useState("");

  // Função chamada quando o formulário é enviado
  const enviarNome = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita o recarregamento da página ao enviar o formulário

    // Faz uma requisição POST para o backend
    const resposta = await fetch("http://localhost:8000/api/saudacao", {
      method: "POST", // Método HTTP
      headers: {
        "Content-Type": "application/json", // Diz que o corpo da requisição é JSON
      },
      body: JSON.stringify({ nome }), // Envia o nome digitado para a API
    });

    // Converte a resposta para JSON
    const dados = await resposta.json();

    // Armazena a mensagem vinda do backend no estado "mensagem"
    setMensagem(dados.mensagem);
  };

  return (
    // Container principal com padding e fonte personalizada
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Conexão Frontend + Backend</h1>

      {/* Formulário que chama enviarNome ao ser enviado */}
      <form onSubmit={enviarNome}>
        {/* Input controlado: o valor vem do estado "nome", e setNome atualiza */}
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={e => setNome(e.target.value)} // Atualiza "nome" conforme o usuário digita
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
        >
          Enviar
        </button>
      </form>

      {/* Se houver mensagem, ela será exibida aqui */}
      {mensagem && <p style={{ marginTop: "1rem" }}>{mensagem}</p>}
    </div>
  );
}

export default App;
