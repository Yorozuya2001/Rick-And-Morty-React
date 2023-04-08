import React from "react";
import { NavStyle, StyledNavLink, StyledDiv, NavHeader } from "./style-nav";
import LogoutIcon from "@mui/icons-material/Logout";

const Nav = ({ logout }) => {
  return (
    <NavHeader phone>
      <NavStyle>
        <StyledNavLink to="/home" activeClassName="active">
          Home
        </StyledNavLink>
        <StyledNavLink to="/favorites" activeClassName="active">
          Favorites
        </StyledNavLink>
        <StyledNavLink to="/about" activeClassName="active">
          About
        </StyledNavLink>
      </NavStyle>
      <StyledDiv phone onClick={logout}>
        <LogoutIcon />
        Logout
      </StyledDiv>
    </NavHeader>
  );
};

export default Nav;
