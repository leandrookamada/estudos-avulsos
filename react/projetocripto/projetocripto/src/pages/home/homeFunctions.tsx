// Importação de tipos do React para tipagem segura
import type { FormEvent } from "react";
import type { NavigateFunction } from "react-router-dom";
import type { DataProps } from "./homeTypes";
import type { OffSetProps } from "./homeTypes";
import type React from "react";

// Função chamada ao clicar no botão "Mais moedas"
// A ideia é atualizar o valor de offset e permitir paginação
export function handleGetMore({ offSet, setOffSet }: OffSetProps) {
  if (offSet === 0) {
    setOffSet(5); // Começa carregando mais moedas a partir da 6ª
    return;
  }
  // Você pode expandir aqui para somar mais moedas depois (ex: setOffSet(prev => prev + 5))
}

// Função chamada ao enviar o formulário de busca
export function handleSubmit(
  e: FormEvent,
  input: string,
  navigate: NavigateFunction
) {
  e.preventDefault(); // Previne o recarregamento da página
  if (input === "") return; // Não faz nada se o campo estiver vazio

  // Redireciona o usuário para a rota de detalhes da moeda buscada
  navigate(`/detail/${input}`);
}

// Função assíncrona que busca os dados das moedas na API
export async function getData(
  offSet: number,
  coins: any[], // Lista atual de moedas
  setCoins: React.Dispatch<React.SetStateAction<any[]>> // Função que atualiza o estado
) {
  try {
    // Requisição para a API CoinCap com limite e offset definidos
    const response = await fetch(
      `https://rest.coincap.io/v3/assets?limit=10&offset=${offSet}&apiKey=f39623714f320474e22e7723a6df67f6eb529f3a2cdc021e4b679cd409226d8b`
    );

    // Converte a resposta para JSON
    const data: DataProps = await response.json();

    // Formatação de moeda (ex: $12,345.67)
    const price = Intl.NumberFormat("em-US", {
      style: "currency",
      currency: "USD",
    });

    // Formatação compacta (ex: $1.2K, $3.4M)
    const priceCompact = Intl.NumberFormat("em-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumSignificantDigits: 2,
    });

    const coinsData = data.data;

    // Mapeia os dados originais adicionando propriedades formatadas
    const formatedResult = coinsData.map(item => {
      const formated = {
        ...item, // Mantém todos os dados originais da moeda
        FormatedPrice: price.format(Number(item.priceUsd)), // Preço formatado
        CompactedPrice: priceCompact.format(Number(item.priceUsd)), // Preço em forma compacta
        VolumePrice: priceCompact.format(Number(item.volumeUsd24Hr)), // Volume em forma compacta
      };
      return formated;
    });

    // Adiciona as novas moedas à lista existente
    const listCoin = [...coins, ...formatedResult];

    // Atualiza o estado com todas as moedas (as antigas + novas)
    setCoins(listCoin);
  } catch (error) {
    // Em caso de erro na requisição ou processamento
    console.error("houve um erro de verificação", error);
  }
}
