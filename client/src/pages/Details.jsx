import React from 'react';
import { useLocation } from 'react-router-dom';
import DCard from '../components/DCard';
import DReview from '../components/DReview';
import DGoogleMap from '../components/DGoogleMap';

const Details = () => {
  const location = useLocation();
  const dataReceived = location.state;
  console.log("From Detials");
  console.log(dataReceived);
  return (
    <div className='absolute top-0 w-full h-full flex flex-col 
         justify-center text-white overflow-auto items-center'>

      <div className='flex flex-col md:flex-row justify-center items-center mt-14 md:mt-20'>

        <div>
          <DCard detailsData ={dataReceived}/>
        </div>

        <div className="hidden md:flex flex-col justify-start self-center w-full p-4">
          <div>
            <DGoogleMap />

          </div>
          <div className='w-full'>
            <DReview detailsData ={dataReceived}/>
          </div>

        </div>

      </div>



    </div>
  )
}

export default Details