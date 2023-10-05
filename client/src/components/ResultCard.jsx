import React from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';





const ResultCard = ({APIsData}) => {
  const navigate = useNavigate();
  const handleClick = () => {
        navigate('/details', { state:APIsData });
  }

  return (
    <div className="result-card w-72 h-84 bg-white text-black mx-auto">
      <div className="resort-image border border-blue-200">
      
        <img onClick={handleClick} src={APIsData?.photo} alt={`${APIsData?.name} Resort`} className= "w-72 h-52" />
      
      </div>
      <div className="resort-details border border-blue-200 p-2">
        <div className="flex justify-between items-center">
          <h2>{APIsData?.name}</h2>
          <span className="rating text-lg text-red-500">{APIsData?.rating}</span>
        </div>
        <p>{APIsData?.address}</p>
        <p>Distance: {APIsData?.distance} miles</p>
        <a href={APIsData?.webURL} className="go-to-page">
        <FaExternalLinkAlt />
      </a>
      </div>
    </div>
  );
};

export default ResultCard;
