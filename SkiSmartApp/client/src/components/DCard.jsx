import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GiEarthAmerica } from 'react-icons/gi';
import { HiOutlineBookmark, HiBookmark } from 'react-icons/hi';
import MapUsingAddress from './MapUsingAddress';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const DCard = ({ detailsData }) => {
    const [activeTab, setActiveTab] = useState('Weather');
    const [bookMark, setBookMark] = useState(false);

    const handleBookMark = () => {
        setBookMark(!bookMark);
    };

    const numericRating = detailsData.rating; 

    let message = '';
    let ratingValue = 0;

    if (numericRating >= 0 && numericRating < 3) {
        ratingValue = 1;
        message = 'This ski resort has poor reviews. Would not recommend.';
    } else if (numericRating >= 3 && numericRating < 4) {
        ratingValue = 3;
        message = 'The reviews are average for this ski resort.';
    } else if (numericRating >= 4 && numericRating < 5){
        ratingValue = 4;
        message = 'The reviews are very good for this ski resort. Enjoy your time there!';
    } else  if (numericRating === 5){
        ratingValue = 5;
        message = 'The reviews are excellent for this ski resort. Enjoy!';
    } else if (numericRating == null){
        ratingValue = null;
        message = 'There are no reviews for this ski resort. If you enjoy your stay leave one on their website.';
    }

    const renderContent = () => {
        switch (activeTab) {
            
            case 'Weather':
                return (
                    <>
                        <li className='m-0 p-1'>
                            <span className='font-semibold'>Temperature:</span> {detailsData.temp}
                        </li>
                        <li className='m-0 p-1'>
                            <span className='font-semibold'>Weather Forecast:</span> {detailsData.wForecast}
                        </li>
                        <li className='m-0 p-1'>
                            <span className='font-semibold'>Wind Speed:</span> {detailsData.wind}
                        </li>
                        <li className='m-0 p-1'>
                            <span className='font-semibold'>Snow Depth:</span> {detailsData.sDepth}
                        </li>
                    </>
                );
            case 'Reviews':
                return (
                    <>
                        <div className='bg-white p-3 md:w-[400px] m-5 mt-0 mb-8 rounded-3xl shadow-lg'>
                            <Stack spacing={1}>
                                <Rating name="half-rating" defaultValue={detailsData.rating} precision={0.5} />
                                <div className='text-black p-3 w-full'>
                                <p>{message}</p>
                                </div>
                            </Stack>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };

    return (
        <div className="m-8 mt-0 md:w-[800px] md:h-[900px] rounded-3xl overflow-hidden shadow-lg bg-white ">
            <img className="w-full md:h-[450px]" src={detailsData.photo} alt="img" />
            
            <div className="px-6 py-4 text-black">
                <div className="flex justify-between items-center ">
                    <span className="font-bold text-2xl text-blue-500">{detailsData.name}</span>
                    <div onClick={handleBookMark} className='cursor-pointer text-yellow-500 text-2xl'>
                        {bookMark ? <HiBookmark /> : <HiOutlineBookmark />}
                    </div>
                </div>

                <div>
                    <li className='m-0 p-1 flex gap-3 text-xl items-center'>
                        <GiEarthAmerica  />
                        <a href={detailsData?.website} target="_blank" rel="noopener noreferrer">
                            {detailsData?.website}
                        </a>
                    </li>
                    <li className='m-0 p-1 flex gap-2 text-xl items-center'>
                        <FaMapMarkerAlt /> 
                        {detailsData.address}
                        <MapUsingAddress address={detailsData.address} />
                    </li>
                </div>  
                
                <div className="flex mt-4 gap-4 text-2xl">
                    {['Weather', 'Reviews'].map(tab => (
                        <span
                            key={tab}
                            className={`cursor-pointer ${activeTab === tab ? 'text-blue-500' : 'text-black'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </span>
                    ))}
                </div>

                <ul className="mt-4 text-black text-xl">
                    {renderContent()}
                </ul>
            </div>
        </div>
    );
};

export default DCard;
