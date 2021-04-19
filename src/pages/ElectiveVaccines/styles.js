import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  padding: 1rem;
  @media (min-width: 800px) {
    max-height: 96vh;
  }
  h2 {
    margin-top: 0;
  }

  h2,
  h3 {
    font-weight: 700;
    margin-left: 1.8rem;
  }

  @media (min-width: 800px) {
    width: 65%;
    max-width: 1063px;
  }
`;
