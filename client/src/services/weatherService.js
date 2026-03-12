import API from "./api";

export const getWeather = (city) => {
  return API.get(`/weather?city=${city}`);
};

export const getForecast = (city) => {
  return API.get(`/weather/forecast?city=${city}`);
};