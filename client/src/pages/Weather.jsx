import { useState } from "react";
import "../styles/Weather.css";
import { getWeather, getForecast } from "../services/weatherService";
import axios from "axios";

export default function Weather() {

  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // SEARCH WEATHER
  const handleSearch = async () => {

    if (!city) return;

    try {

      const weatherRes = await getWeather(city);
      const forecastRes = await getForecast(city);

      setWeather(weatherRes.data);

      // Pick one forecast per day
      const dailyForecast = forecastRes.data.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(dailyForecast);

      setSuggestions([]);

    } catch (error) {
      alert("Weather fetch error");
      console.log(error);
    }
  };

  // AUTOCOMPLETE CITY
  const handleCityChange = async (e) => {

    const value = e.target.value;

    setCity(value);

    if (value.length < 2) {
      setSuggestions([]);
      return;
    }

    try {

      const res = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${import.meta.env.VITE_WEATHER_KEY}`
      );

      setSuggestions(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <div className="weather">

      <h1>Weather Dashboard</h1>

      {/* SEARCH BOX */}

      <div className="search-box">

        <input
          placeholder="Enter City Name"
          value={city}
          onChange={handleCityChange}
        />

        <button onClick={handleSearch}>Search</button>

        {/* CITY SUGGESTIONS */}

        {suggestions.length > 0 && (

          <div className="suggestions">

            {suggestions.map((s, index) => (

              <div
                key={index}
                className="suggestion-item"
                onClick={() => {
                  setCity(s.name);
                  setSuggestions([]);
                }}
              >
                {s.name}, {s.country}

              </div>

            ))}

          </div>

        )}

      </div>

      {/* CURRENT WEATHER */}

      {weather && (

        <div className="weather-card">

          <h2>{weather.name}</h2>

          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="weather icon"
          />

          <p className="description">
            {weather.weather[0].description}
          </p>

          <p>Temperature: {weather.main.temp}°C</p>

          <p>Humidity: {weather.main.humidity}%</p>

          <p>Wind Speed: {weather.wind.speed} km/h</p>

        </div>

      )}

      {/* 5 DAY FORECAST */}

      {forecast.length > 0 && (

        <div className="forecast-container">

          {forecast.map((day, index) => (

            <div className="forecast-card" key={index}>

              <p className="forecast-date">
                {new Date(day.dt_txt).toLocaleDateString()}
              </p>

              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="forecast icon"
              />

              <p>{day.weather[0].main}</p>

              <p>{day.main.temp}°C</p>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}