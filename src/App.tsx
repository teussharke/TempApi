import { useState } from 'react'
import { fetchWeather } from './lib/fetchWeather'
import reactLogo from './assets/react.svg'
import './App.css'

interface IWeather {
  main: {
    temp: number;
    country: string;
    desctiption: string;
    icon: string;
  };

  name: string;
  sys: {
    country: string;
  };
 
  weather: 

}

export function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState<IWeather>({} as IWeather);

  const serch = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery('');

      console.log(data);
    }
  }

  return (
    <div className='main-container'>
      <input
        type="text"
        className="search"
        placeholder="Pesquise sua cidade"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={serch} />
      {weather.main && (
        <div className='city'>
          <h2 className='city-name'>
            <span>
              {weather.name}
            </span>
            <sup>
              {weather.sys.country}
            </sup>
          </h2>
          <div className='city-temp'>
            {Math.round(weather.main.temp)}
            <sup>
              &deg;C
            </sup>
          </div>
          <div className='info'>
            <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
            <p>{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  )
}


