import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Link } from "react-router-dom";

function Services(){
    return(
        <div>
            <NavBar/>
            <div className='ageShell'>
                <h1>
                    Explore
                </h1>
            </div>
            <div>
                <p className='services'>
                    Below you're find guides thoughtfully written out based on your age. Wherever you are in your finance journey these are great places to start. 
                </p>
            </div>
            <div>
                <Link className='links' to='/16u'> For Sixteen and Younger </Link>
                <Link className='links' to='/16-18'>For Sixteen to Eighteen</Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Services