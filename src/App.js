import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import "./App.css";
import About from "./components/view/About/About.jsx";
import Detail from "./components/view/Detail/Detail.jsx";

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

  return (
    <>
      <Nav onSearch={onSearch} />
      <div className="backGroundColor App">
        <Routes>
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:detailId" element={<Detail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
