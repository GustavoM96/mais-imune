import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  padding: 1rem;
  margin: 1rem auto;
  width: 94%;
  height: 55%;
  background: ${Theme.colors.background_second};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  overflow: auto;

  table,
  tr {
    width: 100%;
    text-align: center;
  }
`;
