import React from 'react'


const HeroImage = (props) => {
    return (
        <div className="heroimage" style={{
            background: `url(${props.image}) no-repeat`
        }}>    
            <div className="heroimage_content">
                <div className="heroimage_text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </div>  
            </div>
        </div>
    )
}

export default HeroImage