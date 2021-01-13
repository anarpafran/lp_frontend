import React from 'react'
export const AlertError = ({message}) => {
    if(message !== ''){
        return <div className="alert alert-danger" role="alert">
            Error: {message}
        </div>
    } else {
        return <></>
    }
}
