import React from 'react';
import PersonalProfile from '../components/PersonalProfile';
import MyFav from '../components/MyFav';
import Settings from '../components/Settings';

const Profile = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center space-y-5 overflow-auto'>

            <div className="w-full flex flex-col md:flex-row justify-center items-center space-y-5 md:space-y-0">
                <div className="w-full md:w-auto flex justify-center items-center pr-2 md:pr-5">
                    <PersonalProfile />
                </div>

                <div className="w-full md:w-auto flex flex-col justify-center items-center space-y-5">
                    <MyFav />
                    <Settings />
                </div>
            </div>

            <div className="w-full flex justify-center items-center mt-5">
                <button className="p-2 bg-blue-500 text-white rounded w-60">Save changes</button>
            </div>

        </div>
    );
};


export default Profile;
