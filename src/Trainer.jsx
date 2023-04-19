import React, { useState, useEffect } from "react";
import "./index.css";

const Trainer = () => {
  const [pokemon, setPokemon] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=180"
      );
      const data = await response.json();
      const pokemonData = await Promise.all(
        data.results.map(async (p) => {
          const pokemonResponse = await fetch(p.url);
          return pokemonResponse.json();
        })
      );
      setPokemon(pokemonData);

      const randomPokemonData = pokemonData.slice().sort(() => 0.5 - Math.random()).slice(0, 6);
      setRandomPokemon(randomPokemonData);
    }

    fetchPokemon();
  }, []);

  return (
    <div>
      {randomPokemon.map((p) => (
        <div
          key={p.id}
          className={`card w-[20%] rounded-3xl m-8 cursor-pointer ${p.types
            .map((t) => `bg-${t.type.name}-type`)
            .join(" ")}`}
          onClick={() => (window.location.href = `./Stats/${p.id}`)}
        >
          <p className="text-center">{p.id}</p>
          <p className="text-center">{p.name}</p>
          <div className="text-center">
            {p.types.map((t) => (
              <span key={t.type.name}>{t.type.name}</span>
            ))}
          </div>
          <img
            className="w-[40%] m-auto"
            src={p.sprites.other["official-artwork"].front_default}
            alt={p.name}
          />
        </div>
      ))}
    </div>
  );
};

export default Trainer;
