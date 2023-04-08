import styled from "styled-components";

export const StyledSelect = styled.select`
  padding: 0 16px;
  margin: 8px 16px;
  border: 0;
  width: 310px;
  height: 50px;

  &:focus {
    outline: none;
    text-shadow: 0 0 20px #b543fd;
    box-shadow: 0 0 20px #b543fd;
  }
`;

export const FilterBarDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 16px 0;
`;
