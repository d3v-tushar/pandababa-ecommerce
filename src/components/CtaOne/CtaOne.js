import React from 'react';
import MarqueeSection from '../MarqueeSection/MarqueeSection';

const CtaOne = () => {
    return (
        <section className='my-6 bg-gray-800 p-2'>
            <div className='flex bg-gray-800 overflow-hidden border border-dashed border-white'>
                <div className='z-[2] bg-gray-300 flex items-center p-6 relative'>
                <h1 className='text-xl whitespace-nowrap align-middle lg:text-3xl font-bold uppercase z-[3] text-black'>Black friday sale!</h1>
                <div className='absolute -right-5 rotate-[23deg] -z-[1] -top-10 h-40 w-40 bg-gray-300'></div>
                </div>
                <div className='flex items-center py-6'>
                    <MarqueeSection/>
                </div>
                <div className='p-6 flex items-center'><button className='py-1.5 px-4 whitespace-nowrap my-auto bg-white hover:bg-black hover:text-white text-black text-[0.875rem] font-semibold'>Shop Now</button></div>
            </div>
        </section>
    );
};

export default CtaOne;