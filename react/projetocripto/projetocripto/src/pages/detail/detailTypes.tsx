// Importando o tipo base de uma moeda que já foi definido na página home
import type { CoinsProps } from "../home/homeTypes";

// Representa a estrutura de uma resposta de sucesso vinda da API
export interface ResponseData {
  data: CoinsProps; // Quando a API retorna uma moeda com sucesso
}

// Representa a estrutura de uma resposta de erro vinda da API
export interface ErrorResponseData {
  error: string; // Quando a API retorna um erro
}
