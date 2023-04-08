import styled, { css } from "styled-components";
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
  ${(props) =>
    props.phone &&
    css`
      @media (max-width: 576px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    `}
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
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #04b6fe;
    text-decoration: underline;
  }

  &.active {
    color: #04b6fe;
    text-decoration: underline;
  }
`;

export const StyledDiv = styled.div`
  background-color: white;
  height: 40px;
  width: 90px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${(props) =>
    props.phone &&
    css`
      @media (max-width: 576px) {
        margin-bottom: 16px;
      }
    `}
`;
