import React from 'react';
import Cart from '../../components/Cart/Cart';
import Categories from '../../components/Categories/Categories';
import CtaFour from '../../components/CtaFour/CtaFour';
import CtaOne from '../../components/CtaOne/CtaOne';
import CtaThree from '../../components/CtaThree/CtaThree';
import CtaTwo from '../../components/CtaTwo/CtaTwo';
import DealsOfTheDay from '../../components/DealsOfTheDay/DealsOfTheDay';
import Features from '../../components/Fearures/Features';
import MainBanner from '../../components/MainBanner/MainBanner';
import ProductQuickView from '../../components/ProductQuickView/ProductQuickView';
import ProductsFromCategory from '../../components/ProductsFromCategory/ProductsFromCategory';

const Home = ({open, setOpen}) => {
    return (
        <div className='w-11/12 mx-auto'>
            <Cart open={open} setOpen={setOpen}></Cart>
            <MainBanner/>
            <Features/>
            <Categories/>
            <CtaOne/>
            <DealsOfTheDay/>
            <CtaTwo/>
            <ProductsFromCategory categoryName={"Electronic"}/>
            <CtaThree/>
            <ProductsFromCategory categoryName={"Men's Fashion"}/>
            <CtaFour/>
            <ProductsFromCategory categoryName={"Women's Fashion"}/>
            <ProductQuickView/>
        </div>
    );
};

export default Home;