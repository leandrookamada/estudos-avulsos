import "./NotFound.css";

import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div>
      <h1>ERRO 404</h1>
      <p>
        Infelizmente a página em questão deu erro, e por isso seu computador
        esta com virus... É, fudeu geral
      </p>

      <Link to={"/"}>ME TIRA DAQUIIII</Link>
    </div>
  );
}
