import React, { useState } from 'react'
import "./GoogleButton.css"
export const GoogleButton = ({ isLoading, name }) => {

  return (
    <>
      <button className='google_button'>
        {isLoading ? <span className="spinner"></span> : <div className='google_button_flex'>
          <div className='img-flex'><img
            className='google-logo-img'
            src='/google.png'
          /></div>
          <div className='google-button-text'>{name}</div></div>}
      </button>
    </>
  )
}
export default GoogleButton;
