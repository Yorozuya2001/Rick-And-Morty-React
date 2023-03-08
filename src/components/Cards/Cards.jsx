import Card from "../Card/Card";
import { DivContainer } from "./style-cards";

export default function Cards(props) {
  const { characters } = props;
  return (
    <DivContainer>
      {characters.map(({ name, species, gender, image }) => {
        return (
          <Card
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </DivContainer>
  );
}
