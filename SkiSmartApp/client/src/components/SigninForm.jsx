import React, { useState } from 'react';
import {FaFacebook} from "react-icons/fa6";
import {FaGoogle} from "react-icons/fa6";
import {MdWavingHand} from "react-icons/md";

const SigninForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data: ', formData);
    // Add code to handle form submission, such as sending data to a server
  };

  return (
      <form onSubmit={handleSubmit} className="bg-white bg-opacity-80 p-12 rounded-lg shadow-md w-1/2 max-w-xl">
        <div className="mb-4">
        <div className = "flex">
        <h1 className="text-3xl font-semibold mb-4 text-gray-700">Welcome Back!</h1>
        <MdWavingHand size = {32} color = "blue-300" style = {{marginLeft: "8px"}}/>
        </div>
          <h4 className="mb-6 text-xl text-gray-700">
              Today is a new day. It's your day. You shape it.
           </h4>
          <label htmlFor="email" className="block mb-2 text-gray-700">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Example@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 text-gray-700">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="At least 8 characters"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
          <a href="/forgot-password" className="text-right pt-10 text-gray-700 underline">
            Forgot Password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-gray-500"
        >
          Sign in
        </button>
        <div className="flex items-center justify-center my-4">
          <hr className="flex-grow" />
          <span className="mx-4 text-gray-700">or</span>
          <hr className="flex-grow" />
        </div>
        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-500"
          >
            <div className="flex items-center">
              <FaGoogle size= {20} color = "blue" style = {{marginRight: "8px"}} /> 
             Sign in with Google
            </div>
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black py-2 px-4 rounded hover:bg-gray-500"
        >
          <div className="flex items-center">
          <FaFacebook size= {20} color = "blue" style = {{marginRight: "8px"}}/> 
            Sign in with Facebook
          </div>
        </button>
      </form>
  );
};

export default SigninForm;
