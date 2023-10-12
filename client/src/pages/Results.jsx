import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import axios from "axios";
import Result from "../components/Result";
import Spinner from "../components/Spinner";


const Results = () => {

  const location = useLocation();
  const formData = location.state;

  const [responseData, setResponseData] = useState(null);
  const [waiting, setWaiting] = useState(true);
  let showResult = false;
  let message;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post('/APIRequest', formData);
        if (response.status === 200) {
          console.log(response.data);
          setResponseData(response.data);
        } else {
          console.log("Error");
          setResponseData(null); 
        }
        setWaiting(false); 
      } catch (error) {
        console.log("Error");
        setResponseData(null); 
        setWaiting(false); 
      }
    }
    fetchData();
  }, [formData]);


  if (waiting) {
    message = "Waiting For Data to be loaded ...";
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
          <Result APIData={responseData} />
        </div>
      ) : (
        waiting ? (
          <div className="absolute inset-0 flex flex-col text-white items-center justify-center font-semibold">
            <Spinner />
            {message}
          </div>
        ) : (
          <div className="absolute inset-0 flex text-white items-center justify-center font-semibold">{message}</div>
        ))}
    </div>
  );
};

export default Results;