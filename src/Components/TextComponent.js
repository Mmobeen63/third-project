import React from "react";
import { useState } from "react";
import data from "../data";

export const TextComponent=()=>{
    const [formData,setFormData]=useState({
        firstLine:'',
        secondLine:''
    })
    const[meme,setMeme]=useState({
        topText:'',
        bottomText:'',
        randomImage:'D:\Third Project\third-project\src\Assets\memeimg.png  '
    });
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
    const handleChange=(e)=>{
        setFormData(prevFormData=>{
           return  {...prevFormData, [e.target.name] : e.target.value}
    }
)}
    return(
        <div className="Main">
            <div className="TextContainer">
                <input type='text' placeholder="Enter First Line" name="firstLine" onChange={handleChange} value={formData.firstLine}></input>
                <input type='text'placeholder="Enter Second Line" name='secondLine' onChange={handleChange} value={formData.secondLine}></input>
                <input id="checkBox"type='checkbox' ></input>
            <label htmlFor="checkFor">Are you Male</label>
            </div>
            <div id='button' >
                <button onClick={getNewMeme}> Get a New Meme Image</button>
            </div>
            <section style={styles}>
                <div className="inputText">
                    <div id="firstline">
                        {formData.firstLine.length > 0 ? <h1 color="white">{formData.firstLine}</h1> : <h1>Enter First Line</h1>}
                    </div>
                    <div id="secondline">
                        {formData.secondLine.length > 0 ? <h1 color="white">{formData.secondLine}</h1>: <h1>Enter Second Line</h1>}
                    </div>
                </div>
            </section>  
        </div>
    )
}
