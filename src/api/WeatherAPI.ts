// WeatherAPI.ts
const API_KEY = import.meta.env.VITE_OPENWEATHERMAP_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather/";

const WeatherAPI = {
  fetchWeather: async (city: string): Promise<any | null> => {
    console.log("Search term inside fetchWeater is:", city);
    const url = `api/?q=${city}&appid=${API_KEY}&units=metric`;
    try {
      const response = await fetch(url, {
        method: "GET",
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
