import { motion } from "framer-motion";

import hearts from "../../assets/images/icons/hearts.svg";
import v1 from "../../assets/images/icons/valuesPeaceSign.svg";
import v2 from "../../assets/images/icons/valuesHandshake.svg";
import v3 from "../../assets/images/icons/valuesCheck.svg";
import v4 from "../../assets/images/icons/valuesIdea.svg";

import s from "./ValuesSection.module.scss";

const ValuesSection = () => {
  return (
    <section className={`container + ${s.culture}`} id="comrany">
      <div className={s.culture_content}>
        <motion.h2
          className={s.culture_title}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Our company values culture
          <span>
            <img src={hearts} className={s.culture_hearts} />
          </span>
        </motion.h2>

        <motion.p
          className={s.culture_desc}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          We specialize in creating visual identities for products and branda in
          your company.
        </motion.p>
      </div>

      <motion.div
        className={s.culture_icons}
        initial={{ opacity: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={s.culture_icons_wrapper}>
          <img src={v1} className={s.culture_icons_icon} />
          <p className={s.culture_icons_desc}>Be Sincere</p>
        </div>
        <div className={s.culture_icons_wrapper}>
          <img src={v2} className={s.culture_icons_icon} />
          <p className={s.culture_icons_desc}>Stronger together</p>
        </div>
        <div className={s.culture_icons_wrapper}>
          <img src={v3} className={s.culture_icons_icon} />
          <p className={s.culture_icons_desc}>Keep it simple</p>
        </div>
        <div className={s.culture_icons_wrapper}>
          <img src={v4} className={s.culture_icons_icon} />
          <p className={s.culture_icons_desc}>Take intelligent risks</p>
        </div>
      </motion.div>
    </section>
  );
};

export default ValuesSection;
