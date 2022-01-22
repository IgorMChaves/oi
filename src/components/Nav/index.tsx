import { Link } from "react-router-dom";
import * as S from "./styles";


const Nav = () => {
  return (
    <S.Nav>
      <input id="menu-toggle" type="checkbox" />
      <label htmlFor="menu-toggle">
        <div className="menu-hamburger">
          <span className="hamburger"></span>
        </div>
      </label>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Ajudar">Ajudar</Link>
        </li>
        <li>
          <Link to="/Adotar">Adotar</Link>
        </li>
      </ul>
    </S.Nav>
  );
};

export default Nav;