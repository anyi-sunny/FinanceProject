import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import '../../Style/AgePage.css';
import { Link } from "react-router-dom";

function Sixteen () {

    return (
        <div>
            <NavBar/>
            <div className='ageShell'>
                <h1>For those under 16</h1>
                <div>
                    <p>
                        As someone younger than the age of 16, there isn't really much you can do. For now, open a checking and savings account and get a job if you'd like. Practice being financially independent with the money you earn and save. 
                    </p>
                    <p>
                        Check the child labor laws to ensure you have met the requirements whether that be age or other sorts of eligibility. A great way to improve your chances of getting a job may be walking into the establishment and talking to an employee. Oftentimes, they benefit from your hire if they end up referring you from that interaction.  
                    </p>
                </div>
                <div className="grid-container">
                    <Link className='grid-item' to='/savecheck'>
                    <img src='images/16-.png' alt='For Sixteen and Younger'/>
                    </Link>
            </div>
            <div className="grid-container">
                    <Link className='grid-item' to='/rothIRA'>
                    <img src='images/16-.png' alt='For Sixteen and Younger'/>
                    </Link>
            </div>
            <div className="grid-container">
                    <Link className='grid-item' to='/highyeild'>
                    <img src='images/16-.png' alt='For Sixteen and Younger'/>
                    </Link>
            </div>
            <div className="grid-container">
                    <Link className='grid-item' to='/cardcomparison'>
                    <img src='images/16-.png' alt='For Sixteen and Younger'/>
                    </Link>
            </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Sixteen;