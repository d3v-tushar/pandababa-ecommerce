import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import ProductSlider from '../ProductSlider/ProductSlider';

const Electronic = () => {
    const electronics = Array.apply(null, Array(10));
    return (
        <section className='grid grid-cols-4 gap-x-6 my-6'>
            <div className='col-span-1 text-left bg-white px-8 py-4'>
                <h3 className='text-lg font-bold text-gray-700'>Electronic</h3>
                <ul className='list-none text-sm py-2 mb-2 leading-6'>
                    <li className='pt-1'>Wireless Speaker</li>
                    <li className='pt-1'>Tablet</li>
                    <li className='pt-1'>Smartphone</li>
                    <li className='pt-1'>Laptop</li>
                    <li className='pt-1'>iMac</li>
                    <li className='pt-1'>Game Controller</li>
                    <li className='pt-1'>Drone</li>
                    <li className='pt-1'>Apple</li>
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

export default Electronic;