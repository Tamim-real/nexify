import React from 'react';
import ErrorPhoto from '../assets/error-404.png'
import Nav from '../Components/Nav';
import { NavLink } from 'react-router';
import Footer from '../Components/Footer';

const ErrorPage = () => {
    return (
        <div className='bg-gray-100'>
            <Nav></Nav>
           <div className='w-full py-[100px] flex justify-center max-w-11/12 mx-auto'>
            <img src={ErrorPhoto}  alt="" />
           </div>
           <h2 className='text-4xl font-bold text-center'>Oops, page not found!</h2>
           <p className='text-gray-600 text-center mt-5'>The page you are looking for is not available.</p>
           <div className='text-center mt-5'>     
            <NavLink to='/' className="btn  bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white mb-2">Go home</NavLink>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default ErrorPage;