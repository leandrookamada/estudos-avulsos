// Importando hooks do React para gerenciar estado e efeitos colaterais
import { useEffect, useState } from "react";
// Função que busca os dados da moeda
import { getCoin } from "./detailFunction";
// Hooks do React Router para pegar parâmetros da URL e navegar entre páginas
import { useParams, useNavigate } from "react-router-dom";
// Tipagem da moeda, vinda do módulo home
import type { CoinsProps } from "../home/homeTypes";
import style from "./detail.module.css";

// Componente principal da página de detalhe da moeda
export function Detail() {
  // Estado para armazenar os dados da moeda buscada
  const [coinData, setCoinData] = useState<CoinsProps | null>(null);
  const [loading, setLoading] = useState(true);

  // Pegando o parâmetro da URL (por exemplo: /detail/bitcoin => Cripto = "bitcoin")
  const { Cripto } = useParams();

  // Hook para redirecionamento de rota

  // useEffect roda quando o componente monta ou quando `Cripto` muda
  useEffect(() => {
    async function fetchData() {
      if (!Cripto) return;

      const data = await getCoin(Cripto);

      if (!data || !data.data) {
        console.error("Moeda não encontrada ou erro ao buscar dados.");
        return;
      }

      console.log("Dados da moeda:", data.data); // <-- veja se chega aqui

      setCoinData(data.data);
    }

    setLoading(false);
    fetchData();
  }, [Cripto]);

  if (loading) {
    return (
      <div className={style.div_loading}>
        <h4>Carregando</h4>
      </div>
    );
  }

  // Renderização do componente
  return (
    <div>
      {coinData && (
        <div className={style.div}>
          <main className={style.main}>
            <img
              className={style.img}
              src={`https://assets.coincap.io/assets/icons/${coinData?.symbol.toLocaleLowerCase()}2@2x.png`}
              alt=""
            />
            <section>
              <h1>
                {coinData.name} | {coinData.symbol}
              </h1>
              <div>
                <span>Posição no ranking</span>
                <p>{coinData.rank}º</p>
              </div>
              <div>
                <span>Preço:</span>
                <p>{coinData.CompactedPrice}</p>
              </div>
              <div>
                <span>Volume 24h:</span>
                <p
                  className={
                    Number(coinData.changePercent24Hr) > 0
                      ? style.profit
                      : style.loss
                  }
                >
                  {Number(coinData.changePercent24Hr).toFixed(2)}
                </p>
              </div>
            </section>
          </main>
        </div>
      )}
    </div>
  );
}
