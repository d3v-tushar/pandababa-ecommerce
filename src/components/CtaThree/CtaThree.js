import React from 'react';
import reductionCTA from '../../assets/banner/banner-21.jpg';
import speakerCTA from '../../assets/banner/banner-22.jpg';

const CtaThree = () => {
    return (
        <section className='grid grid-cols-2 gap-x-6'>
            <div className='relative w-full'>
                <img className='w-full' src={reductionCTA} alt="" />
                <div className='absolute top-[20%] left-[5%] text-black text-left'>
                    <h4 className='text-lg font-semibold'>Final Reduction</h4>
                    <h2 className='text-3xl font-bold my-1'>Sale up to 20% Off</h2>
                    <hr className='w-16 border-black border-y-[1px]' />
                    <h3 className='font-normal my-2'>Only From <span className='text-xl text-red-700 font-bold'>$270.00</span></h3>
                </div>
            </div>
            <div className='relative'>
                <img className='w-full' src={speakerCTA} alt="" />
                <div className='absolute top-[20%] left-[5%] text-white text-left'>
                    <h4 className='text-lg font-semibold'>Weekend Sale</h4>
                    <h2 className='text-3xl font-bold my-1'>Fine Smart Speaker</h2>
                    <hr className='w-16 border' />
                    <h3 className='font-normal my-2'>Starting at <span className='text-xl text-red-700 font-bold'>$185.00</span></h3>
                </div>
            </div>
        </section>
    );
};

export default CtaThree;