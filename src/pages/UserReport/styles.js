import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  width: 90%;
  h2,
  h3 {
    font-weight: 700;
    margin-left: 1.8rem;
  }

  @media (min-width: 800px) {
    width: 65%;
    height: 95vh;
  }
`;
