import React from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Result from "../components/Result";



const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const responseData = location.state?.responseData;
  console.log(responseData);

  return (
    <div>  
    <div className="absolute inset-0 flex text-white overflow-auto">
        <Result APIData={responseData}
        />
    </div>
    </div>
  )
}

export default Results