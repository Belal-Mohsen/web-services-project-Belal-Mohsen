import React from 'react';

import PersonalProfile from '../components/PersonalProfile';
import MyFav from '../components/MyFav';
import Settings from '../components/Settings';

const Profile = () => {
    return (
        <div className='absolute top-0 w-full h-full flex flex-col 
        sm:justify-end justify-center text-white'>
            

            <div className="flex mt-8 mb-8">
                <div className="mr-8"> 
                    <PersonalProfile />
                </div>
                <div className="flex flex-col">
                    <div className="mb-4"> 
                        <MyFav />
                    </div>
                    <Settings />
                </div>
            </div>
            
            <button className="p-2 bg-blue-500 text-white rounded mb-8 w-60">Save changes</button>

            
        
        </div>
    );
};

export default Profile;
