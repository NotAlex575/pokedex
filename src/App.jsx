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
        <Route element={<Defaultlayout></Defaultlayout>}>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/pokedex">
            <Route path="" element={<Pokedex></Pokedex>}></Route>
            <Route path=":id" element={<PokemonSingle></PokemonSingle>}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
