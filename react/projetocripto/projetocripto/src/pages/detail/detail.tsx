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
  const navigate = useNavigate();

  // useEffect roda quando o componente monta ou quando `Cripto` muda
  useEffect(() => {
    // Função assíncrona que busca os dados da moeda
    async function fetchData() {
      // Se não existir um parâmetro, sai da função
      if (!Cripto) return;

      // Busca os dados da API
      const data = await getCoin(Cripto);

      // Se não veio dado válido, redireciona para a home
      if (!data) {
        navigate("/");
        return;
      }

      // Se tudo estiver certo, salva os dados da moeda no estado
      setCoinData(data.data);
    }

    // Chama a função de busca
    fetchData();
  }, [Cripto, navigate]); // Dependências do efeito

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
