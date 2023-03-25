import Card from "../view/Card/Card";
import SearchBar from "../SearchBar/SearchBar";
import { DivContainer, SearchBarDivContainer } from "./style-cards";

export default function Cards({
  characters,
  onClose,
  onSearch,
  getRandomCharacter,
}) {
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
