import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  background: ${Theme.colors.background_second};

  width: 70%;
  max-width: 800px;
  height: 60%;
  min-height: 496px;

  opacity: 80%;

  border-radius: 15px;

  display: flex;
  align-items: center;

  form {
    width: 50%;
    height: 100%;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & h3 {
      font-size: 3rem;
      font-weight: 400;
    }
    span.register {
      cursor: pointer;
    }
  }

  figure {
    width: 50%;
    margin: 0;
    & img {
      width: 100%;
    }
  }

  box-shadow: 0px 4px 4px ${Theme.colors.boxShadow_primary};
`;
