import React from 'react'
import { IMAGE, BACKDROP, POSTER } from './api'
import MovieThumb from './MovieThumb'


const MovieInfo = (props) => {
    console.log('z movie info ', props)

    console.log(props.production_countries)

    return (
        <div className="movieinfo" style={{ background: props.backdrop_path ? `url('${IMAGE}${BACKDROP}${props.backdrop_path}') no-repeat` : '#000' }}>
            <div className="movieinfo_content">

                <div className="movieinfo_thumb" style={{ background: `url('${IMAGE}${POSTER}${props.poster_path}')`}}></div>

                <div className="movieinfo_text">
                    <h1>{props.title}</h1>
                    { (props.genres) ? (props.genres.map( (ele, i) => {
                        return <p key={i} style={{display: 'inline-block', fontStyle: 'italic'}}>{ele.name+"\xa0"}</p>
                    })) : null }
                    <h4 className="dis">PLOT</h4>
                    <p className="disp">{props.overview}</p>
                    <h4>IMDB RATING</h4>
                    <div className="rating">
                        <meter min="0" max="100" optimum="100" low="40" high="70" value={props.vote_average ? props.vote_average * 10 : 0}></meter>
                        <p className="score">{props.vote_average * 10}/100</p>
                    </div>
                    <h4>RELEASE DATE</h4>
                    <p>{props.release_date+'\xa0'}{'/'+'\xa0'}{props.production_countries ? (props.production_countries.map( (ele, i) => {
                        return <p key={i} style={{display: 'inline-block'}}>{ele.iso_3166_1+'\xa0'}</p>
                    })) : null}{'/'}</p>
                    {props.directors.length > 1 ? <h4>DIRECTORS</h4> : <h4>DIRECTOR</h4>}
                    {props.directors.map ( (ele, i) => <p key={i}>{ele.name}</p> )}
                </div>

            </div>
        </div>
    )
}

export default MovieInfo
