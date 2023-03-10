import { useState } from "react";
import { Button, Input } from "./style-searchBar";

export default function SearchBar({ onSearch, characters }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const getRandomCharacter = () => {
    const randomID = Math.floor(Math.random() * (826 - 1) + 1);

    if (characters.some((character) => character.id === randomID)) {
      return getRandomCharacter();
    } else {
      onSearch(randomID);
    }
  };

  return (
    <>
      <Input
        type="search"
        onChange={handleChange}
        placeholder="Buscar personaje..."
      />
      <Button onClick={() => onSearch(id)}>Agregar</Button>
      <Button className="buttonRandom" onClick={getRandomCharacter}>
        Agregar personaje random
      </Button>
    </>
  );
}
