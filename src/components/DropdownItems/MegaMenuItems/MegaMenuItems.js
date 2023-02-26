import React from 'react';
import tshirt from '../../../assets/icons/tshirt.svg';
import shirt from '../../../assets/icons/shirt.svg';
import coat from '../../../assets/icons/coat.svg';
import jacket from '../../../assets/icons/jacket.svg';
import jacket2 from '../../../assets/icons/jacket2.svg';
//import footwear from '../../../assets/icons/footwear.svg';
import sunglass from '../../../assets/icons/sunglasses.svg';
import jeans from '../../../assets/icons/jeans.svg';
import watch from '../../../assets/icons/watch.svg';

const MegaMenuItems = () => {
    const mensFeshion = [
        {
            name: 'T-Shirt',
            logo: tshirt
        },
        {
            name: 'Shirt',
            logo: shirt
        },
        {
            name: 'Coat',
            logo: coat
        },
        {
            name: 'Jacket',
            logo: jacket
        },
        {
            name: 'Hoodie',
            logo: jacket2
        },
        {
            name: 'Jeans',
            logo: jeans
        },
        {
            name: 'Sunglass',
            logo: sunglass
        },
        {
            name: 'Watches',
            logo: watch
        },
    ];
    return (
        <div className='absolute group-hover/megamenu:visible invisible top-0 group-hover/megamenu:opacity-100 opacity-0 transition group-hover/megamenu:transition group-hover/megamenu:ease-in-out ease-in-out z-20 group-hover/megamenu:translate-y-3 translate-y-0 duration-300  min-w-[36rem] pt-5'>
            <div className='py-2 px-3 bg-gray-100 rounded-xl shadow-md'>
            <h2 className='text-md text-gray-600 font-bold uppercase mx-5'>Mens Fashion</h2>
            <hr className='my-2' />
            <ul className='list-type-none flex flex-wrap'>
                {
                    mensFeshion.map((item, index) =>
                        <li key={index} className='p-4 flex items-center justify-center gap-3 group/menuitems hover:bg-gray-200 rounded-md w-1/4'>
                            <img className='w-10 group-hover/menuitems:scale-110 duration-200' src={item.logo} alt="" />
                            <span className='text-md font-semibold mygroup-hover:text-red-500'>{item.name}</span>
                        </li>
                    )
                }
            </ul>
            </div>
        </div>
    );
};

export default MegaMenuItems;