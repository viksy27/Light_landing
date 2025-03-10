import Button from "../Button/Button";
import ava1 from "../../assets/images/avatar1.png";
import ava2 from "../../assets/images/avatar2.png";
import ava3 from "../../assets/images/avatar3.png";
import ava4 from "../../assets/images/avatar4.png";
import stars from "../../assets/images/icons/stars.svg";
import vr from "../../assets/images/cvr1.png";

import "../../assets/styles/_global.scss";
import s from "./HeroSection.module.scss";

const ExploreSection = () => {
  return (
    <section className={`container ${s.hero_wrapper}`}>
      <div className={s.hero_info}>
        <h1>Let’s Explore Three-Dimensional visual</h1>
        <p className={s.text}>
          With virtual technology you can see the digital world feel more real
          and you can play the game with a new style.
        </p>
        <>
          <Button>Get it Now</Button>
          <button className={s.btn_transparent}>Explore Device</button>
        </>

        <div className={s.online}>
          <div className={s.online_icons}>
            <div className={s.online_icon}>
              <img src={ava1} alt="User avatar" />
            </div>
            <div className={s.online_icon}>
              <img src={ava2} alt="User avatar" />
            </div>
            <div className={s.online_icon}>
              <img src={ava3} alt="User avatar" />
            </div>
            <div className={s.online_icon}>
              <img src={ava4} alt="User avatar" />
            </div>
          </div>
          <p className={s.online_text}>400k people online</p>
        </div>
      </div>

      <div className={s.prewiev}>
        <div className={s.prewiev_img}>
          <img
            src={vr}
            className={s.prewiev_picture}
            alt="Cinematic Virtual Reality"
          />
          <img src={stars} className={s.prewiev_stars} alt="White stars" />
        </div>

        <div className={s.prewiev_content}>
          <h2 className={s.prewiev_title}>Cinematic Virtual Reality</h2>
          <p className={s.prewiev_text}>
            Let’s be the best for more real and effective results and ready to
            explore the limitless world that we have prepared for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
