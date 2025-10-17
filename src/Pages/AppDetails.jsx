import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../Components/hooks/useApps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp} from '@fortawesome/free-solid-svg-icons';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { Toaster, toast } from 'react-hot-toast';




const AppDetails = () => {
    const {id}= useParams();
    const {apps, loading, error} = useApps();
    const [active, setActive] = useState(false);

    

    const app = apps.find(a=> String(a.id)=== id);

      useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    const isInstalled = storedApps.some(a => String(a.id) === id);
    setActive(isInstalled);
  }, [id]);

    if(loading) return <p>Loading...</p>

    const {image, title, companyName, downloads, ratings, ratingAvg, reviews, size} = app || {}

    const handleInstalledApps=()=>{

        if(active){
            toast.error(`${title} already installed`);
    setActive(true);
    return;
        }
       


     const   existingApps = JSON.parse(localStorage.getItem('installedApps'))
     
     let updatedApps = []

     if(existingApps){
        const isDuplicate = existingApps.some(a => a.id === app.id);
     if(isDuplicate){
       setActive(true)
      
     }
        
        updatedApps = [...existingApps, app]
     }else{
        updatedApps.push(app)
     }
       
        
        localStorage.setItem('installedApps', JSON.stringify(updatedApps) )

        toast.success(`${title} Installed Successfully`);
  setActive(true);
          
    }
    
    return (
        <div className='bg-gray-100 inter'>
            <div className='max-w-11/12 mx-auto'>
                <div className='flex gap-5 pt-10'>
                    <img src={image} alt="" />
                    <div>
                        <h2 className='text-3xl font-bold'>{title}</h2>
                        <p><span className='text-gray-600'>Developed by</span> <span className='font-bold bg-gradient-to-l from-[#9F62F2] to-[#632EE3] bg-clip-text text-transparent'>{companyName}</span></p>
                        <div className='review flex mt-7 gap-6'>
                        <div className='text-center'>
                            <FontAwesomeIcon icon={faDownload} className='text-4xl text-green-500' />
                        <p className='text-gray-600 text-[13px]'>{downloads}</p>
                        </div>
                        <div className='text-center'>
                            <FontAwesomeIcon icon={faStar} className='text-4xl text-[#FF8811]' />
                        <p className='text-gray-600 text-[13px]'>{ratingAvg}</p>
                        </div>
                        <div className='text-center'>
                            <FontAwesomeIcon icon={faThumbsUp} className='text-4xl text-purple-600'/>
                        <p className='text-gray-600 text-[13px]'>{reviews}</p>
                        </div>
                    </div>
                    <button onClick={handleInstalledApps} className={`${active ? 'btn  mt-7 bg-red-700 text-white cursor-not-allowed' : 'btn  mt-7 bg-[#00D390] text-white'}`}>{`${active ? 'Installed' : 'Install Now '}`}<span>{active ? '' : `${size}`}</span><span>{active ? '' : 'MB'}</span></button>
                    </div>
                    
                </div>
                <section className='ratings'>
                    <h2 className='text-2xl font-bold'>Ratings</h2>
                     <div
      style={{
        width: "100%",
        height: 300,
        backgroundColor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
     

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={ratings}
          margin={{ top: 10, right: 30, left: 80, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" reversed/>
          <Tooltip />
          <Bar dataKey="count" fill="#ff9800" radius={[0, 6, 6, 0]}>
            <LabelList dataKey="count" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
                </section>
            </div>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default AppDetails;