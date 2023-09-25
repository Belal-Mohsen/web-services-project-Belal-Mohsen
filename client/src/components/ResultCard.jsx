import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ResultCard = ({imageSrc, name, rating, address, distance, webURL}) => {
  

  return (
    <div className="result-card w-72 h-84 bg-white text-black mx-auto">
      <div className="resort-image border border-blue-200">
        <img src={imageSrc} alt={`${name} Resort`} className= "w-72 h-52" />
      </div>
      <div className="resort-details border border-blue-200 p-2">
        <div className="flex justify-between items-center">
          <h2>{name}</h2>
          <span className="rating text-lg text-red-500">{rating}</span>
        </div>
        <p>{address}</p>
        <p>Distance: {distance} miles</p>
        <a href={webURL} className="go-to-page">
        <FaExternalLinkAlt />
      </a>
      </div>
    </div>
  );
};

export default ResultCard;
