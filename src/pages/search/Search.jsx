import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const Search = () => {
  const { search } = useParams();
  const data = useLoaderData();

  return (
    <div>
      <div className="m-5 overflow-hidden">
        <div className="bg-slate-200 border-l-8 border-green-400">
          {/* <h2 className="p-5 text-xl font-semibold">{cart}</h2> */}
        </div>
        <div className="justify-around items-center gap-5 py-5 md:flex flex-wrap grid grid-cols-2">
          {data.map((item) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="max-w-[280px] text-center rounded-md justify-center bg-slate-200 shadow-lg relative p-3"
            >
              <img
                src={item.images[0]}
                alt=""
                className="w-fit h-fit bg-contain p-2 aspect-square"
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
    </div>
  );
};

export default Search;

export const SearchLoader = async ({ params }) => {
  const { search } = params;
  try {
    const res = await fetch(
      `https://dummyjson.com/products/search?q=${search}`
    );
    const data = await res.json();
    return data.products;
  } catch (err) {
    console.log(err);
  }
};
