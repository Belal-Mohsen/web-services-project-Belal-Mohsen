import React from 'react'
import SliderSizes from '../components/Slider';

const Search = () => {
  return (
    <>


      <form className='my-form'>
        <input className='search-element' type='text' placeholder='Search Destinations' />

        <input className='search-element' type='date' placeholder='Date' />

        <div className='search-element flex flex-row gap-3 mx-3 w-full md:w-auto justify-center'>
          <p>Distance</p>
          <SliderSizes />
        </div>
        <button className='w-full md:w-auto rounded-full text-black px-20 mr-2'>Search</button>
      </form>
    </>
  )
}

export default Search