import styled from "styled-components";

const DivCard = styled.div`
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

const ButtonCard = styled.button`
  align-self: flex-end;
  border: 0;
  background-color: #b543fd;
  border-radius: 50%;
  color: white;
  width: 40px;
  height: 40px;
  margin: 8px 8px 8px 0;
  cursor: pointer;

  &:hover {
    background-color: #04b6fe;
    transition: all 0.4s ease-in-out;
  }
`;

const Image = styled.img`
  max-width: 320px;
  max-height: 320px;
  border-radius: 50%;
  object-fit: cover;
`;

const H2Card = styled.h2`
  margin: 12px 0;

  &.title {
    font-weight: 500;
    font-size: 1.5rem;
  }

  &.rest {
    font-weight: 400;
    font-size: 1rem;
  }
`;

export { DivCard, ButtonCard, Image, H2Card };
