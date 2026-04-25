import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/logo.webp';
import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {
    const [menu,setMenu] = useState("shop");
    
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} height={60} width={60} alt="" />
                <p className="">E-CommerceBD</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}} className="">Shop{menu === "shop"?<hr />:<></>} </li>
                <li onClick={()=>{setMenu("mens")}} className="">Men {menu === "mens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("womens")}} className="">Women {menu === "womens"?<hr />:<></>}</li>
                <li onClick={()=>{setMenu("kids")}} className="">Kids {menu === "kids"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <p><FaCartPlus /></p>
                <div className="nav-cart-count">0</div>
                <button>Login</button>
            </div>
        </div>
    );
};

export default Navbar;