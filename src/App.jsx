import { useState } from "react";
import "./App.css";

export function App() {
  const [searchedCity, setSearchedCity] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div className="formulario">
      <form action="" onSubmit={handleSubmit}>
        <input type="text" 
        placeholder="Ex: Juiz de fora"
        value={searchedCity} 
        onChange={event => setSearchedCity(event.value)}/>
        <button type="submit">Pesquisar Cidade</button>
      </form>
    </div>
  );
}
