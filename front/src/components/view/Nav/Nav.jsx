import React from "react";
import { NavStyle, StyledNavLink, StyledDiv, NavHeader } from "./style-nav";
import LogoutIcon from "@mui/icons-material/Logout";

const Nav = ({ logout }) => {
  return (
    <NavHeader>
      <NavStyle>
        <StyledNavLink to="/home">Home</StyledNavLink>
        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
      </NavStyle>
      <StyledDiv onClick={logout}>
        <LogoutIcon />
        Logout
      </StyledDiv>
    </NavHeader>
  );
};

export default Nav;
