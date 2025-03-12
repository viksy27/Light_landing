import { motion } from "framer-motion";

import "../../assets/styles/_global.scss";
import s from "./VideoSection.module.scss";

const VideoSection = () => {
  return (
    <motion.div
      className={`${s.video_wrapper}`}
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={s.video}>
        <h3 className={s.video_title}>
          Awesome experiences with virtual reality world
        </h3>

        <div className={s.video_preview}>
          <button className={s.video_btn}>&#9654;</button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoSection;
