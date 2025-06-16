import { useState } from "react";
import "./styles/App.css";
import logoPng from "./assets/logo.png";
// import { Amor } from "./utils/functionAmor";
// import { Motivacao } from "./utils/functionMotivacao";
// import { BomDia } from "./utils/functionBomDia";

function App() {
  const [titulo, setTitulo] = useState<string>("");
  const [categoria, setCategoria] = useState(0);

  const allfrases = [
    {
      id: 1,
      nome: "motivação",
      frases: [
        "A persistência é o caminho do êxito.",
        "Não importa a velocidade, mas sim a direção.",
        "Grandes realizações exigem tempo e dedicação.",
        "Acredite no processo e confie no seu potencial.",
        "O sucesso é a soma de pequenos esforços repetidos diariamente.",
        "Você é mais forte do que imagina e mais capaz do que acredita.",
        "Desafios são oportunidades disfarçadas.",
        "Cada dia é uma nova chance de recomeçar.",
        "Não espere por oportunidades. Crie-as.",
        "O único limite para o seu sucesso é você mesmo.",
      ],
    },
    {
      id: 2,
      nome: "Amor",
      frases: [
        "O amor é a força mais poderosa do universo",
        "Amar é encontrar no outro um pedaço de si",
        "O verdadeiro amor acolhe, respeita e inspira",
        "Com você, cada momento se torna eterno",
        "O amor não se vê com os olhos, mas se sente com o coração",
        "Seu sorriso ilumina o meu mundo",
        "Amar é querer o bem do outro, mesmo que longe",
        "No amor, não existem distâncias, só saudades",
        "Você é a razão do meu sorriso mais sincero",
        "O amor é a poesia que a alma escreve sem palavras",
      ],
    },
    {
      id: 3,
      nome: "Bom Dia",
      frases: [
        "Bom dia! Que seu dia seja cheio de alegria e paz",
        "Que a sua manhã seja iluminada e cheia de boas energias",
        "Acorde com gratidão e viva com intensidade",
        "Bom dia! Hoje é mais uma chance para ser feliz",
        "Que o sol aqueça seu coração e inspire seus passos",
        "Comece o dia acreditando que coisas boas vão acontecer",
        "Bom dia! Que a felicidade seja sua companheira hoje",
        "Levante com fé, siga com coragem e termine com gratidão",
        "Que cada instante deste dia seja abençoado e especial",
        "Bom dia! Sorria, respire fundo e confie no melhor",
      ],
    },
  ];
  return (
    <div>
      <main>
        <img src={logoPng} alt="" className="div_main_img" />
        <section className="div_main_section">
          <article className="div_main_section_article">
            <h3 className="div_main_section_article_h3">CATEGORIAS</h3>
            {allfrases.map((item, index) => (
              <button 
              key={item.id}
              style={{
                borderWidth: item.nome === allfrases(categoria).nome ? 2 : 0
              }}
              >{item.nome}</button>
            ))}
          </article>
          <article className="div_main_section_article">
            <h3 className="div_main_section_article_h3"> {titulo}.</h3>
            <p className="div_main_section_article_p">{allfrases.}</p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;
