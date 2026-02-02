import React, { useState } from 'react'
import "./Button.css"
export const Button = ({isLoading,name,onClick}) => {
  
  return (
    <>
    <button onClick={onClick} className='button_button'>
        {isLoading?<span className="spinner"></span>:name}
    </button>
    </>
  )
}
export default Button;
