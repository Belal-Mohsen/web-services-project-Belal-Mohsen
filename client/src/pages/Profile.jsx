import React from 'react';

import PersonalProfile from '../components/PersonalProfile';
import MyFav from '../components/MyFav';
import Settings from '../components/Settings';

const Profile = () => {
    return (
        <div className='absolute top-20 w-full h-3/2 flex flex-col
        sm:justify-end justify-center text-white items-center overflow-auto'>


            <div className='flex md:flex-row m-5'>
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

            <div>


                <button className="p-2 bg-blue-500 text-white rounded mb-8 w-60">Save changes</button>
            </div>



        </div>
    );
};

export default Profile;
