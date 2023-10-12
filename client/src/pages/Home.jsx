import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import LCard from '../components/LCard';
import Search from '../components/Search';
import img1 from '../assets/images/1.jpg';


const Home = () => {
  const name = "name";

  const [formData, setFormData] = useState({
    address: '',
    distance: 0,
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
        sm:justify-end justify-center text-white'>

      <div className='m-5'>
        <h1> Ski the mountain, own the day. </h1>
      </div>
      <Search formData={formData} onChange={handleChange} onSubmit={handleSubmit} />

      <div className='hidden sm:flex flex-col'>
        <div className='mx-5 mt-5'>
          <h1>Top Ski Destinations</h1>
        </div>
        <div className='sm:flex sm:flex-row gap-10 justify-stretch w-auto m-5 px-5'>
          <LCard
            imageSrc={img1}
            text={name}
          />

          <LCard
            imageSrc={img1}
            text={name}
          />
          <LCard
            imageSrc={img1}
            text={name}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
