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
    const URL_BASE = "http://localhost:3001";

    fetch(`${URL_BASE}/onsearch/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id && !idExist(data.id)) {
          setCharacters((oldCharacters) => [...oldCharacters, data]);
        } else {
          data.id
            ? alert("No se permiten duplicados")
            : alert("El id no existe");
        }
      })
      .catch((err) => console.log(err));
  };

  const getRandomCharacter = () => {
    const randomID = Math.floor(Math.random() * (827 - 1) + 1);

    if (characters.length === 827) {
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
