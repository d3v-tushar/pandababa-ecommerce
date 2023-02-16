import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import ProductCard from '../ProductCard/ProductCard';

const DealsOfTheDay = () => {
    return (
        <section>
            <div className='flex justify-between'>
                <h3 className='text-xl text-gray-700 font-semibold'>Deals Of The Day</h3>
                <div>
                <a className="text-sm font-semibold" href="/market-2#">
                <p className="flex justify-center items-center">
                  <span className='text-md link link-underline link-underline-black text-black'>More Products</span>
                  <span className="mt-3 mb-2 mx-2">
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </a>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-x-4'>
                {
                   Array.apply(null, Array(5)).map(arr => <ProductCard/>)
                }
            </div>
        </section>
    );
};

export default DealsOfTheDay;