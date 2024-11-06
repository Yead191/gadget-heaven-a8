import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const dashNavigate = useNavigate()
    const location = useLocation();
    const isHome = location.pathname === '/' || location.pathname.startsWith('/category/')

    const links = (
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/statistics'>Statistics</NavLink></li>
            <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        </>
    )

    return (
        <div className={`navbar bg-transparent fixed top-0 z-50 w-full flex justify-center ${isHome  ? 'pt-6 ':'bg-white'} `}>
            <div className={`w-11/12 md:w-10/12 flex items-center justify-between navbar ${isHome ? 'bg-[#9538E2] text-white' : 'bg-white text-black'} rounded-lg`}>
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
                            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${isHome ? 'text-white bg-[#9538E2]' : 'text-black bg-white'}`}>
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className={`btn btn-ghost text-xl ${isHome ? 'text-white' : 'text-black'}`}>Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 rounded-lg ${isHome ? 'text-white bg-[#9538E2]' : 'text-black bg-white'}`}>
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <button onClick={()=> dashNavigate('/dashboard')} className="btn btn-sm md:btn-md"><IoCartOutline className='md:text-xl' />
                    </button>
                    <button onClick={()=> dashNavigate('/dashboard/wishlist')} className="btn btn-sm md:btn-md"><LuHeart className='md:text-xl' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;