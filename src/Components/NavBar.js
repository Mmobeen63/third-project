import React from 'react'
import logo from '../Assets/Troll Face.png'
import { CSSProperties } from 'react'
export const NavBar = ()=>{
    const styles={
        color:'white',
        'font-weight':200,
        'font-size':'20px'
    }
    return(
        <header className='NavContainer'>
            <div className='NavContent'>
                <img src={logo} />
                <h1>Meme Generator</h1>
            </div>
            <div>
                <p style={styles}>React Course-Project 3</p>
            </div>
        </header>
    )
}