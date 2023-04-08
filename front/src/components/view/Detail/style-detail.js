import styled from "styled-components";

export const Section = styled.section`
  width: 60%;
  margin: 32px auto;
  height: auto;
  border: 3px solid #b543fd;
  background-color: white;
  border-radius: 12px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  flex-wrap: wrap;
  color: black;
  font-size: 2rem;
`;

export const TextContainer = styled.div`
  h2,
  p {
    margin: 16px 0;
  }

  h2 {
    color: #b543fd;
  }
`;

export const Img = styled.img`
  width: 30%;
  height: 30%;
  object-fit: cover;
  border-radius: 50%;
`;

export const StyledLoader = styled.img`
  margin: 0 auto;
`;

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const StyledH2 = styled.h2`
  font-size: 1.5rem;
  color: white;
`;
