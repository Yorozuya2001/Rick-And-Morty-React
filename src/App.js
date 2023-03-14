import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import "./App.css";
import About from "./components/view/About/About.jsx";
import Detail from "./components/view/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
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
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
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

  return (
    <>
      <Nav />
      <div className="backGroundColor App">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/home"
            element={
              <Cards
                characters={characters}
                onClose={onClose}
                onSearch={onSearch}
                getRandomCharacter={getRandomCharacter}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
