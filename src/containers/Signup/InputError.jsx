import React from 'react'
import "./InputError.css"

export const InputError = ({ errorMessage, touched }) => {
    return (
        <>
            {touched && errorMessage ? 
                <div className='input-error'>{errorMessage}</div>
                : <div className='input-error' style={{visibility:"hidden"}}>HIDDEN</div>
            }
        </>
    )
}
