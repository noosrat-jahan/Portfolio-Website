import React from 'react';

import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const handleScroll = (e) => {
        e.preventDefault();

        const href = e.currentTarget.href;
        const targetId = href.replace(/.*#/, "");

        const elem = document.getElementById(targetId);
        const navbarHeight = 100; // Adjust this to match your sticky navbar's height

        if (elem) {
            const elementPosition =
                elem.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: elementPosition,
                behavior: "smooth",
            });
        }
    };

    const links = <>
        <li><NavLink className="!text-amber-100 !bg-transparent"  to="/">HOME</NavLink></li>
        <li><NavLink className="!text-amber-100 !bg-transparent" onClick={handleScroll} to='#about'>ABOUT</NavLink></li>
        <li><NavLink className="!text-amber-100 !bg-transparent" onClick={handleScroll} to='#skills'>SKILLS</NavLink></li>
        <li><NavLink className="!text-amber-100 !bg-transparent" onClick={handleScroll} to='#project'>PROJECTS</NavLink></li>
        <li><NavLink className="!text-amber-100 !bg-transparent" onClick={handleScroll} to='#contact'>CONTACT ME</NavLink></li>
    </>


    return (
        <div className='flex justify-center sticky top-0 z-10'>
            <div className="navbar w-full px-5 text-amber-200  mx-auto  mt-1 font-semibold  bg-[#070335] bg-opacity-100  border border-amber-200 rounded-2xl shadow-xl space-x-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-black rounded-box z-10 text-black mt-3 w-52 p-2 shadow left-0">
                            {links}
                        </ul>
                    </div>
                    <h2 className='text-amber-100 font-rancho'>Noosrat Meem</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-3">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link target='blank' to="https://drive.google.com/file/d/1vHzV2gJ1O_db-uj6oE4H9npm4vWpCWHp/view?usp=sharing" className=" border border-amber-200 rounded-md px-4 py-2 text-amber-100">Download Resume</Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;