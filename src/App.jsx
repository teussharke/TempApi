import { useState, useEffect } from "react";
import "./App.css";

export function App() {
  const [searchedCity, setSearchedCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(searchedCity);
  }

  useEffect(() => {
    async function getCityWeather() {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=0c09398048e493ed8f8ef03cee646572"
      );
      const data = await response.json();
      setCIty(searchedCity);
      console.log(data);
    }
    getCityWeather();
  }, []);

  return (
    <div className="formulario">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ex: Juiz de fora - MG"
          value={searchedCity}
          onChange={(event) => setSearchedCity(event.target.value)}
        />
        <button type="submit">Pesquisar Cidade</button>
      </form>
    </div>
  );
}
