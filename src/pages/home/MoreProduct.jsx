import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MoreProduct = ({ data }) => {
  return (
    <>
      <div className="m-5 overflow-hidden">
        <div className="bg-slate-200 border-l-8 border-green-400">
          <h2 className="p-5 text-xl font-semibold">Smartphone</h2>
        </div>
        <div className="justify-around items-center gap-5 py-5 md:flex flex-wrap grid grid-cols-2">
          {data
            .filter((map) => map.category.toLowerCase().includes("smartphone"))
            .map((item) => (
              <Link
                to={`product/${item.id}`}
                key={item.id}
                className="max-w-[300px] text-center rounded-md justify-center bg-slate-200 shadow-lg relative p-3"
              >
                <LazyLoadImage
                  src={item.images[0]}
                  alt={item.title}
                  effect="blur"
                  className="w-fit h-fit bg-contain p-2 aspect-square"
                />
                <p className="text-center font-semibold text-lg">
                  {item.title}
                </p>
                <p className="top-2 right-2 p-2 rounded-md absolute bg-orange-200">
                  {" "}
                  -{item.discountPercentage}%
                </p>
                <p>${item.price}</p>
              </Link>
            ))}
        </div>
      </div>
      <div className="m-5 overflow-hidden">
        <div className="bg-slate-200 border-l-8 border-green-400">
          <h2 className="p-5 text-xl font-semibold">Furnitures</h2>
        </div>
        <div className="justify-around items-center gap-5 py-5 md:flex flex-wrap grid grid-cols-2">
          {data
            .filter((map) => map.category.toLowerCase().includes("furniture"))
            .map((item) => (
              <Link
                to={`product/${item.id}`}
                key={item.id}
                className="max-w-[300px] text-center rounded-md justify-center bg-slate-200 shadow-lg relative p-3"
              >
                <LazyLoadImage
                  src={item.images[0]}
                  alt={item.title}
                  effect="blur"
                  className="w-fit h-fit bg-contain p-2 aspect-square"
                />
                <p className="text-center font-semibold text-lg">
                  {item.title}
                </p>
                <p className="top-2 right-2 p-2 rounded-md absolute bg-orange-200">
                  {" "}
                  -{item.discountPercentage}%
                </p>
                <p>${item.price}</p>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default MoreProduct;
