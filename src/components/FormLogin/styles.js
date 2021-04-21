import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  @media (max-width: 800px) {
    font-size: 0.8rem;
    min-height: 325px;
  }
  background: ${Theme.colors.background_second};
  width: 70%;
  max-width: 800px;
  height: 60%;
  min-height: 496px;
  opacity: 80%;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  form {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 2rem;
    & h3 {
      font-size: 2.5rem;
      font-weight: 400;
      margin: 1rem 0;
    }
    span.register {
      cursor: pointer;
    }
    @media (max-width: 800px) {
      padding: 0;

      width: 60%;
      & h3 {
        font-size: 1.9rem;
      }
    }

    @media (max-width: 400px) {
      width: 75%;
      & h3 {
        font-size: 1.5rem;
      }
    }
  }

  figure {
    @media (max-width: 800px) {
      display: none;
    }
    width: 50%;
    margin: 0;
    & img {
      width: 100%;
    }
  }

  box-shadow: 0px 4px 4px ${Theme.colors.boxShadow_primary};
`;
export const Form = styled.div`
  display: flex;
`;
