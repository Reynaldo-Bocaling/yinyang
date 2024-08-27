import React from "react";
import { socials } from "../constant";
import DottedBackground from "../components/DottedBackground";
import Header from "../components/Header";
import { IoArrowDown } from "react-icons/io5";
import SlidingText from "../components/SlidingText";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full z-40">
      <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-end gap-5  pb-9 md:pb-0 h-[37rem]">
        <div className="flex flex-col items-center justify-center gap-5  z-20 ">
          <h1 className="text-stroke-lg text-shadow-lg font-title text-8xl md:text-14xl text-yellow-10 z-30 whitespace-nowrap">
            YIN YANG
          </h1>
          <h1
            className="text-stroke-lg text-shadow-lg font-title text-3xl md:text-4xl text-white z-30 md:mb-20
          text-center"
          >
            The balance between Chads and Jeets.
          </h1>
          <h1 className="text-stroke-sm text-shadow-md font-title text-3xl text-yellow-10 z-30 mt-7">
            CONTRACT ADDRESS
          </h1>
          <p></p>
          <div className="flex items-center gap-3 bg-red-10 py-3 pl-4 pr-2 rounded-full box-shadow-sm border border-black -mt-7">
            <p className="text-xs md:text-xl text-white normal font-bold tracking-wider">
              TXywC2vJLzWahrij7n7Vu9MEsos6yhZviU
            </p>
            <button className="btn text-sm md:text-lg font-title text-black py-2 px-5 rounded-full">
              COPY
            </button>
          </div>
        </div>
      </div>{" "}
      <SlidingText />
      <DottedBackground />
    </section>
  );
};

export default Hero;
