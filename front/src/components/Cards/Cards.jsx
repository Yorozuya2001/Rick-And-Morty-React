import Card from "../view/Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import { DivContainer, SearchBarDivContainer } from "./style-cards";
import { useDispatch } from "react-redux";
import { getFavorites } from "../../redux/actions";
import { useEffect } from "react";
export default function Cards({
  characters,
  onClose,
  onSearch,
  getRandomCharacter,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);

  return (
    <>
      <SearchBarDivContainer>
        <SearchBar
          onSearch={onSearch}
          characters={characters}
          getRandomCharacter={getRandomCharacter}
        />
      </SearchBarDivContainer>

      <DivContainer>
        {characters.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              onClose={onClose}
              isInFav={false}
            />
          );
        })}
      </DivContainer>
    </>
  );
}
