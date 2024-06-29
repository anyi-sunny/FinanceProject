import React from 'react'
import NavBar from '../Components/NavBar'


// you can call this instead of using nav bar in a given page but doesnt really matter tbh

function MainLayout({children}){
    return(
        <div>
            <NavBar/>
            <div> {children} </div>
        </div>
    )
}

export default MainLayout

