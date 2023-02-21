import React from 'react';
import Cart from '../../components/Cart/Cart';
import Categories from '../../components/Categories/Categories';
import CtaThree from '../../components/CtaThree/CtaThree';
import CtaTwo from '../../components/CtaTwo/CtaTwo';
import DealsOfTheDay from '../../components/DealsOfTheDay/DealsOfTheDay';
import Electronic from '../../components/Electronic/Electronic';
import Features from '../../components/Fearures/Features';
import MainBanner from '../../components/MainBanner/MainBanner';
import MensFeshion from '../../components/MensFashion/MensFeshion';
import ProductQuickView from '../../components/ProductQuickView/ProductQuickView';

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
            <CtaThree/>
            <MensFeshion/>
            <ProductQuickView/>
        </div>
    );
};

export default Home;