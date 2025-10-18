import React from 'react';
import Hero from '../Components/Hero';
import AppCard from '../Components/AppCard';
import useApps from '../Components/hooks/useApps';
import { Link } from 'react-router';

const Home = () => {
    const {apps , loading, error} = useApps();

    const trendingApps = apps.slice(0, 6);
    
    
    return (
        <div className='bg-gray-100 '>
            <Hero />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 place-items-center max-w-[1350px] mx-auto'>
                {
                    trendingApps.map(app => (
                        <AppCard key={app.id} app={app}/>
                    ))
                }
            </div>
            <div className='text-center py-5'>
                <Link to='/apps'><button className='btn bg-gradient-to-l from-[#9F62F2] to-[#632EE3] text-white'>Show All Apps</button></Link>
            </div>
        </div>
    );
};

export default Home;