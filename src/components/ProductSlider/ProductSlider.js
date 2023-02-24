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
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';

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
      <button className='button-next right-1 text-5xl text-gray-600 hover:opacity-100 opacity-50'><IoIosArrowDroprightCircle/></button>
      <button className='button-prev left-1 text-5xl text-gray-600 hover:opacity-100 opacity-50'><IoIosArrowDropleftCircle/></button>
      </Swiper>
    );
};

export default ProductSlider;