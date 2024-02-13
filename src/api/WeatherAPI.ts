// WeatherAPI.ts
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather/";

interface WeatherResponse {
  // Define structure according to the API response
  main: {
    temp: number;
    humidity: number;
  };
  weather: [{ description: string }];
  name: string; // City name
}

const WeatherAPI = {
  fetchWeather: async (city: string): Promise<any | null> => {
    console.log("City is:", city);
    const url = `api/?q=${city.name}&appid=${API_KEY}&units=metric`;
    try {
      const response = await fetch(url, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        referrerPolicy: "no-referrer",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) throw new Error("Weather data fetch failed.");
      const data = await response.json();
      console.log("Weather data:", data);
      return data;
    } catch {
      console.error("Weather data fetch failed.");
      return null;
    }
  },
};

export default WeatherAPI;
