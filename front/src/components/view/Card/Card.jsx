import { useState, useEffect } from "react";
import {
  StyledNavLink,
  DivCard,
  ButtonCard,
  Image,
  H2Card,
} from "./style-card";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../../redux/actions";

const Card = ({ id, name, species, gender, image, onClose, isInFav }) => {
  const [isFav, setIsFav] = useState(false);
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const addToFavorites = async (character) => {
    try {
      const config = {
        method: "POST",
        body: JSON.stringify(character),
        headers: {
          "Content-Type": "application/json",
        },
      };

      await fetch("http://localhost:3001/rickandmorty/fav", config);
      console.log("date send");
      dispatch(getFavorites());
    } catch (error) {
      console.log(error);
    }
  };

  const removeToFavorites = async (id) => {
    try {
      let response = await fetch(
        `http://localhost:3001/rickandmorty/fav/${id}`,
        {
          method: "DELETE",
        }
      );
     
      dispatch(getFavorites());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeToFavorites(id);
    } else {
      setIsFav(true);
      addToFavorites({
        id,
        name,
        species,
        gender,
        image,
      });
    }
  };

  return (
    <DivCard >
      <div>
        {isFav ? (
          <ButtonCard onClick={handleFavorite}>❤️</ButtonCard>
        ) : (
          <ButtonCard onClick={handleFavorite}>🤍</ButtonCard>
        )}
        {!isInFav && <ButtonCard onClick={() => onClose(id)}>X</ButtonCard>}
      </div>
      <Image src={image} alt={name} />
      <StyledNavLink to={`/detail/${id}`}>{name}</StyledNavLink>
      <H2Card>Especie: {species}</H2Card>
      <H2Card>Género: {gender}</H2Card>
    </DivCard>
  );
};

export default Card;
