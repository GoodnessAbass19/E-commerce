import Slide_1 from "../../assets/slide-1.png";
import Slide_2 from "../../assets/slide-2.png";
import Slide_3 from "../../assets/slide-3.jpg";
import Slide_4 from "../../assets/slide-4.jpg";
import Slide_5 from "../../assets/slide-5.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Pagination } from "swiper";

const Hero = () => {
  const images = [
    { img: Slide_1 },
    { img: Slide_2 },
    { img: Slide_3 },
    { img: Slide_4 },
    { img: Slide_5 },
  ];
  return (
    <>
      <div className="md:max-w-screen-md rounded-lg mx-auto my-10">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Pagination, Autoplay]}
          className="w-full rounded-lg"
        >
          {images.map((slide, i) => (
            <SwiperSlide key={i}>
              <img src={slide.img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
