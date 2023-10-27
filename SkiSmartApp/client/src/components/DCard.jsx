import React, {useState} from 'react'
import {FaMapMarkerAlt } from 'react-icons/fa';
import {GiEarthAmerica} from 'react-icons/gi';
import {HiOutlineBookmark, HiBookmark} from 'react-icons/hi';

import MapUsingAddress from './MapUsingAddress';

const DCard = ({detailsData}) => {
    // bookmark
    const [bookMark, setBookMark] = useState(false);
    const handleBookMark = () => {
        setBookMark(!bookMark);
    }
    
    return (
        <div className="m-8 mt-0 md:w-[500px] md:h-[570px] rounded-3xl overflow-hidden shadow-lg bg-white  border border-gray-600">
            <img className="w-full md:h-[250px]" src={detailsData.photo} alt="img"/>
                <div className="px-6 py-4">
                    <div className="flex items-center gap-2 font-bold text-xl text-black">{detailsData.name} 
                    <div onClick={handleBookMark} className='cursor-pointer'>
                        {
                            bookMark ? <HiBookmark /> : <HiOutlineBookmark/>
                        }
                    </div>
                    </div>
                    <ul className='text-black'>
                        <li className='m-0 p-1 flex gap-1 items-center'> <GiEarthAmerica className='text-black'/> <a href={detailsData?.website} target="_blank" rel="noopener noreferrer">{detailsData?.website}</a> </li>
                        <li className='m-0 p-1 flex gap-2 items-center'> <FaMapMarkerAlt className='text-black'/> {detailsData.address} <MapUsingAddress address={detailsData.address}/></li>
                        <li className='m-0 p-1'> <span className='font-bold underline'>weather report:</span> </li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Temperature:</span> {detailsData.temp}</li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Weather Forecast:</span> {detailsData.wForecast}</li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Wind Speed:</span> {detailsData.wind}</li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Snow Depth: </span> {detailsData.sDepth}</li>
                    </ul>
                </div> 
        </div>
    )
}

export default DCard