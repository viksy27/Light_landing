import hearts from "../../assets/images/icons/hearts.svg";
import v1 from "../../assets/images/icons/valuesPeaceSign.svg";
import v2 from "../../assets/images/icons/valuesHandshake.svg";
import v3 from "../../assets/images/icons/valuesCheck.svg";
import v4 from "../../assets/images/icons/valuesIdea.svg";

import s from "./ValuesSection.module.scss";

const ValuesSection = () => {
  return (
    <section className={`container + ${s.culture}`}>
      <div className={s.culture_content}>
        <h2 className={s.culture_title}>
          Our company values culture
          <span>
            <img src={hearts} className={s.culture_hearts} />
          </span>
        </h2>

        <p className={s.culture_desc}>
          We specialize in creating visual identities for products and branda in
          your company.
        </p>
      </div>

      <div className={s.culture_icons}>
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
      </div>
    </section>
  );
};

export default ValuesSection;
