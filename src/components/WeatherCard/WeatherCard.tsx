import React from "react";

import "./WeatherCard.css";

export const WeatherCard = () => {
  return (
    <div className="weather">
      {/* Top Part of Card */}
      <div className="top">
        <div>
          <p className="city">City Name</p>
          <p className="weather-description">Weather Description</p>
        </div>
        <img alt="weather" className="weather-icon" src="" />
      </div>

      {/* Bottom Part of Card */}
      <div className="bottom">
        <p className="temperature">28</p>
        <div className="details">
          <div className="parameter-row">
            <span className="paremeter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-row">Feels like</span>
            <span className="parameter-value">C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-row">Wind</span>
            <span className="parameter-value">%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-row">Humidity</span>
            <span className="parameter-value">%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-row">Pressure</span>
            <span className="parameter-value">%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
