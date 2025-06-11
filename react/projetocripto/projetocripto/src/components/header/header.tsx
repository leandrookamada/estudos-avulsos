import style from "./header.module.css";
import Logo from "../../assets/logo.svg";

import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <Link to={"/"}>
        <img className={style.header_img} src={Logo} alt="" />
      </Link>
    </header>
  );
}
