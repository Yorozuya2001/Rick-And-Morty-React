import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import characters from "./data.js";

function App() {
  return (
    <div className="backGroundColor">
      <div className="App" style={{ padding: "25px" }}>
        <div>
          <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
        <div>
          <Cards characters={characters} />
        </div>
      </div>
    </div>
  );
}

export default App;
