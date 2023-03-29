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
export const StyledDivForm = styled.div`
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
`;

export const StyledForm = styled.form`
  width: inherit;
  padding: 20px;
  margin: 20px;
  background-color: #00000090;
  border-radius: 10px;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 32px 0;
`;

export const StyledLabel = styled.label`
  color: white;
  font-size: 1.2rem;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  padding: 8px 16px;
  border: 0;
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
  max-width: 40%;
  height: auto;
  margin-left: 64px;
  animation: ${bounce} 5s infinite;
`;
