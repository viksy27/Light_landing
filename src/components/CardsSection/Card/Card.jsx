import s from "./Card.module.scss";

const Card = ({ img, title, desc }) => {
  return (
    <div className={s.card}>
      <img src={`./images/${img}.png`} className={s.card_image} alt={img} />
      <div className={s.card_content}>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;
