import { darken } from "polished";
import styled from "styled-components";

import { Theme } from "../../styles/colors";

export const SelectInput = styled.select`
  outline: none;
  min-width: 200px;
  min-height: 30px;
  padding: 5px;
  border: none;
  background-color: ${Theme.colors.background_first};
  box-shadow: 0 4px 6px ${Theme.colors.boxShadow_primary};
  transition: 0.2s ease-in-out;

  &:hover {
    color: blue;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    &:focus {
      color: #000;
    }
  }
`;
export const InputData = styled.input`
  outline: none;
  width: 100%;
  /* padding: 5px; */
  padding: 5px 0;

  border: none;
  box-shadow: 0 4px 6px ${Theme.colors.boxShadow_primary};
  background-color: ${Theme.colors.background_second};
  border-radius: 3px;
  margin: 0;
  margin-top: 0.5rem;
`;

export const LabelStyled = styled.div``;

export const StyledForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  width: 17rem;
  height: 17rem;

  border-radius: 15px;

  background-color: ${Theme.colors.background_first};
  box-shadow: 0 4px 6px ${Theme.colors.boxShadow_primary};

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    font-size: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin: 0 0 1rem 0;
  }

  div {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    select {
      font-size: 1rem;

      width: 100%;
      margin: 0;
      border: 1px solid "transparent";

      box-shadow: 0 4px 6px ${Theme.colors.boxShadow_primary};

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const ErrorMessage = styled.p`
  color: ${Theme.colors.error};
  font-size: 0.8rem;
`;
