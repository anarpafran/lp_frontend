import React from 'react'
export const AlertState = (props) => {
    const type = props.type;
    const message = `Your request was ${type.toLowerCase()}`
    if(type === 'Declined'){
        return <div className="alert alert-danger" role="alert">
            {message}
        </div>
    } else if(type === 'Undecided') {
        return <div className="alert alert-warning" role="alert">
            {message}
        </div>
    } else if(type === 'Approved'){
        return <div className="alert alert-success" role="alert">
            {message}
        </div>
    } else {
        return <div></div>
    }
}
