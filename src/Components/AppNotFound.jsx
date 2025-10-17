import React from 'react';


import ErrorImg from '../assets/App-Error.png'
import { NavLink } from 'react-router';

const AppNotFound = () => {
    return (
        <div>
            <div className='w-full py-[100px] flex justify-center max-w-11/12 mx-auto'>
             <img src={ErrorImg} alt="" /></div>
           
            <h1 className='text-5xl font-bold text-center'>Opps! App Not Found</h1>
            <div className='text-center mt-5'>     
            <NavLink to='/apps' className="btn  bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white mb-2">Go back</NavLink>
           </div>
        </div>
    );
};

export default AppNotFound;