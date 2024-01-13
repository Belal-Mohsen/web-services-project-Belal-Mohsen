import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [name, setName] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setName(!name);
  };
  return (
    <div className="flex w-full items-center h-20 px-4 absolute z-10 text-sky-100 shadow-lg">
      <div className="flex">
        <div className="my-10">
          <img src={logo} width={100} alt="logo" />
        </div>
        <div className="h-0 my-16">
          <h1
            onClick={handleNav}
            className={name ? "hidden" : "block text-3xl"}
          >
            {" "}
            SkiSmart
          </h1>
        </div>
      </div>

      <ul className="hidden sm:flex text-2xl space-x-10 sm:mx-20 sm:mt-2">
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
      <div className="hidden sm:flex ml-auto">
        <NavLink to="/signin">
          <BsPerson size={35} />
        </NavLink>
      </div>
      <div className="sm:hidden">
        <div onClick={handleNav}>
          {nav ? (
            <AiOutlineClose className="text-black z-10" size={30} />
          ) : (
            <HiOutlineMenuAlt4 size={30} />
          )}
        </div>

        <div
          onClick={handleNav}
          className={
            nav
              ? "absolute left-0 top-0 w-full bg-gray-100/90 text-black px-4 py-7 flex flex-col"
              : "absolute left-[-100%]"
          }
        >
          <ul className="text-lg space-y-4">
            <h1 className="logo text-2xl mb-4"> SkiSmart</h1>

            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/profile">favourites</NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us/Contact</NavLink>
            </li>
          </ul>
          <div className="flex flex-col w-full mt-4">
            <NavLink to="/signin">
              <button className="w-full text-black text-lg">Account</button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
