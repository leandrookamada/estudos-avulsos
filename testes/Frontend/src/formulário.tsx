import React, { useState } from "react";
import "./App.css";

const Questionario = [
  {
    id: 1,
    pergunta:
      "Já presenciei ou fui alvo de constrangimento, humilhação ou insinuação no trabalho.",
  },
  {
    id: 2,
    pergunta:
      "Sinto que recebo mais tarefas do que posso dar conta no meu horário de trabalho.",
  },
  {
    id: 3,
    pergunta:
      "Minha liderança adota uma postura autoritária, ríspida ou desrespeitosa.",
  },
  {
    id: 4,
    pergunta: "Meu trabalho afeta negativamente minha vida pessoal e familiar.",
  },
  {
    id: 5,
    pergunta:
      "Meus esforços e resultados raramente são reconhecidos pela empresa.",
  },
  {
    id: 6,
    pergunta:
      "Existem desentendimentos frequentes entre colegas ou entre setores.",
  },
  {
    id: 7,
    pergunta:
      "Costumo trabalhar além da jornada contratada ou fazer muitas horas extras.",
  },
  {
    id: 8,
    pergunta: "Tenho medo de ser demitido ou de mudanças bruscas na empresa.",
  },
  {
    id: 9,
    pergunta:
      "Já presenciei ou fui vítima de ameaças, agressões ou violência verbal no ambiente de trabalho.",
  },
  {
    id: 10,
    pergunta: "Tenho pouca liberdade para tomar decisões sobre minhas tarefas.",
  },
  {
    id: 11,
    pergunta:
      "Não tenho clareza sobre o que exatamente se espera de mim no trabalho.",
  },
  {
    id: 12,
    pergunta:
      "Sinto que não tenho com quem contar ou conversar no ambiente de trabalho.",
  },
];

export default function () {
  const [resposta, setResposta] = useState<{ [key: number]: number }>({});

  const [etapaAtual, setEtapaAtual] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorNumerico = Number(e.target.value);
    const perguntaId = Questionario[etapaAtual].id;

    if (!Number.isNaN(valorNumerico)) {
      setResposta(prev => ({
        ...prev,
        [perguntaId]: valorNumerico,
      }));
    } else {
      console.warn("Valor inválido detectado:", e.target.value);
    }
  };

  const avancar = () => {
    if (etapaAtual < Questionario.length - 1) {
      setEtapaAtual(etapaAtual + 1);
    }
  };
  const voltar = () => {
    if (etapaAtual > 0) {
      setEtapaAtual(etapaAtual - 1);
    }
  };
  const handleSubmit = async (
    /*aqui eu estou dizendo que a função retorna uma "promise<T>" */ e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      const response = await /* espera a promise<T> */ fetch(
        "http://localhost:8000/api/respostas",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ respostas: resposta }),
        }
      );
      if (!response.ok) {
        alert("Erro no status HTTP." + response.status);
      }
      alert("Status HTTP positivo");
      const data = await response.json();
      alert(JSON.stringify(data));

      alert("deu certo, graças a Deus e a média é:" + data.media);
    } catch (err) {
      alert("O problema está no catch");
      console.error("Erro ao enviar formulário:", err);
    }
  };
  return (
    <main className="main">
      <div className="main_div">
        <div className="main_div_div">
          <form onSubmit={handleSubmit}>
            <h2 className="main_div_div_form_h2">
              Pergunta {etapaAtual + 1} de 12
            </h2>

            <label className="main_div_div_form_h2_label">
              {etapaAtual + 1}. {Questionario[etapaAtual].pergunta}
            </label>

            <div className="main_div_div_form_div">
              {[1, 2, 3, 4, 5].map(valor => (
                <label
                  key={valor}
                  className="flex items-center gap-3 p-3 border border-gray-300 rounded hover:bg-gray-50"
                >
                  <input
                    type="radio"
                    name={`resposta-${etapaAtual}`}
                    value={valor}
                    checked={resposta[Questionario[etapaAtual].id] === valor}
                    onChange={handleChange}
                    className="w-5 h-5"
                  />
                  <span className="text-sm">
                    {valor} —{" "}
                    {
                      [
                        "Nunca",
                        "Raramente",
                        "Às vezes",
                        "Frequentemente",
                        "Sempre",
                      ][valor - 1]
                    }
                  </span>
                </label>
              ))}
            </div>

            <div className="main_div_div_div">
              <button
                type="button"
                onClick={voltar}
                disabled={etapaAtual === 0}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Voltar
              </button>

              {etapaAtual < Questionario.length - 1 && (
                <button
                  type="button"
                  onClick={avancar}
                  disabled={
                    typeof resposta[Questionario[etapaAtual].id] !== "number"
                  }
                  className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                >
                  Próximo
                </button>
              )}

              {etapaAtual === Questionario.length - 1 && (
                <button
                  type="submit"
                  disabled={
                    typeof resposta[Questionario[etapaAtual].id] !== "number"
                  }
                  className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
                >
                  Enviar
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
