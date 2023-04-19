import React from "react";
import { useState, useEffect } from "react";
// import logo from './logo.svg';
import "./App.css";

const pokedex = () => {
  const [pokidex, setPokidex] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        const informations = data.resulta.map((result) =>
          fetch(result.url).then((response) => response.json())
        );

        information.all(informations).then((pokemonData) => {
          setPokemonList(
            pokemonData.map((data) => ({
              id: data.id,
              name: data.name,
              sprite: data.sprites.front_default,
            }))
          );
        });
      });
  }, []);

  return (
    <div className="pokiblok">
        <div className="">
            <img src={pokemon.sprite} alt={pokemon.name} />
        </div>
        <div className=""></div>
        <div className=""></div>
    </div>
  )
};
