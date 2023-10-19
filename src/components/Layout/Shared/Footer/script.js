import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import style from "./style.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <h1>
          <Link to="/">Travel</Link>
        </h1>
        <div className="flex flex-wrap">
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
          <span>Developed by Arash Yeganeh</span>
          <div className="flex flex-row space-x-2">
            <button className={style.github}>
              <AiFillGithub />
              <a
                href="https://github.com/arashyeganeh/React-Travel-Website-Template"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </button>
            <button className={style.linkedin}>
              <AiFillLinkedin />
              <a
                href="https://www.linkedin.com/in/arash-yeganeh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
