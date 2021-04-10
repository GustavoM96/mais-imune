import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  padding: 1rem;
  margin: 0.25rem;
  width: 165px;
  background: ${Theme.colors.background_second};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h4,
  p {
    height: 15%;
  }

  p {
    margin-bottom: 25%;
  }
`;
