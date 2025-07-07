// Importa os hooks do React
import { useState } from "react";

function App() {
  const [signed, setSigned] = useState(false);
  return (
    <div>
      {signed ? (
        <h1>SEJA BEM VINDO LEANDRO</h1>
      ) : (
        <h1>NENHUM USUÁRIO LOGADO</h1>
      )}
      <button onClick={() => setSigned(true)}>Logar</button>
      <button onClick={() => setSigned(false)}>deslogar</button>
    </div>
  );
}

export default App;
