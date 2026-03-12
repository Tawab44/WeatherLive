import axios from "axios";

// CURRENT WEATHER
export const getWeather = async (req, res) => {

  const city = req.query.city;

  try {

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    res.json(response.data);

  } catch (error) {

    console.log(error.message);
    res.status(500).json({ message: "Weather fetch error" });

  }
};


// 5 DAY FORECAST
export const getForecast = async (req, res) => {

  const city = req.query.city;

  try {

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    res.json(response.data);

  } catch (error) {

    console.log(error.message);
    res.status(500).json({ message: "Forecast fetch error" });

  }
};