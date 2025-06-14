// Interface para representar os dados de uma moeda
export interface CoinsProps {
  id: String; // ID único da moeda
  rank: String; // Ranking da moeda no mercado
  symbol: String; // Símbolo da moeda (ex: BTC)
  name: String; // Nome da moeda (ex: Bitcoin)
  supply: String; // Oferta total
  maxSupply: String; // Oferta máxima
  marketCapUsd: String; // Capitalização de mercado
  volumeUsd24Hr: String; // Volume negociado em 24h
  priceUsd: String; // Preço atual
  changePercent24Hr: String; // Variação em 24h
  vwap24Hr: String; // Preço médio ponderado por volume
  explorer: string; // Link para explorar mais sobre a moeda

  // Campos adicionais criados no front-end com valores já formatados:
  CompactedPrice?: String; // Preço formatado (ex: $2.4M)
  FormatedPrice?: String; // Preço formatado padrão
  VolumePrice?: String; // Volume formatado
}

// Interface que representa o formato da resposta da API
export interface DataProps {
  data: CoinsProps[]; // A resposta contém um array de moedas
}

// Interface para controle de paginação
export interface OffSetProps {
  offSet: number; // Valor do offset atual
  setOffSet: React.Dispatch<React.SetStateAction<number>>; // Função para atualizar o offset
}
