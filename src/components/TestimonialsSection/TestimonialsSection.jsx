import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

import Testimonial from "./Testimonial/Testimonial";

import userImg1 from "../../assets/images/userImg1.jpg";
import userImg2 from "../../assets/images/userImg2.jpg";
import userImg3 from "../../assets/images/userImg3.jpg";

import s from "./TestimonialsSection.module.scss";
import "swiper/css";

const testimonialsData = [
  {
    name: "Denny Hilguston",
    username: "@denny.hill",
    testimonial:
      "I know in real-time where the money is spent,and I don’t have to lend out the company’s credit card anymore. What a relief!",
    img: userImg1,
    id: 1,
  },
  {
    name: "Vani Pandey",
    username: "@vani.pandey",
    testimonial:
      "VISUALS are much better. The improvements in optics and resolution and much more than a modern console generation leap.",
    img: userImg2,
    id: 2,
  },
  {
    name: "milly Singh",
    username: "@milly.singh",
    testimonial:
      "I can actually see the improvement in the graphics, not having the external sensors is a big plus.",
    img: userImg3,
    id: 3,
  },
  {
    name: "Sophia Martinez",
    username: "@sophia.martinez",
    testimonial:
      "This tool has revolutionized how I manage my tasks. Simple, efficient, and a real lifesaver!",
    img: userImg1,
    id: 4,
  },
  {
    name: "Lila Anderson",
    username: "@lila.anderson",
    testimonial:
      "The level of detail and clarity is unmatched. It’s truly a game-changer for my daily workflow.",
    img: userImg2,
    id: 5,
  },
  {
    name: "Ava Thompson",
    username: "@ava.thompson",
    testimonial:
      "The ease of use and incredible support make this product stand out. Highly recommended!",
    img: userImg3,
    id: 6,
  },
  {
    name: "Emily Davis",
    username: "@emily.davis",
    testimonial:
      "The integration capabilities have saved me countless hours. I couldn’t imagine working without it now.",
    img: userImg1,
    id: 7,
  },
  {
    name: "Olivia Brown",
    username: "@olivia.brown",
    testimonial:
      "The attention to detail in the design is impressive. It feels like it was tailor-made for my needs!",
    img: userImg2,
    id: 8,
  },
];

const TestimonialsSection = () => {
  return (
    <section className={`container ${s.section}`}>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.8 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <h2 className={s.section_title}>What our clients say</h2>
        <p className={s.section_desc}>
          See what our customers say about us. It really matters for us. How
          good or bad we will make it for evaluation to make Ehyal Live better.
        </p>
      </motion.div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        loopedSlides={testimonialsData.length}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        freeMode={true}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {testimonialsData.map((el) => (
          <SwiperSlide key={el.id}>
            <Testimonial
              testimonial={el.testimonial}
              img={el.img}
              name={el.name}
              username={el.username}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialsSection;
