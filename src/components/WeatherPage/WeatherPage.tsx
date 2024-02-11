import React from "react";

import "./WeatherPage.css";

import { WeatherCard } from "../WeatherCard";
import { SearchBar } from "../SearchBar";

// This is the WeatherPage component
// This component is the parent component of the WeatherCard component and Search component
// This component will fetch the weather data from the OpenWeatherMap API
// This component will pass props (weather data and search query) to the WeatherCard and Search components

// This component will have the following state:
// - weatherData: This state will store the weather data fetched from the OpenWeatherMap API
// - searchQuery: This state will store the search query entered by the user

// This component will have the following methods:
// - fetchWeatherData: This method will fetch the weather data from the OpenWeatherMap API
// - handleSearch: This method will update the searchQuery state based on the user input

// This component will render the following:
// - WeatherCard component
// - Search component

// This component will pass the following props to the WeatherCard component:
// - weatherData

// This component will pass the following props to the Search component:
// - searchQuery
// - handleSearch

// MOCK_DATA is the mock weather data that will be used to test the WeatherCard component
// This data will be replaced with the actual weather data fetched from the OpenWeatherMap API

const MOCK_DATA = [
  {
    id: 1,
    name: "London",
    weather: {
      main: "Clouds",
      description: "scattered clouds",
      icon: "04d",
    },
    main: {
      temp: 20,
      feels_like: 18,
      humidity: 70,
      pressure: 15,
    },
    wind: {
      speed: 5,
      deg: 180,
    },
  },
  {
    id: 2,
    name: "New York",
    weather: {
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
    main: {
      temp: 25,
      feels_like: 23,
      humidity: 60,
      pressure: 30,
    },
    wind: {
      speed: 10,
      deg: 270,
    },
  },
  // ... similar data for 8 more cities
];

export const WeatherPage = () => {
  return (
    <div className="weather-page-wrapper">
      <div className="weather-page-container">
        <SearchBar />
        <WeatherCard initialWeather={MOCK_DATA[0]} />
      </div>
    </div>
  );
};
