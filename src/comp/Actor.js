import React from 'react'
import { IMAGE } from './api'


const Actor = (props) => {

    const POSTER_SIZE = "w154"

    return (
        <div className="actor">

            <div className="actor_img">
                <img src={(props.actor.profile_path) ? `${IMAGE}${POSTER_SIZE}${props.actor.profile_path}` : 'https://via.placeholder.com/240x160.png?text=No+Image'} />
            </div>

            <div className="actor_text">
                <span className="actor_name">{props.actor.name}</span>
                <span className="actor_char">{props.actor.character}</span>
            </div>

        </div>
    )
}

export default Actor
