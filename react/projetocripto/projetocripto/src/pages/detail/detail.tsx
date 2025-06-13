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
      <h1>Você está na página de uma moeda {Cripto}</h1>
      {/* Exibe os dados formatados da moeda, se existirem */}
      {coinData && (
        <div>
          <table className={style.table}>
            <thead className={style.thead}>
              <tr className={style.thead_tr}>
                <th scope="col" className={style.thead_th}>
                  Nome:{" "}
                </th>
                <th scope="col" className={style.thead_th}>
                  Preço:{" "}
                </th>
                <th scope="col" className={style.thead_th}>
                  Preço Compacto:
                </th>
                <th scope="col" className={style.thead_th}>
                  Volume 24h:
                </th>
                <th scope="col" className={style.thead_th}>
                  Mudança em 24h:
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className={style.tbody_tr}>
                <td className={style.tbody_td}>{coinData.name}</td>
                <td className={style.tbody_td}>{coinData.FormatedPrice}</td>
                <td className={style.tbody_td}>{coinData.CompactedPrice}</td>
                <td className={style.tbody_td}>{coinData.VolumePrice}</td>
                <td className={style.tbody_td}>
                  {" "}
                  <span> {Number(coinData.changePercent24Hr).toFixed(2)}%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
