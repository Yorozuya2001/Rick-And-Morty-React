import React from "react";
import { NavStyle, StyledNavLink } from "./style-nav";

const Nav = ({ logout }) => {
  return (
    <>
      <NavStyle>
        <button onClick={logout}>Logout</button>
        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/noexiste">404 test</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
      </NavStyle>
    </>
  );
};

export default Nav;
