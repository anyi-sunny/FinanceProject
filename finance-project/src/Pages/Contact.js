import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function Contact(){
    return(
        <div>
            <NavBar/>
            <div className='ageShell'>
                <h1>Contact us</h1>
                <a href="mailto:spdevs24@gmail.com">
                    <button>Send us an email!</button>
                </a>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact 