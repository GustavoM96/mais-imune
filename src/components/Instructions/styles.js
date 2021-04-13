import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  width: 90%;
  height: 54vh;
  overflow-y: auto;
  margin: 5% auto;
  padding: 0.5rem;
  box-sizing: border-box;

  background-color: ${Theme.colors.background_first};
  box-shadow: 0px 6px 6px -4px;

  h3 {
    font-size: 1rem;
  }

  ol {
    margin-left: -1rem;
    li {
      text-align: left;
      margin-bottom: 1.5vh;
    }
  }
`;
