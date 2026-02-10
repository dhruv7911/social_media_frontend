import React from 'react'
import "./Heading.css"
export const Heading = ({text,textSize,marginBlock}) => {
  return (
    <div className='line-heading' style={{fontSize:textSize,marginBlock:marginBlock}}
    >{text}</div>
  )
}
