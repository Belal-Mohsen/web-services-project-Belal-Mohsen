import React from 'react'

const LCard = ({ imageSrc, text }) => {
    return (
      <div className="relative">
        {/* Card Image */}
        <img src={imageSrc} alt="Card" className="h-[250px] w-screen rounded-lg shadow-lg" />
  
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black-600 opacity-75 transition-opacity duration-300 hover:opacity-100`}
        ></div>
  
        {/* Text in Bottom Left Corner */}
        <div className="absolute bottom-0 left-0 p-4">
          <p className="text-white font-bold text-lg">{text}</p>
        </div>
      </div>
    );
  };

export default LCard