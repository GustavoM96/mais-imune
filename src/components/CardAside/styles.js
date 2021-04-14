import styled from "styled-components";
import { Theme } from "../../styles/colors";
import { darken } from "polished";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 0.5rem auto;
  width: 80%;
  background: ${Theme.colors.background_second};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 32px;
    &:hover {
      cursor: pointer;
      /* background-color: ${darken(0.08, Theme.colors.background_second)}; */
    }
  }
  figure {
    margin: 0;
  }

  h6 {
    font-size: 1rem;
    margin: 0;
  }
`;
