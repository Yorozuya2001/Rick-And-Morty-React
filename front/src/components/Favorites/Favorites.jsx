import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../view/Card/Card";
import { DivContainer } from "./style-favorites";
import { orderCards, filterCards } from "../../redux/actions";

const Favorites = () => {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleChangeOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilterOrder = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <>
      <div>
        <select name="order" id="order" onChange={handleChangeOrder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="filter" id="filter" onChange={handleFilterOrder}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <DivContainer>
        {myFavorites.map(({ id, name, species, gender, image }) => {
          return (
            <>
              <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                isInFav={true}
              />
            </>
          );
        })}
      </DivContainer>
    </>
  );
};

export default Favorites;
