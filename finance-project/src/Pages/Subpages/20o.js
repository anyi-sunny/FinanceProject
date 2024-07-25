import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import '../../Style/AgePage.css';
import { Link } from "react-router-dom";

function TwentyOver () {

    return (
        <div>
            <NavBar/>
            <div className='ageShell'>
                <h1>For ages Twenty and Over</h1>
                <div>
                    <p>
                    You can get a second credit card as early as 6 months after getting approved for your first card so if you haven’t already and you have proven yourself to be responsible with your card you may want to consider opening up a second one. At this point, you should have three accounts open: your checking and/or savings account, your first credit card, and the one you are listed on as an authorized user.                     </p>
                    <p>
                    You will more likely be eligible for a card with more benefits and it truly depends on your preference/spending habits when deciding which one is best for you. 
                    List a website or two and some examples
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

export default TwentyOver;