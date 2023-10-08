import style from "./style.module.scss";

const NavBar = () => {
  return (
    <nav className={style.nav}>
      <h1>Travel</h1>
      <div>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <button>Sign Up</button>
      </div>
    </nav>
  );
};

export default NavBar;
