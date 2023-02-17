import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
//import ProductCard from '../ProductCard/ProductCard';
import ProductSlider from '../ProductSlider/ProductSlider';

const DealsOfTheDay = () => {
  const dealsOfTheDay = Array.apply(null, Array(15));
    return (
        <section>
            <div className='flex justify-between'>
                <h3 className='text-xl text-gray-700 font-semibold'>Deals Of The Day</h3>
                <div>
                <a className="text-sm font-semibold" href="/market-2#">
                <p className="flex justify-center items-center">
                  <span className='text-[16px] link link-underline link-underline-black text-black'>More Products</span>
                  <span className="mt-3 mb-2 mx-2">
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </a>
                </div>
            </div>
            <div>
                {/* {
                   Array.apply(null, Array(5)).map((arr, index) => <ProductCard key={index}/>)
                } */}
                <ProductSlider 
                products={dealsOfTheDay}
                limit={5}
                >
                </ProductSlider>
            </div>
        </section>
    );
};

export default DealsOfTheDay;