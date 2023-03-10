import Card from "../Card/Card";
import { DivContainer } from "./style-cards";

export default function Cards(props) {
  const { characters } = props;
  return (
    <DivContainer>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id = {id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={props.onClose}
          />
        );
      })}
    </DivContainer>
  );
}
