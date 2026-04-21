import React from 'react';
import './Navbar.css'
import logo from '../assets/logo.webp';
import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p className="">E-CommerceBD</p>
            </div>
            <ul className="nav-menu">
                <li className="">Shop</li>
                <li className="">Men</li>
                <li className="">Women</li>
                <li className="">Kids</li>
            </ul>
            <div className="nav-login-cart">
                <p><FaCartPlus /></p>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;