import Card from "./Card/Card";

import crv4 from "../../assets/images/cvr4.webp";
import cvr5 from "../../assets/images/cvr5.webp";
import cvr6 from "../../assets/images/cvr6.webp";
import cvr7 from "../../assets/images/cvr7.webp";

import "../../assets/styles/_global.scss";
import s from "./CardsSection.module.scss";

const cardsData = [
  {
    img: crv4,
    title: "Metaverse",
    desc: "A Network of 3D virtual worlds focused on social connection.",
    id: "1",
  },
  {
    img: cvr5,
    title: "AIoT",
    desc: "AI and IoT are both emerging innovative technologies with a lot of potentials.",
    id: "2",
  },
  {
    img: cvr6,
    title: "HoloLens",
    desc: "HoloLens display information, blend with the real world , or even simulate a virtual world.",
    id: "3",
  },
  {
    img: cvr7,
    title: "TPCASTT",
    desc: "Method is great to start students reading and inferring with little assistance from the instructor.",
    id: "4",
  },
];

const CardsSection = () => {
  return (
    <section className={`container ${s.cards}`} id="headsets">
      <h2 className={s.cards_title}>Mixed Reality Headsets</h2>

      <div className={s.cards_wrapper}>
        {cardsData.map((card, i) => (
          <Card
            img={card.img}
            title={card.title}
            desc={card.desc}
            key={card.id}
            i={i}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
