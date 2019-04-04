import React from 'react'
import { calcTime, convertMoney } from './helper'


const MovieInfoBar = (props) => {
    return (
        <div className="infobar">

                <div className="infobar_part">
                    <i className="far fa-clock"></i>
                    <span className="infobar_info"> Running time: {calcTime(props.runtime)}</span>
                </div>

                <div className="infobar_part">
                    <i className="far fa-money-bill-alt"></i>
                    <span className="infobar_info">  Budget: {convertMoney(props.budget)}</span>
                </div>

                <div className="infobar_part">
                    <i className="fas fa-ticket-alt"></i>
                    <span className="infobar_info">  Revenue: {convertMoney(props.revenue)}</span>
                </div>

        </div>
    )
}

export default MovieInfoBar
