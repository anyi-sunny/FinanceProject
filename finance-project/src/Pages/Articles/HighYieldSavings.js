import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';


function CardComp (){
    return (
        <div>
            <NavBar/>
            <div className='ageShell'>
                <h1>Getting a High Yield Savings Account</h1>
                <div className='intro'>
                    High Yield Savings accounts are fantastic for medium term savings(think of retirement as a long terms savings account). 
                    With money in your high yield savings account, you get compound interest returned to you(typically monthly). 
                    It’s basically free money! Yes it almost sounds too good to be true so here’s a better way of understanding how things work. 
                    Think of these savings accounts as stocks and as soon as you open one, your money will grow at the Annual Percentage Yield(APY). 
                    At a good bank, these are typically around 4-5%(as of 2024). 
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default CardComp