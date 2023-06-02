import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/scrollbar";
import { FreeMode, Navigation, Thumbs, Scrollbar } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProductDetails = ({ data }) => {
  // const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      {" "}
      {data.map((item, index) => {
        return (
          <>
            <div className="bg-white p-5">
              <div className="hidden lg:block">
                <Swiper
                  key={index}
                  style={{
                    "--swiper-navigation-color": "#059669",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="max-w-md max-h-96"
                >
                  <SwiperSlide>
                    <LazyLoadImage
                      src={item.images[0]}
                      alt={item.title}
                      effect="blur"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <LazyLoadImage
                      src={item.images[1]}
                      alt={item.title}
                      effect="blur"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <LazyLoadImage
                      src={item.images[2]}
                      alt={item.title}
                      effect="blur"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <LazyLoadImage
                      src={item.images[3]}
                      alt={item.title}
                      effect="blur"
                    />
                  </SwiperSlide>
                </Swiper>

                <Swiper
                  // onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="max-w-md shadow-lg bg-white"
                >
                  <SwiperSlide>
                    <LazyLoadImage
                      src={item.images[0]}
                      alt={item.title}
                      effect="blur"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <LazyLoadImage
                      src={item.images[1]}
                      alt={item.title}
                      effect="blur"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <LazyLoadImage
                      src={item.images[2]}
                      alt={item.title}
                      effect="blur"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <LazyLoadImage
                      src={item.images[3]}
                      alt={item.title}
                      effect="blur"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="lg:hidden block">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#030712",
                  }}
                  slidesPerView={"auto"}
                  spaceBetween={10}
                  scrollbar={{
                    hide: true,
                  }}
                  navigation={true}
                  modules={[Scrollbar, Navigation]}
                  className="max-w-md my-swiper shadow-lg bg-white"
                >
                  <SwiperSlide className="bg-slate-100 rounded-md p-5 max-w-[250px]">
                    <LazyLoadImage
                      src={item.images[0]}
                      alt={item.title}
                      effect="blur"
                      className="rounded-md"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="bg-slate-100 rounded-md p-5 max-w-[250px]">
                    <LazyLoadImage
                      src={item.images[1]}
                      alt={item.title}
                      effect="blur"
                      className="rounded-md"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="bg-slate-100 rounded-md p-5 max-w-[250px]">
                    <LazyLoadImage
                      src={item.images[2]}
                      alt={item.title}
                      effect="blur"
                      className="rounded-md"
                    />
                  </SwiperSlide>
                  <SwiperSlide className="bg-slate-100 rounded-md p-5 max-w-[250px]">
                    <LazyLoadImage
                      src={item.images[3]}
                      alt={item.title}
                      effect="blur"
                      className="rounded-md"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductDetails;
