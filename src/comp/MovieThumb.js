import React from 'react'
import { Link } from 'react-router-dom'


const MovieThumb = (props) => {
    console.log('z thumb', props)
    return (
   
        <Link to={{ pathname: `/${props.movieId}`, movieName: `${props.movieName}`}}>
            <div className="moviethumb" style={{ background: `url(${props.image})`}}></div>    
        </Link>
        
    )
}

export default MovieThumb