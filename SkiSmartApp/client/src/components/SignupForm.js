import React from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
    return (
        <div className="bg-white bg-opacity-80 p-12 rounded-lg shadow-md w-1/2 max-w-xl">
            <h2 className="text-3xl mb-4 text-center text-gray-900">Sign Up</h2>
            <p className="mb-6 text-lg text-center text-gray-700">Welcome to SkiSmart Family!</p>
            <input type="text" placeholder="Full Name" className="mb-4 p-3 text-lg border rounded w-full" />
            <input type="email" placeholder="Email" className="mb-4 p-3 text-lg border rounded w-full" />
            <input type="password" placeholder="Password" className="mb-4 p-3 text-lg border rounded w-full" />
            <input type="password" placeholder="Confirm Password" className="mb-4 p-3 text-lg border rounded w-full" />
            <button className="bg-blue-500 text-white rounded p-3 w-full mb-4">SIGN UP</button>
            <p className="text-s mb-2 text-center text-gray-500">Already have an account? <Link to="login">Login</Link></p>
            <p className="text-s text-center text-gray-500"><Link to="/">Skip now --&gt;</Link></p>
        </div>
    );
};

export default SignupForm;