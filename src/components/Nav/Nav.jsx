import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { NavStyle } from "./style-nav";

const Nav = ({ onSearch }) => {
  return (
    <>
      <NavStyle>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/home">Home</NavLink>
        <SearchBar onSearch={onSearch} />
      </NavStyle>
    </>
  );
};

export default Nav;
