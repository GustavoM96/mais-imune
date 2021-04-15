import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  width: 90%;

  h2 {
    margin-top: 0;
  }
  h3,
  h2 {
    font-weight: 700;
    margin-left: 1.8rem;
  }

  @media (min-width: 800px) {
    width: 65%;
    max-width: 1000px;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: space-around;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;
