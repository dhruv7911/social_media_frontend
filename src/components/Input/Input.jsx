import React from 'react'
import "./Input.css"
const Input = (props) => {
  return (<>
  <p className='input_heading'>{props.name}</p>
  <input
        className="input_input"
        value={props.value}
        onChange={(e)=>{props.onChange(props.name,e.target.value)}}

    />
  </>
    
  )
}

export default Input