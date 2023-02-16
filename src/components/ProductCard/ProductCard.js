import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

const ProductCard = () => {
    return (
        <div className='group bg-white border-transparent border-2 border-white hover:border-gray-800 rounded-sm p-4 shadow-sm'>
            <div className='relative overflow-hidden'>
                <img className='group-hover:scale-125 duration-300' src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F1.SilverHighNeckSweater.png&w=1920&q=75" alt="" />
                <button className='p-1 rounded-full hover:bg-gray-200 absolute top-7 -right-10 transition duration-300 ease-in-out transform delay-150 group-hover:-translate-x-12'><span className='text-gray-500 text-2xl'><AiFillEye/></span></button>
                <button className='p-1 rounded-full hover:bg-gray-200 absolute top-16 -right-10 transition duration-500 ease-in-out transform delay-150 group-hover:-translate-x-12'><span className='text-red-500 text-2xl'><AiFillHeart/></span></button>
            </div>
            <div className='leading-8'>
                <h3 className='text-sm font-semibold text-gray-800'>Silver High Neck Sweater</h3>
                <h2 className='text-xl font-bold text-gray-700'>$210.00</h2>
                <p className='flex items-center justify-center text-md text-yellow-400'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className='text-gray-700'> (0)</span></p>
                <button className='hover:bg-black hover:text-white px-6 border-2 border-gray-800 text-semibold rounded-sm'>Add To Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;