import React from 'react';
import '../Style/NavBar.css'
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href='/' classname='title'>
                S&P Finance
                <img src={`${process.env.PUBLIC_URL}/images/CircleLogo.png`} alt="My Logo" />
                </a>
            </div>
            <ul className="navbar-links">
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/about'> About </Link></li>
                <li><Link to='/services'> Services </Link></li>
                <li><Link to='/contact'> Contact </Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
