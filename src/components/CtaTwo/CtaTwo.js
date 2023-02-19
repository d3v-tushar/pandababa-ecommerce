import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import skiCloths from '../../assets/banner/banner-18.jpg';

const CtaTwo = () => {
  return (
    <section className="grid grid-cols-3">
      <div className="relative">
        <img src={skiCloths} alt="" />
        <div className="absolute top-0 left-8 text-left">
          <h3>NEW ARRIVALS</h3>
          <h1 className="my-4">SKI CLOTHES SALE <br /> Up to 35% Off</h1>
          <a className="text-sm font-semibold" href="/market-2#">
            <p className="flex items-center text-left">
              <span className="text-md  link link-underline link-underline-black text-black">
                Browse All
              </span>
              <span className="mt-3 mb-3 mx-2">
                <AiOutlineArrowRight />
              </span>
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaTwo;
