import React, { useEffect, useState } from 'react'
import "./Signup.css"
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'
import GoogleButton from '../../components/GoogleButton/GoogleButton'
import { validate } from './validate'
import { InputError } from './InputError'
import { Heading } from '../../components/linedheading/Heading'
import NoticeBar from '../../components/NoticeBar/NoticeBar'
const Signup = () => {
    const [error, setError] = useState({})
    const [showNotice,setShowNotice]=useState(false)
    const [noticeLogo,setNoticeLogo]=useState()
    const [message,setMessage] = useState({})
    const [touched, setTouched] = useState({})
    const [isLoading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        Email: "",
        Username: "",
        Password: "",
        "Confirm Password": ""
    });
    useEffect(() => {
        const result = validate(formData);
        setError(result.error);
    }, [formData])
    const handleBlur = (field) => {
        setTouched(prev => ({
            ...prev,
            [field]: true
        }))
    }
    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }))
    }

    async function req() {
        const result = validate(formData);
        if (result.isValid) {
            setLoading(true);
            const url = "http://localhost:8080/server/register";
            try {
                const response = await fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        Username: formData.Username,
                        Email: formData.Email,
                        Password: formData.Password,
                        ConfirmPassword: formData["Confirm Password"]
                    })
                
                })
                const data = await response.json();
                if(!response.ok){
                    setNoticeLogo("/warning.jpg")
                    setShowNotice(true);
                    setMessage({
                        heading:"Error",
                        message:data.message
                    })
                    setLoading(false);
                }else{
                    if(data.status=="error"){
                    setNoticeLogo("/warning.jpg")
                    setShowNotice(true);
                    setMessage({
                        heading:data.status,
                        message:data.message
                    })
                    setLoading(false);
                    }else{
                    setNoticeLogo("/success.png")
                    setShowNotice(true);
                    setMessage({
                        heading:data.status,
                        message:data.message
                    })
                    setLoading(false);
                    }
                }
            } catch (error) {
                setNoticeLogo("/warning.jpg")
                console.log(error.message);
                setShowNotice(true);
                    setMessage({
                        heading:"Error",
                        message:error.message
                    })
                setLoading(false);
            }
        } else {
            setTouched({
                Email: true,
                Username: true,
                Password: true,
                "Confirm Password": true
            });
        }
    }
    function removeNotice(){
        setShowNotice(false)
    }

    return (
        <div className='signup_form_parent'>

            <div className='signup_form'>
                <h2 className='signup_heading'>Sign up</h2>
                <p className='signup_subheading'>Create your account in a seconds</p>
                <Input
                    name="Email"
                    key="Email"
                    value={formData["Email"]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={50}
                />
                <InputError
                    errorMessage={error.Email}
                    touched={touched.Email}
                />
                <Input
                    name="Username"
                    key="Username"
                    value={formData["Username"]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={50}
                />
                <InputError
                    errorMessage={error.Username}
                    touched={touched.Username}
                />
                <Input
                    name="Password"
                    key="Password"
                    value={formData["Password"]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={50}
                />
                <InputError
                    errorMessage={error.Password}
                    touched={touched.Password}
                />
                <Input
                    name="Confirm Password"
                    key="Confirm Password"
                    value={formData["Confirm Password"]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    maxLength={50}
                />
                <InputError
                    errorMessage={error["Confirm Password"]}
                    touched={touched["Confirm Password"]}
                />

                <Button
                    isLoading={isLoading}
                    name="Create an account"
                    onClick={req}
                />
                <Heading
                    
                    text="OR"
                    textSize="clamp(12px, 1vw, 16px)"
                    marginBlock="10px"
                />
                <GoogleButton
                    name="Continue with Google"
                />
                
            </div>
{showNotice ? 
  <NoticeBar
      message_heading={message.heading}
      message={message.message}
      remove={removeNotice}
      logo={noticeLogo}
  />:<></>
}

        </div>
    )
}
export default Signup;