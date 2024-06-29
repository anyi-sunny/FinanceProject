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
                        As someone younger than the age of 16, there isn't really much you can do. For now, open a checking and savings account and get a job if you'd like. Practice being financially independent with the money you earn and save. 
                    </p>
                    <p>
                        Check the child labor laws to ensure you have met the requirements whether that be age or other sorts of eligibility. A great way to improve your chances of getting a job may be walking into the establishment and talking to an employee. Oftentimes, they benefit from your hire if they end up referring you from that interaction.  
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SixteenEighteen;