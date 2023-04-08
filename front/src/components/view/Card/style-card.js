import { NavLink } from "react-router-dom";
import styled from "styled-components";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const DivCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 0;
  max-width: 360px;
  height: auto;
  border: 3px solid #b543fd;
  border-radius: 10px;
  background-color: white;
  color: black;
  text-align: center;
  transition: all 0.35s ease-in-out;

  &:hover {
    border-color: #04b6fe;

    transform: scale(1.1, 1.1);
  }
`;

export const ButtonCard = styled.button`
  align-self: flex-end;
  border: 0;
  background-color: #b543fd;
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  margin: 8px 8px 8px 0;
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: #04b6fe;
  }
`;

export const Image = styled.img`
  max-width: 320px;
  max-height: 320px;
  border-radius: 50%;
  object-fit: cover;
`;

export const H2Card = styled.h2`
  margin: 12px 0;
  font-weight: 400;
  font-size: 1rem;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 12px 0;
  transition: all 0.3 ease-in-out;
  font-weight: 600;
  font-size: 1.5rem;
  transition: all 0.2s ease-in-out;
  color: #b543fd;

  &:hover {
    color: #04b6fe;
  }
`;

export const StyledFavoriteIcon = styled(FavoriteIcon)`
  color: ${(props) => (props.isFav ? "#000" : "#ffffff")};
`;
