import App from "./App";
import { Link } from "react-router-dom";
import "./cardEffect.jsx";


const Items = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div>
      <img src={pokemon.sprite} alt={pokemon.name} />
      <p className="text-center">{p.name}</p>
      <p>hallo dit is een test</p>
    </div>
  );
};

export default Items;
