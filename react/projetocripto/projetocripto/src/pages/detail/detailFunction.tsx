// Tipos que representam os dados válidos e os erros retornados pela API
import type { ResponseData, ErrorResponseData } from "./detailTypes";
// Tipagem base da moeda
import type { CoinsProps } from "../home/homeTypes";

// Unindo os dois tipos possíveis que podem vir da API (resposta válida ou erro)
type DataProps = ResponseData | ErrorResponseData;

// Função que busca dados de uma moeda com base no ID dela
export async function getCoin(id: string): Promise<ResponseData | null> {
  try {
    // Faz uma requisição à API usando o ID passado como parâmetro
    const response = await fetch(
      `https://rest.coincap.io/v3/assets/${id}?apiKey=f39623714f320474e22e7723a6df67f6eb529f3a2cdc021e4b679cd409226d8b`
    );

    // Converte a resposta em JSON
    const data: DataProps = await response.json();

    // Se vier um erro na resposta (por exemplo, moeda não encontrada), retorna null
    if ("error" in data) {
      console.log("erro no detailFunction");
      return null;
    }

    // Extraindo os dados da moeda
    const coin = data.data;

    // Criando formatadores para o preço (completo e compacto)
    const price = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const priceCompact = Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumSignificantDigits: 2,
    });

    // Criando um novo objeto com os dados da moeda + valores formatados
    const formattedCoin: CoinsProps & {
      FormatedPrice: string;
      CompactedPrice: string;
      VolumePrice: string;
    } = {
      ...coin,
      FormatedPrice: price.format(Number(coin.priceUsd)),
      CompactedPrice: priceCompact.format(Number(coin.priceUsd)),
      VolumePrice: priceCompact.format(Number(coin.volumeUsd24Hr)),
    };

    // Retorna os dados formatados em um objeto com a estrutura esperada
    return { data: formattedCoin };
  } catch (error) {
    // Em caso de erro na requisição, exibe no console e retorna null
    console.error("Erro ao buscar moeda", error);
    return null;
  }
}
