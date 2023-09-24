import { DateTime } from "luxon";

// Define of the OpenWeatherMap API key and base URL
const API_KEY = ''; //Add your openweathermap api key
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Function to fetch weather data from the OpenWeather API 
const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType)
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});

    return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  // Extracting relevant properties
    const {
        coord: {lat, lon},
        main: {temp, feels_like, temp_min, temp_max, humidity},
        name,
        dt,
        sys: {country, sunrise, sunset},
        weather,
        wind: {speed}
    } = data

    const {main: details, icon} = weather[0]

    return {lat, lon, temp, feels_like, temp_min, temp_max, humidity, name, dt, icon, country, details, sunrise, sunset, weather, speed}
}
// Function to get and format weather data asynchronously
const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData(
      "weather",
      searchParams
    ).then(formatCurrentWeather);
  
    const { lat, lon } = formattedCurrentWeather;
  
    return { ...formattedCurrentWeather};
  };

// Function to format Unix timestap to local time
const formatToLocalTime = (secs, zone, format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).
setZone(zone).toFormat(format);

// Function to generate an icon URL from a weather code
const iconUrlFromCode = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };