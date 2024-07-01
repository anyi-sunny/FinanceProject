import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";
import '../Style/Services.css'

function Services(){
    return(
        <div>
            <NavBar/>
            <div className='ageShell'>
                <h1 className='learnHeader'>
                    Learn
                </h1>
            </div>
            <div>
                <p className='services'>
                    Below you'll find guides thoughtfully written out based on your age range. Wherever you are in your finance journey these are great places to start. 
                </p>
            </div>
            <div>
            <div className="grid-container">
                <Link className='grid-item' to='/16u'>
                 <img src='images/Kyle.jpg' alt='For Sixteen and Younger'/>
                </Link>
                <Link className='grid-item' to='/16-18'>
                    <img src='images/Kyle.jpg' alt='For Sixteen to Eighteen' />
                </Link>
                <Link className='grid-item' to='/18-20'>
                    <img src='images/Kyle.jpg' alt='For Eighteen to Twenty' />
                </Link>
                <Link className='grid-item' to='/20o'>
                    <img src='images/Kyle.jpg' alt='For Twenty and Older' />
                </Link>
            </div>
    </div>
            <Footer/>
        </div>
    )
}

export default Services