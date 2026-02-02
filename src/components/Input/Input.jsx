import React from 'react'
import "./Input.css"
const Input = ({name,value,onChange,onBlur}) => {
  return (<>
  <p className='input_heading'>{name}</p>
  <input
        className="input_input"
        value={value}
        onChange={(e)=>{onChange(name,e.target.value)}}
        onBlur={()=>{onBlur(name)}}

    />
  </>
    
  )
}

export default Input