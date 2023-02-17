import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation } from 'swiper';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import ProductCard from '../ProductCard/ProductCard';

const ProductSlider = ({products, limit}) => {
  console.log(products, limit);
    return (
        <Swiper
        modules={[Navigation]}
        navigation={true}
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
      </Swiper>
    );
};

export default ProductSlider;