import React from 'react';
import './Weather.css';

const Weather = ({weatherData}) => (
    
    (
        <div className='weather-container'>
            <div className='weather-icon-container'>
                <img src={weatherData.current.condition.icon} alt="weather icon"/>
            </div>
            <div className='weather-info-container'>
                <h1>{weatherData.current.temp_c}°C</h1>
                <h2>{weatherData.current.condition.text}</h2>
            </div>
        </div>
    )
)

export default Weather