import React, { useState } from 'react'
import "./Signup.css"
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'
const Signup = () => {
    const handleChange = (field,value)=>{
        setFormData((prev)=>({
            ...prev,
            [field]:value
        }))
        console.log(formData)
    }
    const [formData,setFormData]=useState({
        Email:"",
        Username:"",
        Password:"",
        "Confirm Password":""
    });
    function request(){
        
    }
    const [isLoading,setLoading]=useState(false)
    return (
        <div className='signup_form_parent'>  
            <Logo height={40}/>
        <div className='signup_form'>
            
            <h2 className='signup_heading'>Sign up to ThinkTalk</h2>
            <Input
                name="Email"
                key="Email"
                value={formData["Email"]}
                onChange={handleChange}
            />
            <Input
                name="Username"
                key="Username"
                value={formData["Username"]}
                onChange={handleChange}
            />
            <Input
                name="Password"
                key="Password"
                value={formData["Password"]}
                onChange={handleChange}
            />
            <Input
                name="Confirm Password"
                key="Confirm Password"
                value={formData["Confirm Password"]}
                onChange={handleChange}
            />
            <div style={{marginBottom:20}}>

            </div>
            
            <Button
                isLoading={isLoading}
                name="Sign up"
                onClick={request}
            />
        </div>
        </div>
    )
}
export default Signup;