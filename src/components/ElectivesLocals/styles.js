import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  padding: 2rem;
  border-radius: 15px;
  background-color: ${Theme.colors.background_second};
  width: 50rem;
  height: 25rem;

  overflow-y: auto;

  div {
    margin: 1rem 0;
  }
`;
