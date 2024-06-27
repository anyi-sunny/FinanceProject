import React from 'react';
import '../Style/NavBar.css'

function NavBar () {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <a href='/' classname='title'>
                <img src={`${process.env.PUBLIC_URL}/images/CircleLogo.png`} alt="My Logo" />
                S&P Finance
                </a>
            </div>
            <ul className="navbar-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;
