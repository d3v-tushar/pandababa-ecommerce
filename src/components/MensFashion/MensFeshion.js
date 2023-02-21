import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ProductSlider from '../ProductSlider/ProductSlider';

const MensFeshion = () => {
    const electronics = Array.apply(null, Array(10));
    return (
        <section className='grid grid-cols-4 gap-x-6 my-6 rounded-sm'>
            <div className='col-span-1 text-left bg-white px-8 py-4'>
                <h3 className='text-[20px] font-bold text-gray-700'>Men's Fashion</h3>
                <ul className='list-none py-2 mb-2 leading-6'>
                    <li className='pt-2.5 hover:text-red-500 text-[13px] font-semibold cursor-pointer'>Wireless Speaker</li>
                    <li className='pt-2.5 hover:text-red-500 text-[13px] font-semibold cursor-pointer'>Tablet</li>
                    <li className='pt-2.5 hover:text-red-500 text-[13px] font-semibold cursor-pointer'>Smartphone</li>
                    <li className='pt-2.5 hover:text-red-500 text-[13px] font-semibold cursor-pointer'>Laptop</li>
                    <li className='pt-2.5 hover:text-red-500 text-[13px] font-semibold cursor-pointer'>iMac</li>
                    <li className='pt-2.5 hover:text-red-500 text-[13px] font-semibold cursor-pointer'>Game Controller</li>
                    <li className='pt-2.5 hover:text-red-500 text-[13px] font-semibold cursor-pointer'>Drone</li>
                    <li className='pt-2.5 hover:text-red-500 text-[13px] font-semibold cursor-pointer'>Apple</li>
                </ul>
                <a className="text-sm font-semibold" href="/market-2#">
                <p className="flex items-center text-left">
                  <span className='text-md  link link-underline link-underline-black text-black'>Browse All</span>
                  <span className="mt-3 mb-3 mx-2">
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </a>
            </div>
            <div className='col-span-3'>
                <ProductSlider
                products={electronics}
                limit={4}
                ></ProductSlider>
            </div>
        </section>
    );
};

export default MensFeshion;