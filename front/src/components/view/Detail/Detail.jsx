import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  InfoContainer,
  Section,
  TextContainer,
  Img,
  StyledLoader,
  StyledContainer,
  StyledH2,
} from "./style-detail";
import Loader from "../../../assets/images/loading-gif.gif";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { image, name, gender, species, origin, status, location } = character;
  const { detailId } = useParams();

  useEffect(() => {
    const URL_BASE = "http://localhost:3001";
    console.log(character.location);
    fetch(`${URL_BASE}/detail/${detailId}`)
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
    <StyledContainer>
      {Object.keys(character).length !== 0 ? (
        <Section>
          <InfoContainer>
            <TextContainer>
              <h2>{name}</h2>
              <p>Status: {status}</p>
              <p>Specie: {species}</p>
              <p>Origin: {origin.name}</p>
              <p>Gender: {gender}</p>
              <p>Last known location: {location.name}</p>
            </TextContainer>
            <Img src={image} alt={name} />
          </InfoContainer>
        </Section>
      ) : (
        <>
          <StyledH2>¡Cargando tu Burrrrrrrrrrrrrp personaje perra!</StyledH2>
          <StyledLoader src={Loader} alt="" />
        </>
      )}
    </StyledContainer>
  );
};

export default Detail;

/*        */
