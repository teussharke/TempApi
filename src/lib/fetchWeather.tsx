import axios from 'axios';



const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '0c09398048e493ed8f8ef03cee646572';
export const fetchWeather = async (query: string) => {
  const response = await axios.get(URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    }
  });
  return response.data;
}