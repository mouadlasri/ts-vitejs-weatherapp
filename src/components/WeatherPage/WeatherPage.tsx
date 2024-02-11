import React from "react";

import "./WeatherPage.css";

import { WeatherCard } from "../WeatherCard";

export const WeatherPage = () => {
  return (
    <div className="weather-page-wrapper">
      <div className="weather-page-container">
        <WeatherCard />
      </div>
    </div>
  );
};
