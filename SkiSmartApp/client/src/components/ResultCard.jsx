import React from "react";
import { useNavigate } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const ResultCard = ({ APIsData }) => {
  const navigate = useNavigate();

  const fetchWeatherAndNavigate = async () => {
    try {
      const response = await fetch(
        `/weather/${APIsData.postalCode}?date=${APIsData.date}`
      );
      const weather = await response.json();
      navigate("/details", { state: {...APIsData, ...weather} });
  } catch (err) {
      console.error("Failed to fetch weather data: ", err);
    }
  };

  return (
    <div className="result-card w-80 h-104 bg-white text-black mx-auto rounded-3xl shadow-lg border border-gray-600">
      <div className="resort-image rounded-t-3xl">
        <img
          onClick={fetchWeatherAndNavigate}
          src={APIsData?.photo}
          alt={`${APIsData?.name} Resort`}
          className="w-80 h-64 rounded-t-3xl cursor-pointer"
        />
      </div>
      <div className="resort-details p-2 w-80 h-40 rounded-b-3xl text-gray-600">
        <div className="flex justify-between items-center text-custom-blue">
          <h2>{APIsData?.name}</h2>
          <span className="rating text-lg text-custom-green">
            {APIsData?.rating}/5
          </span>
        </div>
        <p>{APIsData?.address}</p>
        <p>Distance: {APIsData?.distance} kilometers</p>
        <a
          href={APIsData?.website}
          className="go-to-page"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default ResultCard;
