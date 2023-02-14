import React from 'react';
import Cart from '../../components/Cart/Cart';
import Categories from '../../components/Categories/Categories';
import DealsOfTheDay from '../../components/DealsOfTheDay/DealsOfTheDay';
import Features from '../../components/Fearures/Features';
import MainBanner from '../../components/MainBanner/MainBanner';

const Home = ({open, setOpen}) => {
    return (
        <div className='w-10/12 mx-auto'>
            <MainBanner/>
            <Features/>
            <Categories/>
            <DealsOfTheDay/>
            <Cart 
            open={open}
            setOpen={setOpen}
            ></Cart>
        </div>
    );
};

export default Home;