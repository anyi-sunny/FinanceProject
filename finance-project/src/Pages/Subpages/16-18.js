import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';
import '../../Style/AgePage.css';

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
            </div>
            <Footer/>
        </div>
    )
}

export default SixteenEighteen;