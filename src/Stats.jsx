import Items from "./items";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

function Stats() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((Response) => Response, json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      hoi hoi
      <Items key={id} pokemon={pokemon} />
    </div>
  );
}

export default Stats;
