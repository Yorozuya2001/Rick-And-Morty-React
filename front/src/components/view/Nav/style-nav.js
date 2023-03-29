import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 32px;
  padding-right: 32px;
  background-color: black;
  font-size: 1.2rem;
  width: 100%;
`;

export const NavStyle = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: white;

  margin: 0 24px;
`;

export const StyledDiv = styled.div`
  background-color: white;
  height: 40px;
  width: 90px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
