import React, { useState,useEffect } from 'react'

import "./NoticeBar.css"
export const NoticeBar = ({message_heading,message,remove,logo}) => {
  return (
    <div className='notice-bar-parent'>
        <div className='notice-bar-card'>
            <button onClick={remove} className='close-button-notice-board'>&#10005;</button>
            <img
                src={logo}
            />
            <h2 className='notice-bar-heading'>{message_heading}</h2>
            <p className='notice-bar-para'>{message}</p>
        </div>
    </div>
  )
}
export default NoticeBar
