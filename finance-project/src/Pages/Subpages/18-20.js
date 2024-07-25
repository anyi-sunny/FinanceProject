import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import { Link } from "react-router-dom";
import '../../Style/18-20.css';

function EighteenTwenty () {

    return (
        <div>
            <NavBar/>
            <div className='ageShell'>
                <h1>For Those Ages 18-20</h1>
                <div>
                    <p className='intro'>
                    Congrats! You’re old enough to get your first credit card! Discover it Student Cash Back and SavorOne Student Cash Rewards Credit Card are great starter cards for students. Starter cards tend to have lower benefits, no annual fee, and a lower standard for approval. The purpose of these are to further increase your credit score/build up a good history so that you increase your chances at getting approved for a card with better benefits. 
                    </p>
                    </div>
            <div className="grid-container">
                    <Link className='grid-item' to='/savecheck'>
                    <img src='images/checksave.png' alt='For Sixteen and Younger'/>
                    </Link>
                    <Link className='grid-item' to='/rothIRA'>
                        <img src='images/rothira.png' alt='For Sixteen to Eighteen' />
                    </Link>
                    <Link className='grid-item' to='/highyeild'>
                        <img src='images/highyeild.png' alt='For Eighteen to Twenty' />
                    </Link>
                    <Link className='grid-item' to='/cardcomparison'>
                        <img src='images/firstcard.png' alt='For Twenty and Older' />
                    </Link>
                </div>
            
        </div>
        <Footer/>
    </div>
    )
}

export default EighteenTwenty;