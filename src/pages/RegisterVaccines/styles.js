import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: 1rem;

  @media (min-width: 800px) {
    width: 65%;
  }
  h2 {
    margin-top: 0;
  }

  h2,
  h3 {
    font-weight: 700;
    margin-left: 1.8rem;
  }
`;

export const CardContainer = styled.div`
  width: 95%;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
