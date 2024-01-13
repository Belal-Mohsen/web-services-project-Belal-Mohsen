// PersonalProfile.js

import React from 'react';

const PersonalProfile = () => {
    return (
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-96">
            <h2 className="text-2xl text-gray-700 mb-4">Personal Profile</h2>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
            <input type="text" className="mb-4 p-2 border rounded w-full" placeholder="Username"/>

            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="mb-4 p-2 border rounded w-full" placeholder="User's email"/>

            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" className="mb-4 p-2 border rounded w-full" placeholder="Password"/>

            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <select className="mb-4 p-2 border rounded w-full">
                <option value="">Select a district</option>
                <option value="Ville-Marie">Ville-Marie</option>
                <option value="Le Plateau-Mont-Royal">Le Plateau-Mont-Royal</option>
                <option value="Côte-des-Neiges–Notre-Dame-de-Grâce">Côte-des-Neiges–Notre-Dame-de-Grâce</option>
                <option value="Mercier–Hochelaga-Maisonneuve">Mercier–Hochelaga-Maisonneuve</option>
                <option value="Villeray–Saint-Michel–Parc-Extension">Villeray–Saint-Michel–Parc-Extension</option>
            </select>
        </div>
    );
};

export default PersonalProfile;

