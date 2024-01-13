import React from 'react';
import { useLocation } from 'react-router-dom';
import DCard from '../components/DCard';
import DGoogleMap from '../components/DGoogleMap';

const Details = () => {
  const location = useLocation();
  const dataReceived = location.state;
  let isDataValid = false;
  if(dataReceived !== null){
    isDataValid = true;
  }

  return (
    <div className='absolute top-0 w-full h-full flex flex-col 
         bg-gray-900/50 justify-center text-sky-100 overflow-auto items-center'>
         <h2 className="mt-44 mb-0 text-4xl font-medium mb-4">Resort Details</h2>
         {isDataValid ? (

      <div className='flex flex-col md:flex-row justify-center items-center mt-14 md:mt-20'>

        <div>
          <DCard detailsData ={dataReceived}/>
        </div>

          <div>
            <DGoogleMap detailsData ={dataReceived}/>
          </div>

      </div>
         ):(
          <div className="absolute inset-0 flex text-white items-center justify-center font-semibold">No Data Found To Show!</div>
         )}



    </div>
  )
}

export default Details