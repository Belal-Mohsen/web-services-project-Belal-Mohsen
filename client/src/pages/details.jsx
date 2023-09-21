import React from 'react';
import DCard from '../components/DCard';
import DMap from '../components/DMap';
import DReview from '../components/DReview';
import DGoogleMap from '../components/DGoogleMap';

const details = () => {
  return (
    <div className='absolute top-0 w-full h-full flex flex-col 
         justify-center text-white overflow-auto items-center'>

      <div className='flex flex-col md:flex-row justify-center items-center mt-14 md:mt-20'>

        <div>
          <DCard />
        </div>

        <div className="hidden md:flex flex-col justify-start self-center w-full p-4">
          <div>
            <DGoogleMap />

          </div>
          <div className='w-full'>
            <DReview />
          </div>

        </div>

      </div>



    </div>
  )
}

export default details