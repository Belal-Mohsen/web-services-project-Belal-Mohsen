import React from 'react';
import SignupForm from '../components/SignupForm';
// import Logo from '../components/Logo';

const SignUp = () => {
    return (
        <div className='absolute top-0 w-full h-full flex flex-col 
        sm:justify-end justify-center text-white'>

            {/* logo and company name
            <div className="absolute top-4 left-4 right-4">
                <Logo />
            </div> */}

            {/* Sign-up form */}
            <div className="flex-grow flex items-center justify-center">
                <SignupForm />
            </div>

            {/* Footer
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <p className="text-white">Copyright© 2023</p>
            </div> */}

        </div>
    );
};


export default SignUp;
