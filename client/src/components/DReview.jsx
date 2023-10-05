import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const DReview = (detailsData) => {
  const data = detailsData.detailsData;

  return (
    <div className='bg-white p-3 md:w-[400px] m-5'>
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={data.rating} precision={0.5} />
        <div className='text-black p-3 w-full'>
          <p>Poor</p>
          <p>Some Reviews</p>
        </div>
      </Stack>
    </div>
  )
}

export default DReview