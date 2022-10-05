import React from 'react'
import logo from '../Assets/Troll Face.png'
import { Link } from 'react-router-dom'

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
            <ul className='MainMenu'>
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/Signup'>
                        Signup
                    </Link>
                </li>
                <li>
                    <Link to='/StarWarsCharacter'>
                        StarWarsCharacter
                    </Link>
                </li>
            </ul>
            <div>
                <p style={styles}>React Course-Project 3</p>
            </div>
        </header>
    )
}