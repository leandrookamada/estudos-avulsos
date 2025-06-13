// Hooks do React
import { useState, useEffect } from "react";

// Ícone de lupa da biblioteca react-icons
import { BsSearch } from "react-icons/bs";

// Importando recursos do React Router
import { Link, useNavigate } from "react-router-dom";

// Importando estilos CSS com module (escopo local por padrão)
import style from "./home.module.css";

// Funções auxiliares separadas para organização de lógica
import { handleGetMore, handleSubmit, getData } from "./homeFunctions";

// Tipagem personalizada para os dados das moedas
import type { CoinsProps } from "./homeTypes";

// Componente principal da página Home
export function Home() {
  // Estado que guarda a lista de moedas
  const [coins, setCoins] = useState<CoinsProps[]>([]);

  // Estado que armazena o texto digitado no input de pesquisa
  const [input, setInput] = useState("");

  // Estado que controla o deslocamento (offset) para paginação
  const [offSet, setOffSet] = useState(0);

  // Hook para navegação programática
  const navigate = useNavigate();

  // useEffect roda sempre que o offset mudar (ex: ao clicar em "mais moedas")
  // Busca os dados e atualiza a lista de moedas
  useEffect(() => {
    getData(offSet, coins, setCoins);
  }, [offSet]);

  return (
    <main>
      <article>
        {/* Formulário de busca de moedas */}
        <form
          className={style.form}
          onSubmit={e => handleSubmit(e, input, navigate)} // Envia o input ao buscar
        >
          <input
            type="text"
            placeholder="Pesquisar Moedas..."
            value={input}
            onChange={e => setInput(e.target.value)} // Atualiza o estado do input em tempo real
          />
          <button type="submit">
            <BsSearch size={30} color="#fff" /> {/* Ícone de lupa */}
          </button>
        </form>

        {/* Tabela de exibição das moedas */}
        <table className={style.main_article_table}>
          <thead>
            <tr className={style.thead_tr}>
              <th scope="col">Moeda</th>
              <th scope="col">Valor de Mercado</th>
              <th scope="col">Preço</th>
              <th scope="col">Volume</th>
              <th scope="col">Mudança em 24h</th>
            </tr>
          </thead>
          <tbody>
            {/* Renderiza a lista de moedas caso exista */}
            {coins.length > 0 &&
              coins.map(item => (
                <tr className={style.tbody_tr} key={String(item.id)}>
                  {/* Coluna com imagem + nome + símbolo da moeda */}
                  <td data-label="Moeda" className={style.td_imgSymbol}>
                    {/* Imagem da moeda, linka para página de detalhes */}
                    <Link to={`/detail/${item.id}`}>
                      <img
                        className={style.imgSymbol}
                        src={`https://assets.coincap.io/assets/icons/${item.symbol.toLocaleLowerCase()}2@2x.png`}
                        alt=""
                      />
                    </Link>
                    {/* Nome e símbolo */}
                    <Link to={`/detail/${item.id}`}>
                      <span>
                        {item.name}
                        <br />
                        {item.symbol}
                      </span>
                    </Link>
                  </td>

                  {/* Coluna de valor de mercado */}
                  <td data-label="Valorde de mercado">{item.CompactedPrice}</td>

                  {/* Coluna de preço */}
                  <td data-label="preço">{item.FormatedPrice}</td>

                  {/* Coluna de volume */}
                  <td data-label="volume">{item.VolumePrice}</td>

                  {/* Coluna de mudança percentual em 24h */}
                  <td
                    data-label="mudança em 24h"
                    className={
                      Number(item.changePercent24Hr) > 0
                        ? style.win // Aplica estilo verde se for positivo
                        : style.loss // Aplica estilo vermelho se for negativo
                    }
                  >
                    <span>{Number(item.changePercent24Hr).toFixed(2)}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </article>

      {/* Botão para carregar mais moedas (incrementa o offset) */}
      <button
        className={style.button}
        onClick={() => handleGetMore({ offSet, setOffSet })}
      >
        Mais moedas
      </button>
    </main>
  );
}
