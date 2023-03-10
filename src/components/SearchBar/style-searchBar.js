import styled from "styled-components";

const Button = styled.button`
  background-color: #b543fd;
  color: white;
  border: 2px solid #b543fd;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.35s ease-in-out;

  &:hover {
    background-color: #04b6fe;
    border-color: #04b6fe;
  }
`;

const Input = styled.input`
  padding: 8px 16px;
  border: 0;

  &:focus-visible {
    outline: #b543fd;
    outline-style: solid;
    outline-width: 2px;
  }
`;

export { Button, Input };
