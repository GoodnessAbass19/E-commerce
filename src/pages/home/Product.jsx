import React from "react";
import { Link } from "react-router-dom";
import MoreProduct from "./MoreProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Product = ({ data }) => {
  return (
    <>
      {" "}
      <div className="m-5 overflow-hidden">
        <div className="bg-slate-200 border-l-8 border-green-400">
          <h2 className="p-5 text-xl font-semibold capitalize">
            Top selling items
          </h2>
        </div>
        <div className="lg:block hidden">
          <Swiper
            style={{
              "--swiper-navigation-color": "#030712",
            }}
            spaceBetween={10}
            navigation={true}
            slidesPerView={6}
            // loop={true}
            // autoplay={{ delay: 2000 }}
            modules={[Navigation, Autoplay]}
            className="justify-around items-center gap-5 py-5  md:flex flex-wrap grid grid-cols-2"
          >
            {data
              .filter((map) => map.discountPercentage > 16)
              .map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="max-w-[300px] text-center rounded-md justify-center bg-slate-200 shadow-lg relative p-3"
                >
                  <Link to={`product/${item.id}`}>
                    <LazyLoadImage
                      src={item.images[0]}
                      alt={item.title}
                      effect="blur"
                      className="w-fit h-fit bg-contain p-2 aspect-square"
                    />
                    <p className="text-center font-semibold text-base">
                      {item.title}
                    </p>
                    <p className="top-2 right-2 p-2 rounded-md absolute bg-orange-200">
                      {" "}
                      -{item.discountPercentage}%
                    </p>
                    <p>${item.price}</p>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
        <div className="block lg:hidden">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            slidesPerView={2}
            autoplay={{ delay: 2000 }}
            modules={[Navigation, Autoplay]}
            className="justify-around items-center gap-5 py-5  md:flex flex-wrap grid grid-cols-2"
          >
            {data
              .filter((map) => map.discountPercentage > 16)
              .map((item) => (
                <SwiperSlide
                  key={item.id}
                  className="max-w-xs text-center rounded-md justify-center bg-slate-200 shadow-lg relative p-3"
                >
                  <Link to={`product/${item.id}`}>
                    <LazyLoadImage
                      src={item.images[0]}
                      alt={item.title}
                      effect="blur"
                      className="w-fit h-fit bg-contain p-2 aspect-square"
                    />
                    <p className="text-center font-semibold text-base">
                      {item.title}
                    </p>
                    <p className="top-2 right-2 p-2 rounded-md absolute bg-orange-200">
                      {" "}
                      -{item.discountPercentage}%
                    </p>
                    <p>${item.price}</p>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
      <div className="m-5  overflow-hidden">
        <div className="bg-slate-200 border-l-8 border-green-400">
          <h2 className="p-5 text-xl font-semibold">See Our Products</h2>
        </div>
        <div className="md:flex flex-wrap grid grid-cols-2 gap-5  justify-around items-center py-5">
          {data.slice(4, 22).map((item) => (
            <Link
              to={`product/${item.id}`}
              key={item.id}
              className="max-w-[280px] text-center rounded-md justify-center bg-slate-200 shadow-lg relative p-3"
            >
              <LazyLoadImage
                src={item.images[0]}
                alt={item.title}
                effect="blur"
                className="w-fit h-fit bg-contain p-5 aspect-square"
              />
              <p className="text-center font-semibold text-lg">{item.title}</p>
              <p className="top-2 right-2 p-2 rounded-md absolute bg-orange-200">
                {" "}
                -{item.discountPercentage}%
              </p>
              <p>${item.price}</p>
            </Link>
          ))}
        </div>
      </div>
      <MoreProduct data={data} />
    </>
  );
};

export default Product;
