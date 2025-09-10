import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(res => res.json())
      .then(data => {
        data.results.forEach(pokemon => {
          fetch(pokemon.url)
            .then(res => res.json())
            .then(details => {
              // Aggiungi solo se non è già presente
              setPokemons(prev =>
                prev.find(p => p.id === details.id) ? prev : [...prev, details]
              );
            });
        });
      });
  }, []);

  if (pokemons.length === 0) return <div className="text-center mt-5">Loading....</div>;

  const filteredPokemonName = pokemons.filter((pokemon) =>{
        return pokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
  })

  return (
    <div className="container my-4">
      <div className="input-group mb-5 border">
        <input 
        type="text" 
        placeholder="cerca pokemon per nome"
        className=""
        value={searchPokemon}
        onChange={(event) => setSearchPokemon(event.target.value)}
        />
      </div>
      <div className="row gy-4">
        {filteredPokemonName.sort((a, b) => a.id - b.id)
            .map((pokemon) => (
            <div key={pokemon.id} className="col-12">
                <div className="card border-danger shadow-lg poke-card d-flex flex-row align-items-center">
                    <div className="p-3 d-flex align-items-center">
                    <img
                        className="poke-img"
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                    </div>
                    <Link
                    to={`/pokedex/${pokemon.id}`}
                    className="text-decoration-none flex-grow-1"
                    style={{ color: 'inherit' }}
                    >
                    <div className="card-body text-start d-flex flex-column justify-content-center">
                        <h2 className="card-title text-capitalize fs-2">{pokemon.name}</h2>
                        <div>
                        {pokemon.types.map(({ type }) => (
                            <span key={type.name} className="badge bg-danger text-capitalize mx-1 fs-6">
                            {type.name}
                            </span>
                        ))}
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Pokedex;
