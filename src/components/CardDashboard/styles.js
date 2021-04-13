import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  padding: 1rem;
  width: 165px;
  background: ${Theme.colors.background_second};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0.8rem;
  @media (max-height: 800px) {
    height: 10rem;
  }

  h4,
  p {
    height: 15%;
  }

  p {
    margin-bottom: 25%;
    @media (max-height: 800px) {
      display: none;
    }
  }
`;
