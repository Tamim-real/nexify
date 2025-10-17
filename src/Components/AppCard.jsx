import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faStar} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';


const AppCard = ({app}) => {


    
    return (
        <div>
            <Link to={`/app/${app.id}`}>
            <div className='p-3 bg-white inter rounded-xl  inline-block'>
                <img src={app.image} alt="" />
                <h2 className=' font-semibold mt-2  text-center'>{app.title}</h2>
                <div className='flex justify-between mt-2'>
                    <h2 className='text-green-400 bg-[#F1F5E8]  py-1 px-2 rounded'><FontAwesomeIcon icon={faDownload} />{app.downloads}</h2>
                    <h2 className='text-[#FF8811] bg-[#FFF0E1] py-1 px-2 rounded'><FontAwesomeIcon icon={faStar} />{app.ratingAvg}</h2>
                </div>
            </div></Link>
            
        </div>
    );
};

export default AppCard;