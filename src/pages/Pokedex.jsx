import { useEffect, useState } from "react";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, []);

  if(!pokemon) return <div>Loading....</div>;

  return (
    <>
      <div className="container text-center">
        <div className="col-12">
          <img className="img-fluid" src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
        </div>
      </div>
    </>
  )
}

export default Pokedex;