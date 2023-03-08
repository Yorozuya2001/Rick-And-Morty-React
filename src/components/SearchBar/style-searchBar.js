import styled from "styled-components";

const ButtonSearch = styled.button`
  background-color: #b543fd;
  color: white;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #04b6fe;
    transition: all 0.35s ease-in-out;
  }
`;

const InputSearch = styled.input`
  padding: 8px 16px;
`;

export {ButtonSearch,InputSearch}