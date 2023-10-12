import React from 'react';
import { FaTrash } from 'react-icons/fa';

const MyFav = () => {
    return (
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-80 text-gray-700">
            <h2 className="text-2xl mb-4">My Favorites</h2>
            <div className="flex justify-between mb-2">
                <span>Bromont Ski Resort</span>
                <FaTrash className="cursor-pointer"/>
            </div>
            <div className="flex justify-between mb-2">
                <span>Alpine Escape</span>
                <FaTrash className="cursor-pointer"/>
            </div>
            <div className="flex justify-between mb-2">
                <span>Mont-Tramblent ski resort</span>
                <FaTrash className="cursor-pointer"/>
            </div>
            {/* Space for further resorts */}
        </div>
    );
};

export default MyFav;
