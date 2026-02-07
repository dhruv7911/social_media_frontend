import React, { useState,useEffect } from 'react'

import "./NoticeBar.css"
export const NoticeBar = () => {
    const [visible,setVisible]=useState(true)
    function closeParent(){
        setVisible(false)
    }
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    
    // cleanup if component unmounts
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [visible])
  if(!visible) return null
  return (
    <div className='notice-bar-parent'>
        <div className='notice-bar-card'>
            <button onClick={closeParent} className='close-button-notice-board'>&#10005;</button>
            <img
                src='/warning.jpg'
            />
            <h2 className='notice-bar-heading'>Error</h2>
            <p>User already registered</p>
        </div>
    </div>
  )
}
export default NoticeBar
