import { motion } from "framer-motion";

import Button from "../Button/Button";
import arrowTitle from "../../assets/images/icons/exploreArrow.svg";
import arrowBtn from "../../assets/images/icons/exploreBtnArrow.svg";
import hands from "../../assets/images/hands.png";

import s from "./ExploreSection.module.scss";

const ExploreSection = () => {
  return (
    <section className={`container + ${s.explore}`}>
      <motion.div
        className={s.explore_content}
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className={s.explore_title}>
          Explore product in new way
          <span>
            <img src={arrowTitle} className={s.explore_arrow} />
          </span>
        </h2>

        <p className={s.explore_desc}>
          We specialize in creating visual identities for products and branda in
          your company.
        </p>

        <div className={s.explore_input_wrapper}>
          <input className={s.explore_input} placeholder="Your Email" />

          <Button>
            Start <img src={arrowBtn} className={s.explore_arrow_btn} />
          </Button>
        </div>
      </motion.div>

      <motion.div
        className={s.explore_img_wrapper}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
      >
        <img src={hands} className={s.explore_img} />
      </motion.div>
    </section>
  );
};

export default ExploreSection;
