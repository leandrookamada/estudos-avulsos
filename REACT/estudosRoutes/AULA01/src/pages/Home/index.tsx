import { Link } from "react-router-dom";
export function Home() {
  return (
    <div>
      <h2>
        estou rodando <strong>NA HOME</strong>
        <br />
      </h2>{" "}
      <br />
      <Link to="/sobre">Sobre</Link>
    </div>
  );
}
