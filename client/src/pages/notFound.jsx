import React from 'react'
import notFoundImg from '../assets/images/4.png';

const notFound = () => {
  return (
    <div className='absolute top-0 w-full h-full flex flex-col 
        justify-start items-center text-white'>
        <div className='md:pl-44'>
        <img className="w-full md:h-[500px] md:w-[500px] p-2 m-4" src={notFoundImg} alt="img"/>
        </div>
        
        <div>
                <p className='text-xl'>Oops, This page could not be found!</p>
            </div>
        </div>
  )
}

export default notFound