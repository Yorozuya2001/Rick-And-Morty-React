import React from "react";
import { orderCards, filterCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { FilterBarDivContainer, StyledSelect } from "./style-filterBar";

const Filterbar = () => {
  const dispatch = useDispatch();

  const handleChangeOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handleFilterOrder = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <FilterBarDivContainer>
      <StyledSelect name="order" id="order" onChange={handleChangeOrder}>
        <option value="Ascendente">Ascendente</option>
        <option value="Descendente">Descendente</option>
      </StyledSelect>
      <StyledSelect name="filter" id="filter" onChange={handleFilterOrder}>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </StyledSelect>
    </FilterBarDivContainer>
  );
};

export default Filterbar;
