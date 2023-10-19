import React, { useState, useEffect } from "react"
import { useLocation } from 'react-router-dom';
import axios from "axios";
import isEqual from "lodash/isEqual";
import Result from "../components/Result";
import Spinner from "../components/Spinner";


const Results = () => {

  const location = useLocation();
  const formData = location.state;
  const preFormData = formData;

  const [responseData, setResponseData] = useState(null);
  const [waiting, setWaiting] = useState(true);
  let showResult = false;
  let message;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.post('/APIRequest', formData);
        if (response.status === 200) {
          const data = response.data
          console.log(data);
          setResponseData(data);

          localStorage.setItem("responseData", JSON.stringify(data));
          localStorage.setItem("formData", JSON.stringify(formData));
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
    const storedData = localStorage.getItem("responseData");
    const storedFormData = localStorage.getItem("formData");

    if (storedData && isEqual(formData, JSON.parse(storedFormData))) {
      setResponseData(JSON.parse(storedData));
      setWaiting(false);
    } else {
      fetchData();
    }
    
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
        <div className="absolute inset-0 flex text-white overflow-auto bg-gray-900/50">
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