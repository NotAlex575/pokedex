import { useEffect, useState } from "react";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, []);

  if (!pokemon) return <div>Loading....</div>;

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card border-danger shadow-lg w-35">
          <img
            className="card-img-top p-3 img-fluid mx-auto d-block"
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <div className="card-body text-center">
            <h2 className="card-title text-capitalize fs-2">{pokemon.name}</h2>
            <div>
              {pokemon.types.map(({ type }) => (
                <span
                  key={type.name}
                  className="badge bg-danger text-capitalize mx-2 fs-5"
                >
                  {type.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pokedex;