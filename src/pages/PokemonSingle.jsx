import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PokemonSingle = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();
  const [description, setDescription] = useState("");
  const naviga = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setPokemon(data));

    fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const flavor = data.flavor_text_entries.find(
          (entry) => entry.language.name === "en"
        );
        setDescription(flavor ? flavor.flavor_text.replace(/\f/g, " ") : "");
      });
  }, [id]);

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-pokedex">
      {pokemon ? (
        <div className="card border-0 shadow-lg w-75">
          <div className="row g-0">
            {/* Left column */}
            <div className="col-md-6">
              <img
                className="bg-aqua card-img-top p-3 img-fluid mx-auto d-block"
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <div className="card-body text-center bg-red">
                <h2 className="card-title text-capitalize fs-2">
                  {pokemon.name}
                </h2>
                <div className="mb-3">
                  {pokemon.types.map(({ type }) => (
                    <span
                      key={type.name}
                      className="badge bg-primary text-capitalize mx-2 fs-5"
                    >
                      {type.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 bg-red d-flex align-items-center">
              <div className="card w-100 p-3 bg-white">
                <p className="fs-5">{description}</p>
              </div>
            </div>
          </div>
          <div className="card-body text-center bg-red">
            <div className="d-flex justify-content-around mt-3">
              <button
                className="btn btn-primary"
                disabled={pokemon.id === 1}
                onClick={() => naviga(`/pokedex/${pokemon.id - 1}`)}
              >
                vedi pokemon precedente
              </button>
              <button
                className="btn btn-primary"
                onClick={() => naviga("/pokedex")}
              >
                torna al pokedex
              </button>
              <button
                className="btn btn-primary"
                disabled={pokemon.id === 151}
                onClick={() => naviga(`/pokedex/${pokemon.id + 1}`)}
              >
                vedi pokemon successivo
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="loader">caricamento in corso...</p>
      )}
    </div>
  );
};

export default PokemonSingle;
