import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";

import { Link, useNavigate } from "react-router-dom";
import style from "./home.module.css";

import { handleGetMore, handleSubmit, getData } from "./homeFunctions";
import type { CoinsProps } from "./homeTypes";

export function Home() {
  const [coins, setCoins] = useState<CoinsProps[]>([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getData(setCoins);
  }, []);

  return (
    <main>
      <article>
        <form
          className={style.form}
          onSubmit={e => handleSubmit(e, input, navigate)}
        >
          <input
            type="text"
            placeholder="Pesquisar Moedas..."
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit">
            <BsSearch size={30} color="#fff" />
          </button>
        </form>

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
            {coins.length > 0 &&
              coins.map(item => (
                <tr className={style.tbody_tr} key={String(item.id)}>
                  <td data-label="Moeda" className={style.td_imgSymbol}>
                    <Link to={`/detail/${item.id}`}>
                      <img
                        className={style.imgSymbol}
                        src={`https://assets.coincap.io/assets/icons/${item.symbol.toLocaleLowerCase()}2@2x.png`}
                        alt=""
                      />
                    </Link>
                    <Link to={`/detail/${item.id}`}>
                      {" "}
                      <span>
                        {item.name}
                        <br />
                        {item.symbol}
                      </span>
                    </Link>
                  </td>
                  <td data-label="Valorde de mercado">{item.CompactedPrice}</td>
                  <td data-label="preço">{item.FormatedPrice}</td>
                  <td data-label="volume">{item.VolumePrice}</td>
                  <td
                    data-label="mudança em 24h"
                    className={
                      Number(item.changePercent24Hr) > 0
                        ? style.win
                        : style.loss
                    }
                  >
                    <span>{Number(item.changePercent24Hr).toFixed(2)}</span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </article>
      <button className={style.button} onClick={handleGetMore}>
        Mais moedas
      </button>
    </main>
  );
}
