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
    const URL_BASE = "https://be-a-rym.up.railway.app/api",
      API_KEY = "738a72766c9f.da2fc0c3ddbe8477c91a";
    fetch(`${URL_BASE}/character/${id}?key=${API_KEY}`)
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
    const randomID = Math.floor(Math.random() * (826 - 1) + 1);

    if (characters.some((character) => character.id === randomID)) {
      return getRandomCharacter();
    } else {
      onSearch(randomID);
    }
  };

  return [characters, onClose, onSearch, getRandomCharacter];
};

export default useCharacters;
