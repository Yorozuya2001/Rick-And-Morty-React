import React from "react";
import { NavStyle, StyledNavLink } from "./style-nav";

const Nav = () => {
  return (
    <>
      <NavStyle>
        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
      </NavStyle>
    </>
  );
};

export default Nav;
