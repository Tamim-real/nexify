import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

const InstalledApps = () => {
    const [installedApp, setInstalledApp] = useState([]);
    const [sortOrder, setSortOrder]= useState('none')
  useEffect(()=>{
      const   savedApps = JSON.parse(localStorage.getItem('installedApps'));
      if(savedApps) setInstalledApp(savedApps)
  }, [])

  const sortedItem =(
    () =>{
    if(sortOrder === "Low-High"){
        return [...installedApp].sort((a,b)=> a.downloads - b.downloads)
    }
    else if(sortOrder === "High-Low"){
        return [...installedApp].sort((a,b)=> b.downloads - a.downloads)
    }
    else{
        return installedApp
    }
 
  })()

const handleRemove = (id) => {
  const existingApps = JSON.parse(localStorage.getItem('installedApps'));

  Swal.fire({
    title: 'Are you sure?',
    text: 'Do you really want to uninstall this app?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Uninstall',
    cancelButtonText: 'Cancel',
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      // ✅ Remove the app from localStorage
      const updatedApps = existingApps.filter((app) => app.id !== id);
      setInstalledApp(updatedApps);
      localStorage.setItem('installedApps', JSON.stringify(updatedApps));

      // ✅ Success alert
      Swal.fire({
        title: 'Uninstalled!',
        text: 'The app has been successfully removed.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // ❌ Cancel alert (optional)
      Swal.fire({
        title: 'Cancelled',
        text: 'Your app is still installed 😊',
        icon: 'info',
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
};

    return (
        <div className=' inter'>
            <div className='max-w-11/12 mx-auto'>
                <h1 className='text-4xl font-bold pt-10 text-center'>Your Installed Apps</h1>
                <p className='text-gray-600 text-center mt-5'>Explore All Trending Apps on the Market developed by us</p>
                <div className='flex justify-between mb-4'>
                    <h2 className='text-2xl font-bold'>{sortedItem.length} Apps Found</h2>
                <label className='form-control w-full max-w-xs'>
                    <select className='select select-bordered' value={sortOrder} onChange={e=> setSortOrder(e.target.value)}>
                    <option value="none">Sort by downloads</option>
                    <option value="High-Low">High-Low</option>
                    <option value="Low-High">Low-High</option>
                </select>
                </label>
                </div>
                <div className='space-y-4'>
                    {
                        sortedItem.map(app=> (
                            <div className='bg-gray-100 p-3 rounded-2xl flex gap-5 relative'>
                        <img src={app.image} className='w-12' alt="" />
                      <div>
                          <h2 className='font-bold'>{app.title}</h2>
                        <div className='flex gap-2 items-center'>
                           <h2 className='text-green-400 bg-[#F1F5E8]  py-1 px-2 rounded'><FontAwesomeIcon icon={faDownload} />{app.downloads}</h2>
                           <h2 className='text-[#FF8811] bg-[#FFF0E1] py-1 px-2 rounded'><FontAwesomeIcon icon={faStar} />{app.ratingAvg}</h2>
                           <p>{app.size}</p>
                        </div>
                      </div>
                     <button onClick={()=>handleRemove(app.id)} className="btn  mt-7 bg-[#00D390] text-white absolute left-[270px] bottom-[10px] lg:left-[1500px] lg:bottom-[20px]">Uninstall</button>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default InstalledApps;