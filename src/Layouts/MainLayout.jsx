import React, { useEffect, useState } from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Home from '../Pages/Home';
import { Outlet, useLocation } from 'react-router';
import Loading from '../Components/Loading';

const MainLayout = () => {

    const [loadingSpinner, setLoadingSpinner] = useState(false);
    const location = useLocation();

    useEffect(() => {
    setLoadingSpinner(true);

    // এখানে একটু delay দিচ্ছি (simulate loading)
    const timer = setTimeout(() => setLoadingSpinner(false), 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);
    return (
        <div className='flex flex-col min-h-screen '>
            <div className='sticky top-0 bg-white shadow z-50'>
                <Nav />
            </div>
            {
                loadingSpinner ? <Loading></Loading> : <div className='flex-1'>
                <Outlet />
            </div>
            }
            <Footer />
        </div>
    );
};

export default MainLayout;