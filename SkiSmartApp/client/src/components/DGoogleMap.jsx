import React from 'react'

const DGoogleMap = ({detailsData}) => {
 
  return (
    <div className='m-5 mt-0  overflow-hidden relative rounded-3xl shadow-lg  '>
      <iframe
        width="850"
        height="900"
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






