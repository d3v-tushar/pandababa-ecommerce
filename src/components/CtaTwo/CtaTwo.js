import React from "react";
import { IoArrowForwardSharp } from "react-icons/io5";
import skiCTA from "../../assets/banner/banner-18.jpg";
import sunglassCTA from "../../assets/banner/banner-19.jpg";
import bagsCTA from "../../assets/banner/banner-20.jpg";

const CtaTwo = () => {
  return (
    <section className="grid grid-cols-3 gap-6 my-8">
      <div className="relative overflow-hidden">
        <img src={skiCTA} alt="" />
        <div className="absolute top-0 left-8 text-left h-full flex flex-col justify-center">
          <h3 className="text-sm font-light">NEW ARRIVALS</h3>
          <h1 className="my-4 text-xl font-semibold">
            SKI CLOTHES SALE <br /> <span className="text-red-500">Up to 35% Off</span>
          </h1>
          <a className="text-sm font-semibold" href="/market-2#">
            <p className="flex items-center text-left">
              <span className="text-md  link link-underline link-underline-black text-black">
                Shop Now
              </span>
              <span className="ml-2 mt-1">
                <IoArrowForwardSharp />
              </span>
            </p>
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img src={sunglassCTA} alt="" />
        <div className="absolute top-0 left-8 text-left h-full flex flex-col justify-center text-white">
          <h3 className="text-sm font-light">BEST SELLER</h3>
          <h1 className="my-4 text-xl font-semibold">
          TRENDING WOMEN <br /> <span className="text-normal">SUNGLASSES</span>
          </h1>
          <a className="text-sm font-semibold" href="/market-2#">
            <p className="flex items-center text-left">
              <span className="text-md  link link-underline link-underline-black text-white">
                Shop Now
              </span>
              <span className="ml-2 mt-1">
                <IoArrowForwardSharp />
              </span>
            </p>
          </a>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <img src={bagsCTA} alt="" />
        <div className="absolute top-0 left-8 text-left h-full flex flex-col justify-center">
          <h3 className="text-sm font-light">NEW ARRIVALS</h3>
          <h1 className="my-4 text-xl font-semibold">
          TRENDING WOMEN <br /> <span className="text-normal">SUNGLASSES</span>
          </h1>
          <a className="text-sm font-semibold" href="/market-2#">
            <p className="flex items-center text-left">
              <span className="text-md  link link-underline link-underline-black text-black">
                Shop Now
              </span>
              <span className="ml-2 mt-1">
                <IoArrowForwardSharp />
              </span>
            </p>
          </a>
        </div>
      </div>
      
    </section>
  );
};

export default CtaTwo;
