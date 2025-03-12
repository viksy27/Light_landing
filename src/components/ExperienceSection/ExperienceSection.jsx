import { motion } from "framer-motion";

import Button from "../Button/Button";
import w from "../../assets/images/cvr2.webp";
import m from "../../assets/images/cvr3.webp";

import "../../assets/styles/_global.scss";
import s from "./ExperienceSection.module.scss";

const ExperienceSection = () => {
  return (
    <section className={`container ${s.experience_section}`}>
      <div className={s.gallery}>
        <motion.div
          className={`${s.gallery_card} ${s.gallery_card_left}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={s.gallery_card_inner}></div>
          <img
            className={s.gallery_card_inner_img}
            src={w}
            alt="A girl in virtual reality glasses"
          />
        </motion.div>

        <motion.div
          className={`${s.gallery_card} ${s.gallery_card_right}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={s.gallery_card_inner}></div>
          <img
            className={s.gallery_card_inner_img}
            src={m}
            alt="A man in virtual reality glasses"
          />
        </motion.div>
      </div>

      <motion.div
        className={s.content}
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={s.content_title}>New Experience In Playing Game</h2>
        <p className={s.content_desc}>
          You can try playing the game with a new style and of course a more
          real feel, like you are the main character in your game and adventure
          in this new digital world.
        </p>
        <Button>Get it Now</Button>
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
