import React from 'react'
import "./Heading.css"
export const Heading = ({text,textSize,marginBlock}) => {
    console.log(textSize)
  return (
    <div className='line-heading' style={{fontSize:textSize,marginBlock:marginBlock}}
    >{text}</div>
  )
}
