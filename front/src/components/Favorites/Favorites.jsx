import React from "react";
import { useSelector } from "react-redux";
import Card from "../view/Card/Card";
import { DivContainer } from "./style-favorites";
import Filterbar from "../FilterBar/Filterbar";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);

  return (
    <>
      <Filterbar />
      
      <DivContainer>
        {myFavorites.map(({ id, name, species, gender, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              isInFav={true}
            />
          );
        })}
      </DivContainer>
    </>
  );
};

export default Favorites;
