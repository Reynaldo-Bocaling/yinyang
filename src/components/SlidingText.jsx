import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="w-full py-5 overflow-hidden bg-red-500s">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <p
            key={i}
            className="text-red-10 text-xl md:text- font-title font-semibold px-12 z-10"
          >
            BUY NOW
          </p>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
