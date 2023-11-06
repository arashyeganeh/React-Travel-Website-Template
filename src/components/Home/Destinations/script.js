import { PiCactusDuotone, PiVolleyballDuotone } from "react-icons/pi";
import { MdForest } from "react-icons/md";
import style from "./style.module.scss";
import deserCactustImg from "../../../assets/img/home/desert-cactus.jpg";
import desertSunImg from "../../../assets/img/home/desert-sun.jpg";
import forestImg from "../../../assets/img/home/forest.jpg";
import beachSeaImg from "../../../assets/img/home/beach-sea.jpg";
import beachSunriselImg from "../../../assets/img/home/beach-sunrise.jpg";
import beachPalmImg from "../../../assets/img/home/beach-palm.jpg";

const Destinations = () => {
  return (
    <article>
      <h2 className="text-center mt-10">Which destination do you like</h2>
      <section>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="lg:w-3/5 m-lg:order-2">
              <h3>
                <PiCactusDuotone className="text-yellow-600" /> Desert
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className={`${style.sectionImages} ${style.masonry} lg:w-2/5`}>
              <img src={desertSunImg} alt="" />
              <img src={deserCactustImg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex flex-wrap lg:space-x-10">
            <div className={`${style.sectionImages} md:w-1/2 mx-auto`}>
              <img src={forestImg} alt="" />
            </div>
            <div className="lg:grow m-lg:order-2">
              <h3>
                <MdForest className="text-green-600" /> Forest
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex flex-wrap">
            <div className="lg:w-3/5 m-lg:order-2">
              <h3>
                <PiVolleyballDuotone className="text-cyan-600" /> Beach
              </h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
            <div className={`${style.sectionImages} ${style.triple} lg:w-2/5`}>
              <img src={beachPalmImg} alt="" />
              <img src={beachSunriselImg} alt="" />
              <img src={beachSeaImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Destinations;
