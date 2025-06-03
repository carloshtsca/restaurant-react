import React, { useState } from 'react';
import restaurant from '../assets/images/restaurant-img.jpg';
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

const Auth = () => {
    const [isRegister, setIsRegister] = useState(false);

    return (
        <div className='flex min-h-screen w-full'>
            {/* Left Section */}
            <div className='w-1/2 relative hidden md:flex items-center justify-center bg-cover'>
                {/* BF Image */}
                <img className='w-full h-full object-cover' src={restaurant} alt="Restaurant Image" />

                {/* Black Overlay */}
                <div className='absolute inset-0 bg-black/80 bg-opacity-80'></div>

                {/* Quote at bottom */}
                <blockquote className='absolute bottom-10 px-8 mb-10 text-2xl italic text-white'>
                    "Serve customers the best food with prompt and friendly service in a
                    welcoming atmosphere, and they'll keep coming back."
                    <br />
                    <span className='block mt-4 text-yellow-400'>- Founder of Restro</span>
                </blockquote>
            </div>

            {/* Right Section */}
            <div className='w-full md:w-1/2 min-h-screen bg-[#1a1a1a] p-10'>
                <div className='flex flex-col items-center gap-2'>
                    <img src={logo} alt="Restro Logo" className='h-14 w-14 border-2 border-white rounded-full p-1' />
                    <h1 className='text-lg font-semibold text-[#f5f5f5] tracking-wide'>Restro</h1>
                </div>

                <h2 className='text-4xl text-center mt-10 font-semibold text-yellow-400 mb-10'>
                    {isRegister ? 'Employee registration' : 'Employee Login'}
                </h2>

                {/* Components */}
                {isRegister ? <Register setIsRegister={setIsRegister} /> : <Login />}

                <div className='flex justify-center mt-6'>
                    <p onClick={() => setIsRegister(!isRegister)} className='text-sm text-[#ababab]'>
                        {isRegister ? 'Already have an account?' : "Don't have an account?"} <Link className='text-yellow-400 font-semibold hover:underline'>{isRegister ? 'Sign in' : 'Sign up'}</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;