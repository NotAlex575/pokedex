//Layout che sarà in ogni pagina della pagina
import Defaultlayout from "./layouts/Defaultlayout"
//import che servono per il routing
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Pokedex from "./pages/Pokedex"
import PokemonSingle from "./pages/PokemonSingle"
//SERVIZIO ROUTING
import { BrowserRouter, Routes, Route } from "react-router-dom" 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
