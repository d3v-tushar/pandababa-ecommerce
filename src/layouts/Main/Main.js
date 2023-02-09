import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Main = () => {
    return (
        <div className='bg-gray-100 min-h-screen'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;