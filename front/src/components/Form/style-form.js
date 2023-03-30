import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const sombraNeon = keyframes`
    0% {
      box-shadow: 0 0 5px #b543fd, 0 0 10px #b543fd, 0 0 15px #b543fd, 0 0 20px #b543fd, 0 0 25px #b543fd, 0 0 30px #b543fd, 0 0 35px #b543fd, 0 0 40px #b543fd;
    }
    50% {
         box-shadow: 0 0 5px #04b6fe, 0 0 10px #04b6fe, 0 0 15px #04b6fe, 0 0 20px #04b6fe, 0 0 25px #04b6fe, 0 0 30px #04b6fe, 0 0 35px #04b6fe, 0 0 40px #04b6fe;
    }
    100% {
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff, 0 0 25px #fff, 0 0 30px #fff, 0 0 35px #fff, 0 0 40px #fff;
    }
`;

/* export const StyledDivForm = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;

  height: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`; */

export const StyledForm = styled.form`
  width: 25%;
  padding: 20px;
  margin: 20px;
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff,
    0 0 25px #fff, 0 0 30px #fff, 0 0 35px #fff, 0 0 40px #fff;
  animation: ${sombraNeon} 3s ease-in-out infinite alternate;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 32px 0;

  span {
    color: white;
    margin-top: 16px;
  }
`;

export const StyledLabel = styled.label`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  padding: 8px 16px;
  border: 0;
  border-radius: 5px;
  width: 100%;
  height: 30px;

  &:focus-visible {
    outline: #04b6fe;
    outline-style: solid;
    outline-width: 2px;
  }
`;

export const StyledButton = styled.button`
  background-color: #b543fd;
  width: 30%;
  margin: auto;
  color: white;
  font-size: 1.2rem;
  border: 2px solid #b543fd;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;

  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: #04b6fe;
    border-color: #04b6fe;
  }

  &.buttonRandom {
    margin-left: 32px;
  }
`;

export const StyledImage = styled.img`
  max-width: 25%;
  height: auto;
  margin-left: 72px;
  animation: ${bounce} 5s infinite;
`;

export const StyledDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;
