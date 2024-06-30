import React from 'react';
import '../Style/Footer.css'
import { Link } from "react-router-dom";


function Footer () {
    return (
        <div className='footer'>
            <ul className='footer-links'>
                <li><Link to='/contact'> Contact </Link></li>
                <li><a href='https://www.instagram.com/finance.sp/' target='_blank' rel='noopener noreferrer'>Instagram</a></li>


            </ul>
        </div>
    )
}

export default Footer;