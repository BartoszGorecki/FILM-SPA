import React from 'react'


const FourColGrid = (props) => {

    const renderElements = () => {
        const gridElements = props.children.map( (ele, i) => {
           return (
               <div key={i} className="grid_ele">
                    {ele}
               </div>
           )
        })
        return gridElements
    }

    return (
        <div className="grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="grid_content">
                {renderElements()}
            </div>
        </div>
    )
}

export default FourColGrid