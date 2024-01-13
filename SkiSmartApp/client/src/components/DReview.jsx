import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


const DReview = (detailsData) => {
  const data = detailsData.detailsData;
  const numericRating = data.rating; 

  let message = '';
  let ratingValue = 0;

  if (numericRating >= 0 && numericRating < 3) {
    ratingValue = 1;
    message = 'This ski resort has poor reviews. Would not recommend.';
  } else if (numericRating >= 3 && numericRating < 4) {
    ratingValue = 3;
    message = 'The reviews are average for this ski resort.';
  } else if (numericRating >= 4 && numericRating < 5){
    ratingValue = 4;
    message = 'The reviews are very good for this ski resort. Enjoy your time there!';
  } else  if (numericRating === 5){
    ratingValue = 5;
    message = 'The reviews are excellent for this ski resort. Enjoy!';
  } else if (numericRating == null){
    ratingValue = null;
    message = 'There are no reviews for this ski resort. If you enjoy your stay leave one on their website.';
  }
  

  
  return (
    <div className='bg-white p-3 md:w-[400px] m-5 mt-0 mb-8 rounded-3xl shadow-lg border border-gray-600'>
      <Stack spacing={1}>
        <Rating name="half-rating" defaultValue={data.rating} precision={0.5} />
        <div className='text-black p-3 w-full'>
          <p>{message}</p>
        </div>
      </Stack>
    </div>
  )
}

export default DReview