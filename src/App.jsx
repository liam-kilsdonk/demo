import React, { useEffect, useState } from "react";
import "./index.css";
import "./cardEffect.jsx";

function PokeList({ naam }) {
  const [pokemon, setPokemon] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(naam);

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
    }
    fetchPokemon();
  }, []);

  const filteredPokemon = pokemon.filter((p) =>
    p.name.includes(searchQuery.toLowerCase())
  );

  return (
    <div className="poki-block flex flex-wrap poki-natuur divide-x bg-[url('src/assets/pokemon-back.jpg')] bg-no-repeat bg-fixed bg-cover">
      <div className="bg-fire-type"></div>
      <div className="bg-water-type"></div>
      <div className="bg-grass-type"></div>
      <div className="bg-electric-type"></div>
      <div className="bg-bug-type"></div>
      <div className="bg-normal-type"></div>
      <div className="bg-poison-type"></div>
      <div className="bg-ground-type"></div>
      <div className="bg-fighting-type"></div>
      <div className="bg-psychic-type"></div>
      <div className="bg-flying-type"></div>
      <div className="bg-dragon-type"></div>
      <div className="bg-fairy-type"></div>
      <div className="w-full">
        <input
          className="w-full"
          type="text"
          placeholder="Search Pokémon"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>
      {filteredPokemon.map((p) => (
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
            className="w-[65%] m-auto"
            src={p.sprites.other["official-artwork"].front_default}
            alt={p.name}
          />
        </div>
      ))}
    </div>
  );
}

export default PokeList;
