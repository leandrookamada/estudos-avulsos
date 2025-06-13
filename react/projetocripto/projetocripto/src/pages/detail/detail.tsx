// Importando hooks do React para gerenciar estado e efeitos colaterais
import { useEffect, useState } from "react";
// Função que busca os dados da moeda
import { getCoin } from "./detailFunction";
// Hooks do React Router para pegar parâmetros da URL e navegar entre páginas
import { useParams, useNavigate } from "react-router-dom";
// Tipagem da moeda, vinda do módulo home
import type { CoinsProps } from "../home/homeTypes";

// Componente principal da página de detalhe da moeda
export function Detail() {
  // Estado para armazenar os dados da moeda buscada
  const [coinData, setCoinData] = useState<CoinsProps | null>(null);

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

    fetchData();
  }, [Cripto]);
  // Renderização do componente
  return (
    <div>
      <h1>Você está na página de uma moeda {Cripto}</h1>
      {/* Exibe os dados formatados da moeda, se existirem */}
      {coinData && (
        <div>
          <p>Nome: {coinData.name}</p>
          <p>Preço: {coinData.FormatedPrice}</p>
          <p>Preço Compacto: {coinData.CompactedPrice}</p>
          <p>Volume 24h: {coinData.VolumePrice}</p>
          <p>
            Mudança em 24h: {Number(coinData.changePercent24Hr).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
}
