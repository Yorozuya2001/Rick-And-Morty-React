import styled, { keyframes, css } from "styled-components";

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
      box-shadow: 0 0 5px #b543fd, 0 0 7px #b543fd, 0 0 9px #b543fd, 0 0 11px #b543fd, 0 0 13px #b543fd, 0 0 15px #b543fd, 0 0 17px #b543fd, 0 0 19px #b543fd;
    }
    50% {
         box-shadow: 0 0 5px #04b6fe, 0 0 7px #04b6fe, 0 0 9px #04b6fe, 0 0 11px #04b6fe, 0 0 13px #04b6fe, 0 0 15px #04b6fe, 0 0 17px #04b6fe, 0 0 19px #04b6fe;
    }
    100% {
      box-shadow: 0 0 5px #fff, 0 0 7px #fff, 0 0 9px #fff, 0 0 11px #fff, 0 0 13px #fff, 0 0 15px #fff, 0 0 17px #fff, 0 0 19px #fff;
    }
`;

const sombraNeonMobile = keyframes`
    0% {
      box-shadow: 0 0 2px #b543fd, 0 0 5px #b543fd, 0 0 6px #b543fd, 0 0 7px #b543fd, 0 0 8px #b543fd, 0 0 9px #b543fd, 0 0 10px #b543fd, 0 0 11px #b543fd;
    }
    50% {
         box-shadow: 0 0 2px #04b6fe, 0 0 6px #04b6fe, 0 0 8px #04b6fe, 0 0 7px #04b6fe, 0 0 8px #04b6fe, 0 0 9px #04b6fe, 0 0 10px #04b6fe, 0 0 11px #04b6fe;
    }
    100% {
      box-shadow: 0 0 2px #fff, 0 0 6px #fff, 0 0 8px #fff, 0 0 7px #fff, 0 0 8px #fff, 0 0 9px #fff, 0 0 10px #fff, 0 0 11px #fff;
    }
`;

const neonInput = keyframes`
0%{
    text-shadow: 0 0 20px #b543fd;
    box-shadow: 0 0 20px #b543fd;
}
50%{
    text-shadow: 0 0 20px #04b6fe;
    box-shadow: 0 0 20px #04b6fe;
}
100%{
    text-shadow: 0 0 20px #fff;
    box-shadow: 0 0 20px #fff;
}
`;

export const StyledForm = styled.form`
  width: 25%;
  padding: 20px;
  margin: 20px;
  background-color: #000000;
  border-radius: 10px;
  box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #fff,
    0 0 25px #fff, 0 0 30px #fff, 0 0 35px #fff, 0 0 40px #fff;
  animation: ${sombraNeon} 3s ease-in-out infinite alternate;

  ${(props) =>
    props.portatil &&
    css`
      @media (max-width: 1024px) {
        width: 50%;
      }
    `}

  ${(props) =>
    props.tablet &&
    css`
      @media (max-width: 768px) {
        width: 80%;
      }
    `}

      ${(props) =>
    props.phone &&
    css`
      @media (max-width: 576px) {
        width: 90%;
        animation: ${sombraNeonMobile} 3s ease-in-out infinite alternate;
      }
    `}
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

  &:focus {
    outline: none;
    text-shadow: 0 0 20px #b543fd;
    box-shadow: 0 0 20px #b543fd;
    animation: ${neonInput} 3s ease-in-out infinite alternate;
  }
`;

export const StyledButton = styled.button`
  background-color: #b543fd;
  width: 30%;
  margin: auto;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #04b6fe;
  }
`;

export const StyledImage = styled.img`
  width: 25%;
  height: auto;
  margin-left: 72px;
  animation: ${bounce} 5s infinite;

  ${(props) =>
    props.portatil &&
    css`
      @media (max-width: 1024px) {
        width: 30%;
        margin-left: 0;
      }
    `}

  ${(props) =>
    props.tablet &&
    css`
      @media (max-width: 768px) {
        display: none;
      }
    `}
`;

export const StyledDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;

  ${(props) =>
    props.portatil &&
    css`
      @media (max-width: 1024px) {
        flex-direction: column;
        overflow: hidden;
      }
    `}
`;
