import { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/view/Nav/Nav";
import "./App.css";
import About from "./components/view/About/About.jsx";
import Detail from "./components/view/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Error from "./components/view/Error/Error.jsx";
import useAuthentication from "./helpers/useAuthentication.js";
import useCharacters from "./helpers/useCharacters.js";

function App() {
  let { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, login, logout] = useAuthentication();
  const [characters, onClose, onSearch, getRandomCharacter] = useCharacters();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <>
      {pathname !== "/" && <Nav logout={logout} />}
      <div className="backGroundColor App">
        <Routes>
          <Route exact path="/" element={<Form login={login} />} />
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
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
