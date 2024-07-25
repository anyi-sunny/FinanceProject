import React from 'react';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';


function CardComp (){
    return (
        <div>
            <NavBar/>
            <div className='text'>
                <h1>Getting a High Yield Savings Account</h1>
                <div className='intro'>
                    High Yield Savings accounts are fantastic for medium term savings(think of retirement as a long terms savings account). 
                    With money in your high yield savings account, you get compound interest returned to you(typically monthly). 
                    It’s basically free money! Yes it almost sounds too good to be true so here’s a better way of understanding how things work. 
                    Think of these savings accounts as stocks and as soon as you open one, your money will grow at the Annual Percentage Yield(APY). 
                    At a good bank, these are typically around 4-5%(as of 2024). 
                </div>
                <h2>
                    How does it work?
                </h2>
                <p>
                    The reason banks are willingly helping you grow your net worth is because they are making even more money off of this. 
                    When you put your savings into these accounts, the bank basically has ownership now. 
                    You will still have the sum you own saved and accounted for but think about it as if it no longer exists for you to use. 
                    They take this money and give out loans and complete other transactions where the interest rate may be much higher than your 4-5% APY. 
                    So when a bank loans out your money for example, they will be able to easily pay you back and give you a little bonus as a “thank you” for letting them use your money. 
                    More people who have a high yield savings account with a bank means more money for the bank to loan and more profits gained from interest from giving out more/higher loans. 
                    For this reason, banks are competing with each other to have the highest possible APY where they can still churn a good profit and attract the most clients. 
                </p>
                <h2>
                    Things to keep in mind
                </h2>
                <p>
                    Here are some other things to keep in mind. 
                    As you know, sometimes banks come and go and there’s always a little bit of risk. 
                    If the world ends and the bank you have your money in crashes and burns, the FDIC should insure up to $250,000. 
                    So you definitely don’t want to keep your entire life savings in there but these are still great options for saving up smaller sums and as a student who I presume won’t have that much anyways, it’s a good spot to keep your money as opposed to a regular savings account. 
                </p>
                <p>
                    Most of the time, a 4-5% APY won’t beat inflation but regardless, the reason you would want to open up a high yield savings account is because that would be way more productive than accumulating nothing by keeping your cash under your bed or something. 
                </p>
                <p>
                    Another thing to keep in mind, is that there is a yearly withdrawal limit. 
                    This ties back to how the bank utilizes your money for their own business purposes. 
                    With this limit, banks won’t have to worry about people freely withdrawing money too often while they are loaning to others. 
                    For example, if there were no limit, instead of 20% of clients making withdrawals at a given time, maybe 50% of clients will be making withdrawals. 
                    If a bank loaned out 70% of their clients’ money during this time, they would not be able to accommodate the 50% of clients that want to make a withdrawal. 
                    As you can see, this can become very chaotic very fast and so the withdrawal limit is put in place because of this. 
                </p>
                <p>
                    Different banks also may have different terms and conditions. 
                    Some banks may require you to set up a direct deposit to your high yield savings account. 
                    This ensures that you will continue to put in money over time so that even if they don’t gain as many customers they will still have a growing sum to work with. 
                    There may also be a minimum deposit or even a fee. This may vary on the bank so look closely at the terms and conditions. 
                </p>
                <h2>
                    Picking a bank
                </h2>
                <p>
                    When deciding where you want to open up a high yield savings account there are a couple factors you’ll want to look into. 
                    Of course, the APY. 
                    Don’t necessarily go with a flashy bank with the highest APY, find an established and trusted bank that has somewhat of a history so you know your money is going into the right hands. 
                    By doing a quick search, there are many websites that show banks with the best APY for a given year. 
                    From there, you can narrow down the list and choose a bank you feel good about. 
                    You’ll also want to double check for any fees. 
                    Most of the time, it really doesn’t make sense to pay the fee so just find a better bank. 
                    As mentioned earlier, also look at the terms and conditions. 
                    Different banks have different requirements and some may be better suited for the type of income you have. 
                    If you don’t have an income, it wouldn’t make sense for a bank that requires you to set up a direct deposit. 
                    You also want to make sure it’s FDIC insured! 
                    This is protection for up to $250,000 that we mentioned earlier. 
                </p>
                <h2>
                    Sources:
                </h2>
                <a href='https://www.sofi.com/learn/content/savings-account-withdrawal-limit/'>Sofi</a>
                <a href='https://www.cnbc.com/select/pros-and-cons-high-yield-savings-accounts/'>CNBC</a>
            </div>
            <Footer/>
        </div>
    )
}

export default CardComp
