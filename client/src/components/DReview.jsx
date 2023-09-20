import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const DReview = () => {
  return (
    <div className='bg-white p-3'>
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <div className='text-black p-3'>
        <p>Poor</p>
      </div>
    </Stack>
    </div>
  )
}

export default DReview