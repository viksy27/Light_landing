import "../../assets/styles/_global.scss";
import s from "./VideoSection.module.scss";

const VideoSection = () => {
  return (
    <section>
      <div className={s.video_wrapper}>
        <div className={s.video}>
          <h3 className={s.video_title}>
            Awesome experiences with virtual reality world
          </h3>

          <div className={s.video_preview}>
            <button className={s.video_btn}>&#9654;</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
