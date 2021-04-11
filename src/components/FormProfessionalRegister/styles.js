import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  background: ${Theme.colors.background_first};
  box-shadow: 0px 4px 4px ${Theme.colors.boxShadow_primary};

  width: 50%;
  height: 60%;
  min-height: 480px;
  max-width: 654px;
  font-size: 1.2rem;

  form {
    width: 50%;
    margin: 0 auto;

    h3 {
      margin-left: -30%;
      margin-bottom: 12%;
      width: 150%;
    }

    div {
      margin-bottom: 1rem;
    }

    button {
      display: block;
      margin: 0 auto;
      margin-top: 10%;
    }
  }

  @media (max-width: 320px) {
    width: 90%;

    form {
      width: 60%;
      margin: 0 auto;
    }
  }
`;
