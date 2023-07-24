import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { ShopContext } from "../context/Shop-Context";

const Nav = ({ data }) => {
  const [query, setQuery] = useState("");
  const { cartItem } = useContext(ShopContext);
  const quantity = cartItem;

  return (
    <>
      <nav className="bg-black/80 text-white overflow-hidden">
        {" "}
        <div className=" flex md:flex-row flex-col gap-5 justify-between items-center p-10">
          <div className="flex justify-around items-center gap-5">
            <Sidebar data={data} />
            <Link to={"/"}>
              <h2>
                <span className="md:text-3xl text-xl">
                  <ion-icon name="bag-handle"></ion-icon>
                </span>{" "}
                <span className="md:text-4xl text-xl font-semibold font-sans uppercase">
                  Shopify
                </span>
              </h2>
            </Link>
          </div>
          <div className="max-w-2xl grow text-black flex justify-between items-center gap-5">
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search here"
              className="w-full p-3 rounded-md"
            />
            <Link
              to={`/search/${query}`}
              className="text-white text-2xl bg-blue-500 px-5 p-1.5 rounded-md"
            >
              <ion-icon name="search"></ion-icon>
            </Link>
          </div>

          <div>
            <Link to={`/cart`} className="text-white text-4xl">
              <ion-icon name="cart"></ion-icon>
            </Link>
            {/* <h2>{quantity >= 1 ? <p>{quantity}</p> : <p>0</p>}</h2> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
