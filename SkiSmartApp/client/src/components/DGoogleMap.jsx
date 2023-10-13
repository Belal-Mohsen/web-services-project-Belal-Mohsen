import React from 'react'

const DGoogleMap = ({detailsData}) => {
 
  return (
    <div className='m-5 md:w-[400px] overflow-hidden relative'>
      <iframe
        width="600"
        height="450"
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






