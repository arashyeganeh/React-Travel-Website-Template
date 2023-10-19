import image from "../../../assets/img/home/header.jpg";
import style from "./style.module.scss";

const Hero = () => {
  return (
    <>
      <div className={style.hero} style={{ backgroundImage: `url(${image})` }}>
        <h1>Be live, not alive</h1>
        <p>Select your preferred plan</p>
        <button>
          <i className={style.scroll}></i>
        </button>
      </div>
    </>
  );
};

export default Hero;
