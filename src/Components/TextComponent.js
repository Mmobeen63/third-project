import React from "react";
import { useState } from "react";
import data from "../data";

export const TextComponent=()=>{
    
    const[meme,setMeme]=useState({
        topText:'',
        bottomText:'',
        randomImage:'D:\Third Project\third-project\src\Assets\memeimg.png  '
    });
    const[image,setImage]=useState('')
    // const[secondLine, setSecondLine]=useState('');
    const styles={
    'background-image': `url(${meme.randomImage})`,
    'background-repeat': 'no-repeat',
    'background-size': 'contain'
    }
    
    const getNewMeme=()=>{
        const imageArray= data.url;
        const generateRandomNumber= Math.floor(Math.random()*imageArray.length)
        setMeme(prevState=> ({prevState,randomImage: data.url[generateRandomNumber]}) )
    }
    return(
        <div className="Main">
            <div className="TextContainer">
                <input type='text' placeholder="Enter First Line"></input>
                <input type='text'placeholder="Enter Second Line" ></input>
            </div>
            <div id='button' >
                <button onClick={getNewMeme}> Get a New Meme Image</button>
            </div>
            <section style={styles}>
                <h1>This is Levi Ackerman</h1>
            </section>
        </div>
    )
}
