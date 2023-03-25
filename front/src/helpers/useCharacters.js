import { useState } from "react";

const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    const arrFilter = [...characters];
    let index = arrFilter.findIndex((character) => character.id === id);
    arrFilter.splice(index, 1);
    setCharacters([...arrFilter]);
  };

  const idExist = (id) => {
    for (const character of characters) {
      if (character.id === id) return true;
    }
    return false;
  };

  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty/onsearch";

    fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id && !idExist(data.id)) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        } else {
          data.id
            ? alert("No se permiten duplicados")
            : alert("El id no existe");
        }
      });
  };

  const getRandomCharacter = () => {
    const randomID = Math.floor(Math.random() * (5 - 1) + 1);

    if (characters.length === 4) {
      return alert("Has agregado a todos los personajes");
    }

    if (characters.some((character) => character.id === randomID)) {
      return getRandomCharacter();
    } else {
      onSearch(randomID);
    }
  };

  return [characters, onClose, onSearch, getRandomCharacter];
};

export default useCharacters;
