import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  background: ${Theme.colors.background_second};

  width: 70%;
  height: 70vh;

  opacity: 80%;

  border-radius: 15px;

  display: flex;

  align-items: flex-start;
  flex-direction: column;

  form {
    width: 50%;
    height: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  box-shadow: 0px 4px 4px ${Theme.colors.boxShadow_primary};
`;
