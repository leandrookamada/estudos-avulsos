import { Link } from "react-router-dom";
import "./Header.css";

export function Header() {
  return (
    <header>
      <h1>HEADER</h1>
      <article>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/sobre"}>Sobre</Link>
        </li>
      </article>
    </header>
  );
}
