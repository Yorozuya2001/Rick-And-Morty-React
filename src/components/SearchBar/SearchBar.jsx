import { useState } from "react";
import { Button, Input } from "./style-searchBar";

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div>
      <Input
        type="search"
        onChange={handleChange}
        placeholder="Buscar personaje..."
      />
      <Button onClick={() => onSearch(id)}>Agregar</Button>
    </div>
  );
}
