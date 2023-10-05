import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import Result from "../components/Result";



const Results = () => {
  const location = useLocation();
  const [responseData, setResponseData] = useState(null);
  const [waiting, setWaiting] = useState(true); 
  let showResult = false;
  let message;

  useEffect(() => {
    if (location.state?.responseData === undefined) {
      console.log("Waiting!");
      setTimeout(() => {
        setWaiting(false);
        setResponseData(location.state?.responseData);
      }, 5000); 
    } else {
      setResponseData(location.state?.responseData);
      setWaiting(false);
    }
  }, [location.state?.responseData]);

  if (waiting) {
    message = "Waiting For Data to be loaded ...";
    showResult = false;
  } else if (responseData === "Google Places API request failed") {
    message = "Google Places API request failed";
    showResult = false;
  } else if (responseData === "Unable to get location from postal code") {
    message = "Your Postal Code is not correct, Try Again!";
    showResult = false;
  } else if (responseData === "{}" || responseData === null || responseData === undefined) {
    message = "Oops, No Data Found";
    showResult = false;
  } else {
    showResult = true;
  }

  return (
    <div>
      {showResult ? (
        <div className="absolute inset-0 flex text-white overflow-auto">
          {console.log(responseData)}
          <Result APIData={responseData} />
        </div>
      ) : (
        <div className="absolute inset-0 flex text-white items-center justify-center font-semibold">{message}</div>
      )}
    </div>
  );
};

export default Results;