import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavStyle = styled.nav`
  background-color: black;
  display: flex;
  justify-content: center;
  padding: 30px 16px;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 1.5rem;
  margin: 0 16px;
`;
