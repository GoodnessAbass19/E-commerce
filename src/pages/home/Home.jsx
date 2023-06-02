import React from "react";
import Product from "./Product";
import { useLoaderData } from "react-router-dom";
import Hero from "./Hero";

const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <div>
        <Hero />
        <Product data={data} />
      </div>
    </>
  );
};

export default Home;

export const ProductLoader = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=0");
    const data = await response.json();
    if (data) {
      return data.products;
    }
  } catch (err) {
    console.log(err);
  }
};

