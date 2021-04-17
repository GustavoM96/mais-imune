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
  padding: 5px;
  border: none;
  box-shadow: 0 4px 6px ${Theme.colors.boxShadow_primary};
`;

export const LabelStyled = styled.div`
  /* font-weight: 350;
  font-size: 1.2rem; */
`;

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

  border-radius: 15px;

  background-color: ${Theme.colors.background_first};
  box-shadow: 0 4px 6px ${Theme.colors.boxShadow_primary};
  div {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    select {
      width: 100%;
    }
  }
`;

export const ErrorMessage = styled.p`
  color: ${Theme.colors.error};
  font-size: 0.8rem;
`;
