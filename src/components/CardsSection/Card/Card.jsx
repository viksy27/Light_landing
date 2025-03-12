import { motion } from "framer-motion";

import s from "./Card.module.scss";

const Card = ({ img, title, desc, i }) => {
  return (
    <div className={s.card}>
      <motion.img
        src={img}
        className={s.card_image}
        alt={img}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, delay: i * 0.2 }}
      />
      <div className={s.card_content}>
        <motion.h4
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {title}
        </motion.h4>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {desc}
        </motion.p>
      </div>
    </div>
  );
};

export default Card;
