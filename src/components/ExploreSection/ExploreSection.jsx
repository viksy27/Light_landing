import Button from "../Button/Button";
import arrowTitle from "../../assets/images/icons/exploreArrow.svg";
import arrowBtn from "../../assets/images/icons/exploreBtnArrow.svg";
import hands from "../../assets/images/hands.png";

import s from "./ExploreSection.module.scss";

const ExploreSection = () => {
  return (
    <section className={`container + ${s.explore}`}>
      <div className={s.explore_content}>
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
      </div>

      <div className={s.explore_img_wrapper}>
        <img src={hands} className={s.explore_img} />
      </div>
    </section>
  );
};

export default ExploreSection;
