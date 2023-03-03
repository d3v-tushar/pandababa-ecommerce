import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSection = () => {
  return (
      <Marquee className="text-white z-0" speed={60} gradient={false}>
       <h3 className="text-[28px] italic uppercase">Pay only for <span className="font-bold">your loving electronics</span></h3>
      </Marquee>
  );
};

export default MarqueeSection;
