import s from "./Testimonial.module.scss";
import yellowStar from "../../../assets/images/icons/yellowStar.svg";
import grayStar from "../../../assets/images/icons/grayStar.svg";

const Testimonial = ({ testimonial, img, name, username }) => {
  return (
    <div className={s.card}>
      <div>
        <div className={s.card_stars}>
          <img src={yellowStar} />
          <img src={yellowStar} />
          <img src={yellowStar} />
          <img src={yellowStar} />
          <img src={grayStar} />
        </div>

        <p className={s.card_testimonial}>{testimonial}</p>
      </div>

      <div className={s.card_userdata}>
        <img className={s.card_photo} src={img} width={64} alt={img} />
        <div>
          <p className={s.card_name}>{name}</p>
          <p className={s.card_username}>{username}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
