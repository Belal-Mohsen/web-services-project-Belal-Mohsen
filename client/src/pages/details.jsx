import React from 'react';
import DCard from '../components/DCard';
import DMap from '../components/DMap';
import DReview from '../components/DReview';

const details = () => {
  return (
    <div className='absolute top-0 w-full h-full flex flex-col 
         justify-center text-white overflow-auto'>

      <div className='flex flex-col md:flex-row justify-center items-center'>

          <div>
            <DCard />
          </div>

          <div className="flex flex-col justify-start self-center">
          <div>
          <DMap />

          </div>
            <div>
            <DReview />
            </div>
            
          </div>

      </div>



    </div>
  )
}

export default details