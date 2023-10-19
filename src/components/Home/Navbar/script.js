import { Link } from "react-router-dom";
import style from "./style.module.scss";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <h1>
        <Link to="/">Travel</Link>
      </h1>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default NavBar;
