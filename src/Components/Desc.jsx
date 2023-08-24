import React from 'react'
import './Desc.css';

const Desc = (props )=> {
  return (
    <div className="desc">
        <div className="plate">
            <h3>Feeels Like</h3>
            <h2>{props.weather.feels_like.toFixed()} °C</h2>

            
        </div> 

        <div className="plate">
            <h3>Min</h3>
            <h2>{props.weather.speed.toFixed()} km/h</h2>
        </div>

        <div className="plate">
            <h3>Presusure</h3>
            <h2>{props.weather.pressure.toFixed()}</h2>
        </div>

        <div className="plate">
            <h3>Humidity</h3>
            <h2>{props.weather.humidity.toFixed()} %</h2>
        </div>

    </div>
  )
}

export default Desc
