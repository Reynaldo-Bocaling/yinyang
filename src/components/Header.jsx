import React, { useState } from "react";
import Lottie from "lottie-react";
import { navlinks, socials } from "../constant";
import { CgMenuRight } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import animationLogo from "../assets/json-animations/logo.json";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="relative w-full z-50 bg-[#5f1515]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 pr-8 blur-effects  bg-[#671919]">
        <div className="  flex items-center">
          <Lottie animationData={animationLogo} className="w-28" />
          <h1 className="text-stroke-sm text-shadow-sm font-title text-4xl text-yellow-10 -ml-5">
            YIN YANG
          </h1>
        </div>
        <ul className="hidden md:flex items-center gap-7">
          {navlinks.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                className="text-black text-2xl font-extralight font-title tracking-wider"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="https://www.dextools.io/app/en/tron/pair-explorer/TPDGkr22Ug9NMkigWbt4hdmX7kuJojDN7G?t=1724779049658"
          className="hidden md:flex btn text-xl font-title text-black py-3 px-12 rounded-2xl"
        >
          Buy Now
        </a>
        <button onClick={handleMenu} className="md:hidden">
          <CgMenuRight size={40} className="text-red-10 " />
        </button>
      </nav>

      {isOpen && (
        <nav className="shadow-effect fixed left-0 bottom-0 w-full h-full  z-[999] blur-effect-dark py-5 md:hidden flex flex-col items-center justify-start duration-300 transition-all border-4 border-red-10 rounded-3xl overflow-hidden">
          <div className="flex items-center justify-between   mb-20 w-full blur-effects rounded-full bg-[#fd6f6f] py-4 pr-7">
            <div className="  flex items-center">
              <Lottie animationData={animationLogo} className="w-28" />
              <h1 className="text-stroke-sm text-shadow-sm font-title text-4xl text-yellow-10 -ml-5">
                YIN YANG
              </h1>
            </div>
            <button onClick={handleMenu} className="md:hidden ">
              <FaTimes size={40} className="text-red-10 " />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-center gap-12">
            {navlinks.map((item, index) => (
              <li key={index} onClick={() => setIsOpen(false)}>
                <a
                  href={item.url}
                  className="text-black text-3xl font-extralight font-title tracking-wider"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <a
              href="https://www.dextools.io/app/en/tron/pair-explorer/TPDGkr22Ug9NMkigWbt4hdmX7kuJojDN7G?t=1724779049658"
              className="btn text-xl font-title text-red-200 py-4 px-20 rounded-2xl mt-12"
            >
              Buy Now
            </a>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
