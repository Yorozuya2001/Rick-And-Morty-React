import styled from "styled-components";

export const Section = styled.section`
  width: 60%;
  margin: 32px auto;
  height: auto;

  background-color: white;
  border-radius: 12px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  flex-wrap: wrap;
  color: black;
  font-size: 2rem;
`;

export const TextContainer = styled.div`
  h2,
  p {
    margin: 16px 0;
  }
`;

export const Img = styled.img`
  width: 30%;
  height: 30%;
  object-fit: cover;
  border-radius: 50%;
`;
