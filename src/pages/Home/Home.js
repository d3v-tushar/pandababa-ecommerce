import React from 'react';
import Cart from '../../components/Cart/Cart';
import Categories from '../../components/Categories/Categories';
import CtaTwo from '../../components/CtaTwo/CtaTwo';
import DealsOfTheDay from '../../components/DealsOfTheDay/DealsOfTheDay';
import Electronic from '../../components/Electronic/Electronic';
import Features from '../../components/Fearures/Features';
import MainBanner from '../../components/MainBanner/MainBanner';

const Home = ({open, setOpen}) => {
    return (
        <div className='w-11/12 mx-auto'>
            <Cart 
            open={open}
            setOpen={setOpen}
            ></Cart>
            <MainBanner/>
            <Features/>
            <Categories/>
            <DealsOfTheDay/>
            <CtaTwo/>
            <Electronic/>
        </div>
    );
};

export default Home;