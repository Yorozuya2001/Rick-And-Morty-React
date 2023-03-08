import {
  ButtonSearch,
  InputSearch,
} from "./style-searchBar";

export default function SearchBar({ onSearch }) {
  return (
    <div>
      <InputSearch type="search" placeholder="Buscar personaje..." />
      <ButtonSearch onClick={(id) => onSearch(id)}>Agregar</ButtonSearch>
    </div>
  );
}
