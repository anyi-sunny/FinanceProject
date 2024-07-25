import React from 'react';
import '../Style/NavBar.css'
import { Link } from "react-router-dom";
import ScrollToTop from './ScrollToTop';

function NavBar () {
    return (
        <nav className="navbar">
            <ScrollToTop />
            <div className="navbar-logo">
                <a href='/' classname='title'>
                <img src={`${process.env.PUBLIC_URL}/images/CircleLogo.png`} alt="My Logo" />
                S&P Finance
                </a>
            </div>
            <ul className="navbar-links">
                <li><Link to='/'> Home </Link></li>
                <li><Link to='/services'> Learn </Link></li>
                <li><Link to='/about'> About </Link></li>
                <li><Link to='/contact'> Contact </Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;
