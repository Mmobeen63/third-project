import {React, useState} from "react";

export const Form=()=>{
    const [formData, setFormData]=useState({
        userEmail:'',
        userPassword:'',
        confirmPassword:'',
        isChecked: false
    })
    const handleChange=(e)=>{
        const{name,type,value,checked}= e.target;
        setFormData( prevFormData=> {
            return{
                ...prevFormData, [name]: type === 'checkbox'? checked:value
            }
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefualt()
        console.log('form submitted')
    }
    return(
        <div className="formContainer">
            <h1>SIGNUP</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input type='text' placeholder="Your Email" onChange={handleChange} name='userEmail' value={formData.userEmail} ></input>
                <input type='text' placeholder="Your Password" onChange={handleChange} name='userPassword' value={formData.userPassword} />
                <input type='text' placeholder="Confirm Password" onChange={handleChange} name='confirmPassword' value={formData.confirmPassword} />
                <input type='checkbox' id="isChecked" onChange={handleChange}   name='isChecked' checked={formData.isChecked} />
                    <label id="isChecked">I want to join the NewsLetter</label>
                <button> Signup</button>
            </form>
        </div>
    )
}
