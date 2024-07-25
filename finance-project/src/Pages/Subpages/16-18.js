import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import '../../Style/AgePage.css';
import { Link } from "react-router-dom";

function SixteenEighteen () {

    return (
        <div>
            <NavBar/>
            <div className='ageShell'>
                <h1>For ages 16-18</h1>
                <div>
                    <p>
                        At this age, you are eligible to be listed as an authorized user for a credit card. This is a great way to begin building good credit. However, make sure the credit card holder is financially responsible and pays off their bills for this card on time. Any missed payments not only affect their score, but also yours. 
                    </p>
                    <p>
                        Create an account on credit karma where you can start tracking all of your transactions and be able to monitor your credit score without risk of lowering it.  
                    </p>
                </div>
                <div className="grid-container">
                    <Link className='grid-item' to='/savecheck'>
                    <img src='images/16-.png' alt='For Sixteen and Younger'/>
                    </Link>
                    <Link className='grid-item' to='/rothIRA'>
                        <img src='images/16-18.png' alt='For Sixteen to Eighteen' />
                    </Link>
                    <Link className='grid-item' to='/highyeild'>
                        <img src='images/18-20.png' alt='For Eighteen to Twenty' />
                    </Link>
                    <Link className='grid-item' to='/cardcomparison'>
                        <img src='images/20+.png' alt='For Twenty and Older' />
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SixteenEighteen;