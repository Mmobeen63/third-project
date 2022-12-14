import React from "react";
import { useState,useEffect } from "react";

export const TextComponent=()=>{
    const [formData,setFormData]=useState({
        firstLine:'',
        secondLine:''
    })
    
    const[meme,setMeme]=useState({
        topText:'',
        bottomText:'',
        randomImage :''
    });
    const[memeData,setMemeData]=useState([])
    
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=> res.json())
        .then(myData=> setMemeData(myData.data.memes))
    },[])
    console.log(memeData);

    const styles={
    'background-image': `url(${meme.randomImage})`,
    'background-repeat': 'no-repeat',
    'background-size':'cover' 
    }
    
    const getNewMeme=()=>{
        const generateRandomNumber= Math.floor(Math.random()*memeData.length)
        setMeme(prevState=> ({
            prevState, randomImage: memeData[generateRandomNumber].url}) 
        )
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
            </div>
            <div id='button'>
                <button className="memeButton" onClick={getNewMeme}> Get a New Meme Image</button>
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
