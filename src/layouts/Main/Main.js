import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

export const cartData = createContext();
const Main = () => {
    const [open, setOpen] = useState(false);
    const data = {open, setOpen}
    return (
        <cartData.Provider value={data}>
            <div className='bg-gray-100 min-h-screen'>
                <Navbar
                open={open}
                setOpen={setOpen}
                ></Navbar>
                <Outlet/>
                <Footer/>
            </div>
        </cartData.Provider>
    );
};

export default Main;