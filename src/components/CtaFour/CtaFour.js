import React from 'react';
import giftCTA from '../../assets/banner/long-banner.jpg'

const CtaFour = () => {
    return (
        <section>
            <div className='bg-no-repeat bg-cover rounded-[3px] bg-center p-[2rem] flex flex-wrap justify-end items-center gap-[12rem]' style={{backgroundImage: `url(${giftCTA})`}}>
                <div className='my-1'>
                <h2 className='text-4xl font-bold text-gray-700'>GIFT <span className='text-red-700'>50% OFF</span> PERFECT STYLES</h2>
                <p className='text-md text-gray-600 mt-2'>Only until the end of this week. Terms and conditions apply</p>
                </div>
                <button className='px-[28px] py-2 bg-white hover:bg-black shadow-lg text-md hover:text-white transition capitalize font-semibold'>Discover Now</button>
            </div>
        </section>
    );
};

export default CtaFour;