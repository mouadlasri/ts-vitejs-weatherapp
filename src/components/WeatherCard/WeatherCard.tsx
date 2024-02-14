import React, { useState } from "react";

import { Weather } from "../../models/Weather";

import "./WeatherCard.css";

interface WeatherCardProps {
  weather: Weather;
}

// interface WeatherCardProps {
//   weatherData: Weather[];
// }

const iconUrl = "http://openweathermap.org/img/w/";

export const WeatherCard = ({ weather }: WeatherCardProps) => {
  const currentWeather = weather;

  return (
    <div className="weather">
      {/* Top Part of Card */}
      <div className="top">
        <div>
          <p className="city">{currentWeather.name}</p>
          <p className="weather-description">{currentWeather.weather[0].description}</p>
        </div>
        <img alt="weather" className="weather-icon" src={iconUrl + currentWeather.weather[0].icon + ".png"} />
      </div>

      {/* Bottom Part of Card */}
      <div className="bottom">
        <p className="temperature">{currentWeather.main.temp}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="paremeter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-row">Feels like</span>
            <span className="parameter-value">{currentWeather.main.feels_like}C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-row">Wind</span>
            <span className="parameter-value">{currentWeather.wind.speed}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-row">Humidity</span>
            <span className="parameter-value">{currentWeather.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-row">Pressure</span>
            <span className="parameter-value">{currentWeather.main.pressure}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
