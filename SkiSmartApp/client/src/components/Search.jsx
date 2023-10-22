import React from 'react'
import SliderSizes from '../components/Slider';


const Search = ({ formData, onChange, onSubmit }) => {

  // Calculate today's date
  const today = new Date();
  const minYear = today.getFullYear();
  const minMonth = String(today.getMonth() + 1).padStart(2, '0'); // Adds a leading zero if necessary
  const minDay = String(today.getDate()).padStart(2, '0'); // Adds a leading zero if necessary

  const minDate = `${minYear}-${minMonth}-${minDay}`;

  // Calculate the date 15 days from today inclusive
  const maxDateObj = new Date(today);
  maxDateObj.setDate(today.getDate() + 14);
  
  const maxYear = maxDateObj.getFullYear();
  const maxMonth = String(maxDateObj.getMonth() + 1).padStart(2, '0'); // Adds a leading zero if necessary
  const maxDay = String(maxDateObj.getDate()).padStart(2, '0'); // Adds a leading zero if necessary

  const maxDate = `${maxYear}-${maxMonth}-${maxDay}`;

  const handleSliderChange = (value) => {
    onChange({ ...formData, distance: value });
  };
  
  return (
    <>
      <form className='my-form'>
        <input value={formData.address}
          onChange={(e) => onChange({ ...formData, address: e.target.value })} 
          className='search-element' 
          type='text' 
          placeholder='Insert your postal code'
          />

        <input value={formData.date || minDate}
          onChange={(e) => onChange({ ...formData, date: e.target.value })} 
          className='search-element' 
          type='date' 
          min={minDate}
          max={maxDate}
          />

        <div className= 'search-element flex flex-row gap-3 mx-3 w-full md:w-auto justify-center'>
          <p>Distance</p>
          <SliderSizes value={formData.distance}
            onChange={handleSliderChange} />
        </div>

        <button onClick={onSubmit} className='w-full md:w-auto rounded-full text-white bg-custom-blue px-20 mr-2'>Search</button>
      </form>
    </>
  )
}

export default Search