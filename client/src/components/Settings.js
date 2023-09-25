import React from 'react';
import { FaBell, FaRuler, FaTemperatureHigh } from 'react-icons/fa';

const Settings = () => {
    return (
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-md w-80">
            <h2 className="text-2xl mb-4">Settings</h2>
            
            <div className="flex items-center justify-between mb-4">
            <FaBell className="mr-4"/>
                <select className="p-2 border rounded bg-gray-200">
                    <option value="">Notifications</option>
                    <option value="enabled">Enable</option>
                    <option value="disabled">Disable</option>
                </select>
            </div>

            <div className="flex items-center justify-between mb-4">
                <FaRuler/>
                <select className="p-2 border rounded bg-gray-200">
                    <option value="">Distance unit</option>
                    <option value="km">KM</option>
                    <option value="miles">Miles</option>
                </select>
            </div>

            <div className="flex items-center justify-between mb-4">
                <FaTemperatureHigh/>
                <select className="p-2 border rounded bg-gray-200">
                    <option value="">Temperature unit</option>
                    <option value="celsius">℃</option>
                    <option value="fahrenheit">℉</option>
                </select>
            </div>

        </div>
    );
};

export default Settings;
