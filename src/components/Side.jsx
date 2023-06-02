import React from "react";
import { Link } from "react-router-dom";

const Side = ({ data }) => {
  return (
    <div className="fixed w-52 h-full z-[1] top-0 left-0 bg-gray-900 text-white">
      <div>
        <h2 className="text-2xl font-semibold">categories</h2>
      </div>
      <ul className="">
        {data.map((idx) => (
          <li className="my-5 mx-0" key={idx}>
            <Link className="py-0 px-8">
            {idx}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Side;
