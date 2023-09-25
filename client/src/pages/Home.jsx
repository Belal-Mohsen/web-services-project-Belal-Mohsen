import React, {useState} from 'react'
import LCard from '../components/LCard';
import Search from '../components/Search';
import img1 from '../assets/images/1.jpg';


const Home = () => {
  const [data, setData] = useState([]);
  const name = "name";

  return (
    
        <div className='absolute top-0 w-full h-full flex flex-col 
        sm:justify-end justify-center text-white'>

          <div className='m-5'>
            <h1> Ski the mountain, own the day. </h1>
          </div>
          <Search />

          <div className='hidden sm:flex flex-col'>
            <div className='mx-5 mt-5'>
              <h1>Top Ski Destinations</h1>
            </div>
            <div className='sm:flex sm:flex-row gap-10 justify-stretch w-auto m-5 px-5'>
              <LCard
                imageSrc={img1}
                text= {name}
              />

              <LCard
                imageSrc={img1}
                text= {name}
              />
              <LCard
                imageSrc={img1}
                text= {name}
              />
            </div>
          </div>
        </div>
  )
}

export default Home
