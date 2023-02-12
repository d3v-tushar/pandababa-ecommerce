import React from 'react';
import Categories from '../../components/Categories/Categories';
import Features from '../../components/Fearures/Features';
import MainBanner from '../../components/MainBanner/MainBanner';

const Home = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <MainBanner/>
            <Features/>
            <Categories/>
        </div>
    );
};

export default Home;