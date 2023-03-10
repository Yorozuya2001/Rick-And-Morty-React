import React from "react";
import { NavStyle, StyledNavLink } from "./style-nav";

const Nav = () => {
  return (
    <>
      <NavStyle>
        <StyledNavLink to="/about">About</StyledNavLink>
        <StyledNavLink to="/home">Home</StyledNavLink>
      </NavStyle>
    </>
  );
};

export default Nav;
