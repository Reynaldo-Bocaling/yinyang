import React from "react";

const About = () => {
  return (
    <section id="about" className="relative w-full">
      <div className="max-w-7xl mx-auto flex flex-col  items-center justify-center px-5  relative z-20 py-20">
        {" "}
        <h1 className="text-stroke-lg text-shadow-md font-title text-4xl md:text-7xl text-yellow-10 z-30 whitespace-nowrap">
          ABOUT YIN YANG
        </h1>
        <p className=" text-white text-2xl font-extrabold tracking-wider mt-7 text-center md:text-left">
          In Chinese thought, YinYang represents two great opposites but
          complementary forces at work in the Cosmos.
        </p>
        <button className="btn text-xl font-title text-white py-3 px-12 rounded-2xl mt-7">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default About;
