import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import style from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <h1>Travel</h1>
        <div className="flex flex-wrap">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up / Sign In</li>
          </ul>
          <ul>
            <li className="font-bold">Category-A</li>
            <li>Link A-A</li>
            <li>Link A-B</li>
            <li>Link A-C</li>
            <li>Link A-D</li>
          </ul>
          <ul>
            <li className="font-bold">Category-B</li>
            <li>Link B-A</li>
            <li>Link B-B</li>
            <li>Link B-C</li>
            <li>Link B-D</li>
          </ul>
        </div>
        <div className={style.developer}>
          <span>Develope by Arash Yeganeh</span>
          <div className="flex flex-row space-x-2">
            <button className={style.github}>
              <AiFillGithub />
              <span>GitHub</span>
            </button>
            <button className={style.linkedin}>
              <AiFillLinkedin />
              <span>Linkedin</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
