import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Nav from "../components/Nav";
import Breadcrumbs from "../components/Breadcrumbs";
import Sidebar from "../components/Sidebar";
import Side from "../components/Side";

const RootLayouts = () => {
  const data = useLoaderData();
  return (
    <>
      <div>
        <Nav data={data} />
        <Breadcrumbs />
      </div>
      <main className="mx-auto">
        <Outlet />
      </main>
    </>
  );
};

export default RootLayouts;

export const CatogoryLoader = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
