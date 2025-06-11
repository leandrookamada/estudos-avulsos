import type { FormEvent } from "react";
import type { NavigateFunction } from "react-router-dom";
import type { DataProps } from "./homeTypes";

export function handleGetMore() {
  console.log("carregar mais moedas..");
}
export function handleSubmit(
  e: FormEvent,
  input: string,
  navigate: NavigateFunction
) {
  e.preventDefault();
  if (input === "") return;
  navigate(`/detail/${input}`);
}

export async function getData(
  setCoins: React.Dispatch<React.SetStateAction<any[]>>
) {
  try {
    const response = await fetch(
      "https://rest.coincap.io/v3/assets?limit=10&offset=0&apiKey=f39623714f320474e22e7723a6df67f6eb529f3a2cdc021e4b679cd409226d8b"
    ); // SALVANDO OS DADOS DA API NA CONST "response"
    const data: DataProps = await response.json(); //TRANSFORMANDO OS DADOS EM OBJETO E ARMAZENANDO EM "data"
    const price = Intl.NumberFormat("em-US", {
      style: "currency",
      currency: "USD",
    }); // ESTOU FORMATANDO O VALOR E SALVANDO NA VARIÁVEL "price"
    const priceCompact = Intl.NumberFormat("em-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumSignificantDigits: 2,
    }); // ESTOU COMPACTANDO O VALOR E SALVANDO NA VARIÁVEL "priceCompact"
    const coinsData = data.data;
    const formatedResult = coinsData.map(item => {
      const formated = {
        ...item,
        FormatedPrice: price.format(Number(item.priceUsd)), //NOME DO NOVO OBJETO, POREM EU NÃO POSSO SALVAR ESSE VALOR FORMATADO PQ ELE É UMA STRING, LOGO EU TRANSFORMO ELE EM NUMBER
        CompactedPrice: priceCompact.format(Number(item.priceUsd)),
        VolumePrice: priceCompact.format(Number(item.volumeUsd24Hr)),
      };
      return formated;
    });
    setCoins(formatedResult);
    console.log(data);
  } catch (error) {
    console.error("houve um erro de verificação", error);
  }
}
