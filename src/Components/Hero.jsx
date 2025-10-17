import React from 'react';
import PLay from '../assets/play.png';
import AppStore from '../assets/app.png';
import HeroBanner from '../assets/hero-banner.png'

const Hero = () => {
    return (
        <div className='bg-gray-100 inter'>
            <div className='text-center pt-16'>
                <h2 className='text-5xl font-bold'>We Build</h2>
            <h2 className='text-5xl font-bold mt-2'><span className='bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>Productive</span> Apps</h2>
            <p className='text-gray-600 mt-3'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br/> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex  justify-center gap-5 mt-10'>
                <button className="btn btn-lg"><img src={PLay} className='w-8' alt="play store" /> Google Play</button>
                <button className="btn btn-lg"><img src={AppStore} className='w-16' alt="app store" />App Store</button>
            </div>
            <div className='mt-17  '>
                <img src={HeroBanner} className='mx-auto' alt="" />
            </div>
            <div className='bg-gradient-to-l from-[#9F62F2] to-[#632EE3] '>
                <h2 className='text-4xl font-bold text-white py-10 text-center'>Trusted by Millions, Built for You</h2>
                <div className='flex justify-center gap-20  pb-8'>
                    <div className='text-white text-center'>
                    <h2>Total Downloads</h2>
                    <p className='text-5xl font-bold my-4'>29.6M</p>
                    <p>21% more than last month</p>
                </div>
                <div className='text-white text-center'>
                    <h2>Total Reviews</h2>
                    <p className='text-5xl font-bold my-4'>906K</p>
                    <p>46% more than last month</p>
                </div>
                <div className='text-white text-center'>
                    <h2>Active Apps</h2>
                    <p className='text-5xl font-bold my-4'>132+</p>
                    <p>31 more will Launch</p>
                </div>
                </div>
            </div>
            {/* treding app starts */}

            <div >
                <h1 className='text-4xl font-bold mt-15 text-center'>Trending Apps</h1>
                <p className='text-gray-600 mt-3 text-center'>Explore All Trending Apps on the Market developed by us</p>
            </div>
            
        </div>
    );
};

export default Hero;