import React from 'react'
import { useNavigate } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';





const ResultCard = ({APIsData}) => {
  const navigate = useNavigate();

const handleClick = () => {
  navigate('/details', { state:APIsData });
}

  return (
    <div className="result-card w-72 h-92 bg-white text-black mx-auto rounded-3xl shadow-lg border border-gray-600">
      <div className="resort-image rounded-t-3xl">
        <img onClick={handleClick} src={APIsData?.photo} alt={`${APIsData?.name} Resort`} className="w-72 h-56 rounded-t-3xl" />
      </div>
      <div className="resort-details p-2 w-72 h-36 rounded-b-3xl text-gray-600">
        <div className="flex justify-between items-center text-blue-500">
          <h2>{APIsData?.name}</h2>
          <span className="rating text-lg text-red-500">{APIsData?.rating}</span>
        </div>
        <p>{APIsData?.address}</p>
        <p>Distance: {APIsData?.distance} kilometers</p>
        <a href={APIsData?.website} className="go-to-page" target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt /> 
        </a>
      </div>
    </div>
  );
};

export default ResultCard;
