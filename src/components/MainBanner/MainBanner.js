import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import bannerimg from "../../assets/banner/banner-15.jpg";
import bannerimg2 from "../../assets/banner/banner-16.jpg";
import bannerimg3 from "../../assets/banner/banner-17.jpg";

const MainBanner = () => {
  return (
    <section className="mt-5 mb-10">
      <div className="grid grid-cols-4">
        <div className="col-span-3 rounded-sm shadow-sm bg-inherit relative">
          <img className="" src={bannerimg} alt="" />
          <div className="absolute top-[25%] left-20 uppercase text-left text-gray-900">
            <h4 className="text-3xl font-normal mb-1">Lifestyle collection</h4>
            <h1 className="text-6xl font-bold mb-3">Men</h1>
            <h4 className="text-4xl font-semibold">
              SALE UP TO <span className="text-red-500">30% OFF</span>
            </h4>
            <p className="text-lg normal-case">
              Get Free Shipping on orders over $99.00
            </p>
            <button
              className="bg-gray-900 font-semibold text-white text-xl px-8 py-3 my-3"
              tabindex="0"
              type="button"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-1 gap-y-4 items-stretch pl-4">
          <div className="relative w-full flex items-stretch shadow-sm">
            <img className="w-fit" src={bannerimg3} alt="" />
            <div className="absolute top-[25%] left-8 text-left">
              <p className="text-sm font-normal">NEW ARRIVALS</p>
              <h4 className="text-xl font-semibold">
                SUMMER
                <br />
                SALE 20% OFF
              </h4>
              <a className="text-sm font-semibold" href="/market-2#">
                <p className="grid grid-cols-2 justify-center items-center">
                  <span>Shop Now</span>
                  <span className="mt-3 mb-2 ml-2">
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </a>
            </div>
          </div>

          <div className="relative w-full flex items-stretch shadow-sm">
            <img className="w-full" src={bannerimg2} alt="" />
            <div className="absolute top-[25%] left-8 text-left">
              <p className="text-sm font-normal">GAMING 4K</p>
              <h4 className="text-xl font-semibold">
                DESKTOPS &
                <br />
                LAPTOPS
              </h4>
              <a className="text-sm font-semibold" href="/market-2#">
                <p className="grid grid-cols-2 justify-center items-center">
                  <span>Shop Now</span>
                  <span className="mt-3 mb-2 ml-2">
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
