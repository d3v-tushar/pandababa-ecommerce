import React from 'react';
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { GiClockwork } from "react-icons/gi";
import { GoCreditCard } from "react-icons/go";

const Features = () => {
    return (
        <div className='bg-white grid grid-cols-4 py-5 shadow-sm'>
            <div className='flex justify-center items-center border-r-2'>
                <div className='text-[40px] mx-4'><TbTruckDelivery/></div>
                <div className='text-left leading-5 mb-2'>
                    <h3 className='text-lg font-semibold '>Fast Delivery</h3>
                    <p className='text-md text-gray-500'>Start from $10</p>
                </div>
            </div>
            <div className='flex justify-center items-center border-r-2'>
                <div className='text-[40px] mx-4'><HiOutlineBanknotes/></div>
                <div className='text-left leading-5 mb-2'>
                    <h3 className='text-lg font-semibold '>Money Guarantee</h3>
                    <p className='text-md text-gray-500'>7 Days Back</p>
                </div>
            </div>
            <div className='flex justify-center items-center border-r-2'>
                <div className='text-[40px] mx-4'><GiClockwork/></div>
                <div className='text-left leading-5 mb-2'>
                    <h3 className='text-lg font-semibold '>365 Days</h3>
                    <p className='text-md text-gray-500'>For free return</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='text-[40px] mx-4'><GoCreditCard/></div>
                <div className='text-left leading-5 mb-2'>
                    <h3 className='text-lg font-semibold '>Easy Payment</h3>
                    <p className='text-md text-gray-500'>Secure system</p>
                </div>
            </div>
        </div>
    );
};

export default Features;