import React from 'react';
import bannerimg from "../../assets/banner/banner-15.jpg";
import bannerimg2 from "../../assets/banner/banner-25.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
// import Swiper core and required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// Custom Arrow
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

const MainSlider = () => {
    return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      slidesPerView={1}
      navigation={{
        nextEl: ".button-next",
        prevEl: ".button-prev",
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <>
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
              tabIndex="0"
              type="button"
            >
              Shop Now
            </button>
          </div>
        </>
      </SwiperSlide>
      <SwiperSlide>
        <>
        <img className="" src={bannerimg2} alt="" />
          <div className="absolute top-[25%] left-20 uppercase text-left text-gray-900">
            <h4 className="text-3xl font-normal mb-1">Lifestyle collection</h4>
            <h1 className="text-6xl font-bold mb-3">Women</h1>
            <h4 className="text-4xl font-semibold">
              SALE UP TO <span className="text-red-500">35% OFF</span>
            </h4>
            <p className="text-lg normal-case">
              Get Free Shipping on orders over $99.00
            </p>
            <button
              className="bg-gray-900 font-semibold text-white text-xl px-8 py-3 my-3"
              tabIndex="0"
              type="button"
            >
              Shop Now
            </button>
          </div>
        </>
      </SwiperSlide>
      <button className='button-next right-2 text-5xl text-gray-600 hover:opacity-100 opacity-50'><IoIosArrowDroprightCircle/></button>
      <button className='button-prev left-2 text-5xl text-gray-600 hover:opacity-100 opacity-50'><IoIosArrowDropleftCircle/></button>
    </Swiper>
    );
};

export default MainSlider;