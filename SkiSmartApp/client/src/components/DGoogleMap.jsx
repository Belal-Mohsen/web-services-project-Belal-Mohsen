import React from 'react'

const DGoogleMap = ({detailsData}) => {
 
  return (
    <div className='m-5 mt-0 md:w-[400px] md:h-[415px] overflow-hidden relative rounded-3xl shadow-lg border border-gray-600 '>
      <iframe
        width="400"
        height="415"
        style={{ border: 0 }}
        src={detailsData.mapUrl}
        allowFullScreen
        loading="lazy"
        title="Resort Location"
      ></iframe>
    </div>
  );
};

export default DGoogleMap






