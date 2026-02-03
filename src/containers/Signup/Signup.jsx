import React, { useEffect, useState } from 'react'
import "./Signup.css"
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'
import GoogleButton from '../../components/GoogleButton/GoogleButton'
import { validate } from './validate'
import { InputError } from './InputError'
const Signup = () => {
    const [error, setError] = useState({})
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
        console.log(formData)
    }

    async function req() {
        const result = validate(formData);
        if (result.isValid) {
            const url = "http://localhost:8080/server/api/register";
            try{
                const response = await fetch(url,{
                    method:"POST",
                    body: JSON.stringify({
                        Username:formData.Username,
                        Email:formData.Email,
                        Password:formData.Password,
                        ConfirmPassword:FormData["Confirm Password"]
                    })
                })
            }catch(error){
                console.log(error.message)
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
                
                <GoogleButton
                    name="Continue with Google"
                />

            </div>
        </div>
    )
}
export default Signup;