import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ProductSlider from '../ProductSlider/ProductSlider';

const ProductsFromCategory = ({categoryName}) => {
    const electronics = Array.apply(null, Array(10));
    return (
        <section className='grid grid-cols-4 gap-x-6 my-6 rounded-sm'>
            <div className='col-span-1 text-left bg-white px-8 py-4'>
                <h3 className='text-xl font-bold text-gray-700'>{categoryName}</h3>
                <ul className='list-none py-2 mb-2 leading-5 lg:leading-6'>
                    <li className='py-1'><a className='hover:text-red-500 text-[14px] font-semibold ' href="/">Wireless Speaker</a></li>
                    <li className='py-1'><a className='hover:text-red-500 text-[14px] font-semibold' href="/">Tablet</a></li>
                    <li className='py-1'><a className='hover:text-red-500 text-[14px] font-semibold' href="/">Smartphone</a></li>
                    <li className='py-1'><a className='hover:text-red-500 text-[14px] font-semibold' href="/">Laptop</a></li>
                    <li className='py-1'><a className='hover:text-red-500 text-[14px] font-semibold' href="/">iMac</a></li>
                    <li className='py-1'><a className='hover:text-red-500 text-[14px] font-semibold' href="/">Game Controller</a></li>
                    <li className='py-1'><a className='hover:text-red-500 text-[14px] font-semibold' href="/">Drone</a></li>
                    <li className='py-1'><a className='hover:text-red-500 text-[14px] font-semibold' href="/">Apple</a></li>
                </ul>
                <a className="text-sm font-semibold" href="/market-2#">
                <p className="flex items-center text-left">
                  <span className='text-md  link link-underline link-underline-black text-black'>Browse All</span>
                  <span className="mt-2 mb-1 mx-2">
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

export default ProductsFromCategory;