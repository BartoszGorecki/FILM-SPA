import React from 'react'
import { Link } from 'react-router-dom'


const Navigation = (props) => {
    return (
        <div className="navigation">
            <div className="nav_content">
                <p><Link to="/">Home</Link> / {props.title}</p>
            </div>
        </div>
    )
}

export default Navigation
