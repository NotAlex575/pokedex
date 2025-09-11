import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [selectedPrimaryType, setSelectedPrimaryType] = useState("");
  const [selectedSecondaryType, setSelectedSecondaryType] = useState("");


  /* IMPORT API PER GENERARE LE CARD DEI POKEMON (ANCHE IN BASE AL FILTRO SICCOME SI AGGIORNA) */
  useEffect(() => {
  // RECUPERA LA LISTA DEI PRIMI 151 POKEMON (LIMIT STA PER FINO A)
  fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(res => res.json())
    // PER OGNI POKEMON NELLA LISTA (FOREACH)
    .then(data => {
      data.results.forEach(pokemon => {
        //RECUPERA I DETTAGLI COMPLETI DI QUEL POKEMON 
        fetch(pokemon.url)
          .then(res => res.json())
          .then(details => {
            // AGGIORNA LO STATO, SOLO SE IL POKEMON NON E GIA PRESENTE
            setPokemons(prev =>
              prev.find(p => p.id === details.id) ? prev : [...prev, details]
            );
          });
      });
    });
}, []);

  if (pokemons.length === 0) return <div className="text-center mt-5">Loading....</div>;

  /* LOGICA FILTRO */
  const filteredPokemon = pokemons.filter((pokemon) => {
    const query = searchPokemon.toLowerCase();

    //LOGICA FILTRO PER NOME POKEMON (QUI SI USA UN INPUT TYPE TEXT)
    const matchName = pokemon.name.toLowerCase().includes(query);

    //FILTRO LOGICA IN BASE AL TIPO n.1 (QUI SI USA LA NAVBAR)
    const matchPrimaryType = selectedPrimaryType
      ? pokemon.types.some(t => t.type.name === selectedPrimaryType)
      : true; // se non selezioni nulla, mostra tutti o quello filtrato singolarmente (se nell'altro primary type è stato inserito una value)

    //FILTRO LOGICA IN BASE AL TIPO n.2 (QUI SI USA LA NAVBAR)
    const matchSecondaryType = selectedSecondaryType
      ? pokemon.types.some(typeInfo => typeInfo.type.name === selectedSecondaryType)
      : true; // se non selezioni nulla, mostra tutti o quello filtrato singolarmente (se nell'altro primary type è stato inserito una value)

    //RITORNIAMO LE VALUE DI TUTTI I FILTRI, IN MODO TALE CHE TROVEREMO I POKEMON (O IL POKEMON) IN BASE A TUTTI I FILTRI INSERITI
    return matchName && matchPrimaryType && matchSecondaryType;
});

  return (
    <div className="container my-4">
      {/* FILTRO POKEMON PER NOME */}
      <div className="input-group mb-5 border p-2">
        <input
          type="text"
          placeholder="Cerca Pokémon per nome"
          className="form-control me-5"
          value={searchPokemon}
          onChange={(event) => setSearchPokemon(event.target.value)}
        />
        {/* FILTRO PER POKEMON TIPO 1*/}
        <div className="dropdown">

          {/* BUTTON CHE SERVE PER RENDERE UTILIZZABILE LA TENDINA DEL DROPDOWN */}
          <button className="btn btn-secondary dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedPrimaryType || "Tipo"}
          </button>

          {/* MENU DROPDOWN CON TUTTI I TIPI DEI POKEMON */}
          <ul className="dropdown-menu">

            {/* MAPPING DI TUTTI I TIPI PRESENTI IN POKEMONS (OVVERO QUELLI CHE STANNO NELL'API) */}
            {pokemons
              .flatMap(pokemon => pokemon.types.map(({ type }) => type.name))
              .filter((typeName, index, allTypes) => allTypes.indexOf(typeName) === index) // tipi unici
              .map((typeName) => (
                <li key={typeName}>
                  <button
                    className="dropdown-item"
                    onClick={() => setSelectedPrimaryType(typeName)}
                  >
                    {typeName}
                  </button>
              </li>
            ))}
          </ul>
        </div>
        {/* FILTRO PER POKEMON TIPO 2 (O 1 SE NEL PRIMO DROPDOWN NON ESISTE UNA VALUE INSERITA) */}
        <div className="dropdown">

          {/* BUTTON CHE SERVE PER RENDERE UTILIZZABILE LA TENDINA DEL DROPDOWN */} 
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedSecondaryType || "Tipo"}
          </button>

          {/* MENU DROPDOWN CON TUTTI I TIPI DEI POKEMON */}
          <ul className="dropdown-menu">

            {/* MAPPING DI TUTTI I TIPI PRESENTI IN POKEMONS (OVVERO QUELLI CHE STANNO NELL'API) */}
            {pokemons
              .flatMap(pokemon => pokemon.types.map(({ type }) => type.name))
              .filter((typeName, index, allTypes) => allTypes.indexOf(typeName) === index) // tipi unici
              .map((typeName) => (
                <li key={typeName}>
                  <button
                    className="dropdown-item"
                    onClick={() => setSelectedSecondaryType(typeName)}
                  >
                    {typeName}
                  </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CARD DEI POKEMON */}
      <div className="row gy-4">
        {/* GENERAZIONE DELLE CARD DEI POKEMON CON SORT PER ORDINARLE DAL 1 ID IN POI (CRESCENTE) E MAPPING DI TUTTI I VALORI NECESSARI PER LA CARD*/}
        {filteredPokemon.sort((a, b) => a.id - b.id)
            .map((pokemon) => (
            <div key={pokemon.id} className="col-12">
                <div className="card border-danger shadow-lg poke-card d-flex flex-row align-items-center">
                  {/* IMMAGINE POKEMON */}
                    <div className="p-3 d-flex align-items-center">
                    <img
                        className="poke-img"
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                    />
                    </div>

                    {/* LINK CHE SERVE PER ANDARE NELLA PAGINA PokemonSingle, IN BASE AL POKEMON CLICCATO (QUINDI IN BASE ANCHE AL SUO ID) */}
                    <Link
                    to={`/pokedex/${pokemon.id}`}
                    className="text-decoration-none flex-grow-1"
                    style={{ color: 'inherit' }}
                    >
                    <div className="card-body text-start d-flex flex-column justify-content-center">
                        {/* NOME POKEMON */}
                        <h2 className="card-title text-capitalize fs-2">{pokemon.name}</h2>
                        <div>
                        {/* TIPO (O TIPI SE NE HA PIU DI UNO, PER QUESTO SI USA MAP) POKEMON*/}
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
