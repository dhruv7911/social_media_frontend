import React from 'react'
import "./Input.css"
const Input = ({name,value,onChange,onBlur}) => {
  return (<>
 
  <input
        className="input_input"
        value={value}
        placeholder={name}
        onChange={(e)=>{onChange(name,e.target.value)}}
        onBlur={()=>{onBlur(name)}}

    />
  </>
    
  )
}

export default Input