import React from 'react'
import "./index.scss"

const IconBadge = (props) => {
    return (
        <div className="icon-badge-container" style={{backgroundColor:props.backgroundColor, color: props.color}}>
            {props.children}
        </div>
    )
}

export { IconBadge }
