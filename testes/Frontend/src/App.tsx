import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  const enviarNome = async (e: React.FormEvent) => {
    e.preventDefault();

    const resposta = await fetch("http://localhost:8000/api/saudacao", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome }),
    });

    const dados = await resposta.json();
    setMensagem(dados.mensagem);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Conexão Frontend + Backend</h1>

      <form onSubmit={enviarNome}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "1rem", padding: "0.5rem 1rem" }}
        >
          Enviar
        </button>
      </form>

      {mensagem && <p style={{ marginTop: "1rem" }}>{mensagem}</p>}
    </div>
  );
}

export default App;
