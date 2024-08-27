import React from "react";
import { socials } from "../constant";
import animationLogo from "../assets/json-animations/logo.json";
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <section id="contact" className="relative">
      <div className="max-w-7xl mx-auto flex items-end justify-between pt-12">
        <div className="flex-1 flex flex-col items-center justify-center gap-5  pb-12 px-2">
          <Lottie
            animationData={animationLogo}
            className="w-[20rem] relative  z-20"
          />
          <h1 className="text-stroke-md text-shadow-md font-title text-6xl text-yellow-10 z-30 whitespace-nowrap">
            YIN YANG
          </h1>
          <h1 className="relative  font-title text-3xl text-black whitespace-nowrap  z-30">
            Connect With:
          </h1>
          <div className="relative flex items-center justify-center gap-2 md:gap-9 w-full mt-7 z-20">
            {socials.map((item, index) => (
              <a
                href={item.url}
                key={index}
                className="w-16 h-16 relative flex items-center justify-center  bg-[#fc9191] rounded-full"
              >
                <img
                  src={item.img}
                  className="w-12 h-12 z-30"
                  alt="link icons"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
