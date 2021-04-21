import styled from "styled-components";

export const Container = styled.div`
  h2 {
    margin-top: 0;
  }
  h2,
  h3 {
    font-weight: 700;
    margin-left: 1.8rem;
  }
  @media (max-width: 800px) {
    width: 100%;
    max-width: 1000px;
  }
  width: 65%;
  padding: 1rem;
`;
