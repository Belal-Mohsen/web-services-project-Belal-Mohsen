import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const DReview = () => {
  const [rate, setRate] = useState(1);

  const changeValue = (event, rate) => {
    setRate(rate);
  };

  return (
    <div className='bg-white p-3 md:w-[400px] m-5'>
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={rate} precision={0.5} />
        <div className='text-black p-3 w-full'>
          <p>Poor</p>
          <p>Some Reviews</p>
        </div>
      </Stack>
    </div>
  )
}

export default DReview