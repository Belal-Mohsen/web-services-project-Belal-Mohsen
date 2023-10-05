import React, {useState} from 'react'
import {FaMapMarkerAlt } from 'react-icons/fa';
import {GiEarthAmerica} from 'react-icons/gi';
import {HiOutlineBookmark, HiBookmark} from 'react-icons/hi';

import MapUsingAddress from './MapUsingAddress';

const DCard = (detailsData) => {

    const data = detailsData.detailsData;

    // bookmark
    const [bookMark, setBookMark] = useState(false);
    const handleBookMark = () => {
        setBookMark(!bookMark);
    }
    
    return (
        <div className="m-8 md:w-[600px] md:h-[600px] rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full md:h-[250px]" src={data.photo} alt="img"/>
                <div className="px-6 py-4">
                    <div className="flex items-center gap-2 font-bold text-xl text-black">{data.name} 
                    <div onClick={handleBookMark}>
                    {
                        bookMark ? <HiBookmark /> : <HiOutlineBookmark/>
                    }
                </div>
                     </div>
                    <ul className='text-black'>
                        <li className='m-0 p-1 flex gap-1 items-center'> <GiEarthAmerica className='text-black'/> <a href={data?.website} target="_blank" rel="noopener noreferrer">{data?.website}</a> </li>
                        <li className='m-0 p-1 flex gap-2 items-center'> <FaMapMarkerAlt className='text-black'/> {data.address} <MapUsingAddress address={data.address}/></li>
                        <li className='m-0 p-1'> <span className='font-bold underline'>weather report:</span> </li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Temperature:</span> {data.temp}</li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Weather Forecast:</span> {data.wForecast}</li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Wind Speed:</span> {data.wind}</li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Snow Depth: </span> {data.sDepth}</li>
                    </ul>
                </div> 
        </div>
    )
}

export default DCard