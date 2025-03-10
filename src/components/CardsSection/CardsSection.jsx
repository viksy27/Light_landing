import Card from "./Card/Card";
import cardsData from "./cardsData";

import "../../assets/styles/_global.scss";
import s from "./CardsSection.module.scss";

const CardsSection = () => {
  return (
    <section className={`container ${s.cards}`}>
      <h2 className={s.cards_title}>Mixed Reality Headsets</h2>

      <div className={s.cards_wrapper}>
        {cardsData.map((card) => (
          <Card
            img={card.img}
            title={card.title}
            desc={card.desc}
            key={card.id}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
