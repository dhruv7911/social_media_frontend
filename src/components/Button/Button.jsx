import React, { useState } from 'react'
import "./Button.css"
export const Button = ({isLoading,name}) => {
  
  return (
    <>
    <button className='button_button'>
        {isLoading?<span className="spinner"></span>:name}
    </button>
    </>
  )
}
export default Button;
