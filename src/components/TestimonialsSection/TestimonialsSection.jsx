import Testimonial from "./Testimonial/Testimonial";
import testimonialsData from "./testimonialsData";
import { Swiper, SwiperSlide } from "swiper/react";

import s from "./TestimonialsSection.module.scss";
import "swiper/css";

const TestimonialsSection = () => {
  return (
    <section className={`container ${s.section}`}>
      <h2 className={s.section_title}>What our clients say</h2>
      <p className={s.section_desc}>
        See what our customers say about us. It really matters for us. How good
        or bad we will make it for evaluation to make Ehyal Live better.
      </p>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
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
