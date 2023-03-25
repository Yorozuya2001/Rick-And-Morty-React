import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { InfoContainer, Section, TextContainer, Img } from "./style-detail";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { name, status, species, origin, image } = character;
  const { detailId } = useParams();

  useEffect(() => {
    const URL_BASE = "http://localhost:3001/rickandmorty/detail";

    fetch(`${URL_BASE}/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <Section>
      {Object.keys(character).length !== 0 && (
        <InfoContainer>
          <TextContainer>
            <h2>Nombre: {name}</h2>
            <p>Estado Actual: {status}</p>
            <p>Especie: {species}</p>
            <p>Origen: {origin.name}</p>
          </TextContainer>
          <Img src={image} alt={name} />
        </InfoContainer>
      )}
    </Section>
  );
};

export default Detail;

/*        */
