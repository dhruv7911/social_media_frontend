import React from 'react'
import "./Input.css"
const Input = ({name,value,onChange,onBlur,maxLength}) => {
  return (<>
 
  <input
        className="input_input"
        value={value}
        placeholder={name}
        onChange={(e)=>{onChange(name,e.target.value)}}
        onBlur={()=>{onBlur(name)}}
        maxLength={maxLength}
    />
  </>
    
  )
}

export default Input