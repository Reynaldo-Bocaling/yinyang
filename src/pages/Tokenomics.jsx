import React from "react";
import { tokenomics } from "../constant";

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative w-full">
      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center py-12 px-12 z-30 mb-12">
        <h1 className="text-stroke-lg text-shadow-md font-title text-6xl md:text-8xl text-yellow-10 z-30  mb-12 whitespace-nowrap">
          TOKENOMICS
        </h1>
        <ul className="flex flex-col md:flex-row items-center gap-5 w-full">
          {tokenomics.map((item, index) => (
            <li
              key={index}
              className="w-full  flex flex-col items-center justify-center gap-5 bg-[#ff3a3a] py-4 rounded-3xl"
            >
              <h1 className="text-stroke-sm text-shadow-sm font-title text-6xl text-red-100 z-30 whitespace-nowrap ">
                {item.value}
              </h1>
              <h1 className="text-stroke-sm text-shadow-sm font-title text-2xl text-white z-30 whitespace-nowrap ">
                {item.name}
              </h1>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tokenomics;
