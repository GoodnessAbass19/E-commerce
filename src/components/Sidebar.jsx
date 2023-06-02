import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <aside className="">
      <div
        onClick={() => setOpen(!open)}
        className={`z-[999] md:text-4xl text-2xl font-semibold items-center ${
          open ? "text-white" : "text-white"
        }`}
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>
      <div
        className={`absolute h-full  duration-300 z-[1000] w-[300px] overflow-y-auto p-5  bg-white text-black ${
          open ? "left-0" : "left-[-100%]"
        }`}
      >
        <div className="text-center text-xl font-serif font-semibold py-3">
          <h2>All Categories</h2>
        </div>
        <ul className="divide-y p-2 text-xl  font-normal flex flex-col gap-5  overflow-hidden">
          {data.map((index, idx) => (
            <li onClick={() => setOpen(!open)} key={idx}>
              <Link to={`/category/${index}`}>{index}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
