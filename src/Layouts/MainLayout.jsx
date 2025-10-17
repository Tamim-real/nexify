import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Home from '../Pages/Home';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Nav />
            <div className='flex-1'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;