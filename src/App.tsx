import { useState } from 'react'
import './App.css'

export function App() {
  const [searchCity, setSearchCity] = useState('')
  async function handleSearchCity(){
    
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="Ex: Juiz de fora" value={} />
        <button type="submit">Pesquisar Cidade</button>
      </form>
    </div>
  )
}
