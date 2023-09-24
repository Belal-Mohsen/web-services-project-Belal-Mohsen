import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { BsPerson } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'

import logo from '../assets/images/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [name, setName] = useState(false)
    const handleNav = () => {
        setNav(!nav);
        setName(!name);
    }
    return (
        <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>

            <div className='flex'>
            <div className='my-10'>
            <img src={logo} width={100} alt='logo' />
            </div>
            <div  className='h-0 my-16'>
            <h1 onClick={handleNav} className={name ? 'hidden' : 'block'}> SkiSmart</h1>
            </div>
            </div>

            <ul className='hidden sm:flex'>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/details">Favourites</NavLink>
                </li>
                <li>
                    <NavLink to="/aboutus">About Us/Contact</NavLink>
                </li>
            </ul>
            <div className='hidden sm:flex'>
                <NavLink to="/signin"><BsPerson size={25} /></NavLink>
            </div>
            <div className='sm:hidden'>
                <div onClick={handleNav}>
                    {
                        nav ? <AiOutlineClose className='text-black z-10' size={20} /> : <HiOutlineMenuAlt4 size={20} />
                    }
                </div>


                <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 text-black px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
                    <ul>
                        <h1 className='logo'> SkiSmart</h1>

                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/profile">favourites</NavLink>
                        </li>
                        <li>
                            <NavLink to="/aboutus">About Us/Contact</NavLink>
                        </li>
                    </ul>
                    <div className='flex flex-col w-full'>
                    <NavLink to="/signin"><button className='w-full text-black'>Account</button></NavLink>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Navbar