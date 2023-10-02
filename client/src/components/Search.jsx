import React from 'react'
import {Link} from 'react-router-dom';
import SliderSizes from '../components/Slider';


const Search = ({formData, onChange, onSubmit }) => {

  const handleSliderChange = (value) => {
    onChange({ ...formData, distance: value });
  };

  return (
    <>
      <form className='my-form'>
        <input value={formData.address}
          onChange={(e) => onChange({ ...formData, address: e.target.value })} className='search-element' type='text' placeholder='Insert your postal code' />

        <input value={formData.date}
          onChange={(e) => onChange({ ...formData, date: e.target.value })} className='search-element' type='date' placeholder='Date' />

        <div className='search-element flex flex-row gap-3 mx-3 w-full md:w-auto justify-center'>
          <p>Distance</p>
          <SliderSizes value={formData.distance}
          onChange={handleSliderChange}/>
        </div>
        <Link to="/results">
        <button onClick={onSubmit} className='w-full md:w-auto rounded-full text-black px-20 mr-2'>Search</button>
        </Link>
      </form>
    </>
  )
}

export default Search