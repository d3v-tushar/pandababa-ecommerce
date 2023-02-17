import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation } from 'swiper';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import ProductCard from '../ProductCard/ProductCard';
// Custom Arrow
import { BsArrowLeftCircleFill } from "react-icons/bs";
import { BsArrowRightCircleFill } from "react-icons/bs";

const ProductSlider = ({products, limit}) => {
  console.log(products, limit);
    return (
        <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".button-next",
          prevEl: ".button-prev",
        }}
        loop={true}
        spaceBetween={15}
        slidesPerView={limit}
        className="mySwiper"
      >
        {
          products.map((product, index) => 
          <div>
            <SwiperSlide>
              <ProductCard/>
            </SwiperSlide>
          </div>
          )
        }
      <button className='button-next text-3xl text-gray-700'><BsArrowRightCircleFill/></button>
      <button className='button-prev text-3xl text-gray-700'><BsArrowLeftCircleFill/></button>
      </Swiper>
    );
};

export default ProductSlider;