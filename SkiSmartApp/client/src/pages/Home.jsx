import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Search from '../components/Search';


const Home = () => {

  const [formData, setFormData] = useState({
    address: '',
    distance: 1,
    date: '',
  });

  const navigate = useNavigate();

  const handleChange = (newFormData) => {
    setFormData(newFormData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    navigate('/results', { state: formData });
  };

  return (
    
      <div className='absolute top-0 w-full h-full flex flex-col 
    justify-start'>
        <div className='mx-24 mb-10 mt-56'>
          <h1 className="text-4xl text-sky-800"> Ski the mountain, own the day </h1>
        </div>
      <div className="mx-16">
      <Search formData={formData} onChange={handleChange} onSubmit={handleSubmit} 
      />
      </div>
    </div>

      
  )
}

export default Home
