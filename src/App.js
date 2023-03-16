import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import "./App.css";
import About from "./components/view/About/About.jsx";
import Detail from "./components/view/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  let { pathname } = useLocation();
  const navigate = useNavigate();
  const username = "ejemplo@gmail.com";
  const password = "1password";

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

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

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  };

  return (
    <>
      {pathname !== "/" && <Nav />}
      <div className="backGroundColor App">
        <Routes>
          <Route path="/" element={<Form login={login} />} />
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
