import { useState, useEffect } from "react";
import {
  StyledNavLink,
  DivCard,
  ButtonCard,
  Image,
  H2Card,
} from "./style-card";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeToFavorites } from "../../../redux/actions";

const Card = ({ id, name, species, gender, image, onClose, isInFav }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

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
      dispatch(removeToFavorites(id));
    } else {
      setIsFav(true);
      dispatch(
        addToFavorites({
          id,
          name,
          species,
          gender,
          image,
          onClose,
        })
      );
    }
  };

  return (
    <DivCard>
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
