import React from 'react'
import {FaMapMarkerAlt } from 'react-icons/fa';
import {GiEarthAmerica} from 'react-icons/gi';

import img from '../assets/images/3.jpg'

const DCard = () => {
    const name = "place name";
    const website = "www.palceName.com";
    const address = "4587 ave. Prud'homme, Montreal, QC";
    const temp = 25;
    const wForecast = 12;
    const wind = 14;
    const sDepth = 0;
    
    return (
        <div className="m-8 md:w-[600px] md:h-[600px] rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full md:h-[250px]" src={img} alt="img"/>
                <div className="px-6 py-4">
                    <div className="font-bold text-xl text-black">{name}</div>
                    <ul className='text-black'>
                        <li className='m-0 p-1 flex gap-1 items-center'> <GiEarthAmerica className='text-black'/> {website} </li>
                        <li className='m-0 p-1 flex gap-1 items-center'> <FaMapMarkerAlt className='text-black'/> {address} </li>
                        <li className='m-0 p-1'> <span className='font-bold underline'>weather report:</span> </li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Temperature:</span> {temp}</li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Weather Forecast:</span> {wForecast}</li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Wind Speed:</span> {wind}</li>
                        <li className='m-0 p-1 ml-10'><span className='font-semibold'>Snow Depth</span> {sDepth}</li>
                    </ul>
                </div>
                
        </div>
    )
}

export default DCard