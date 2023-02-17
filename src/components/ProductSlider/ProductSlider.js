import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation } from 'swiper';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import ProductCard from '../ProductCard/ProductCard';

const ProductSlider = () => {
    return (
        <Swiper
        modules={[Navigation]}
        navigation={true}
        spaceBetween={15}
        slidesPerView={5}
        className="mySwiper"
      >
        {/* {
            Array.apply(null, Array(5)).map((arr, index) => <SwiperSlide key={index}><ProductCard/></SwiperSlide>)
        } */}
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
        <SwiperSlide><ProductCard/></SwiperSlide>
      </Swiper>
    );
};

export default ProductSlider;