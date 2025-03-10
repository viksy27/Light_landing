import Button from "../Button/Button";
import w from "../../assets/images/cvr2.png";
import m from "../../assets/images/cvr3.png";

import "../../assets/styles/_global.scss";
import s from "./ExperienceSection.module.scss";

const ExperienceSection = () => {
  return (
    <section className={`container ${s.experience_section}`}>
      <div className={s.gallery}>
        <div className={`${s.gallery_card} ${s.gallery_card_left}`}>
          <div className={s.gallery_card_inner}></div>
          <img
            className={s.gallery_card_inner_img}
            src={w}
            alt="A girl in virtual reality glasses"
          />
        </div>

        <div className={`${s.gallery_card} ${s.gallery_card_right}`}>
          <div className={s.gallery_card_inner}></div>
          <img
            className={s.gallery_card_inner_img}
            src={m}
            alt="A man in virtual reality glasses"
          />
        </div>
      </div>

      <div className={s.content}>
        <h2 className={s.content_title}>New Experience In Playing Game</h2>
        <p className={s.content_desc}>
          You can try playing the game with a new style and of course a more
          real feel, like you are the main character in your game and adventure
          in this new digital world.
        </p>
        <Button>Get it Now</Button>
      </div>
    </section>
  );
};

export default ExperienceSection;
