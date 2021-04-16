import styled from "styled-components";

import { Theme } from "../../styles/colors";

export const SelectInput = styled.select`
  outline: none;
  min-width: 200px;
  min-height: 30px;
  padding: 5px;
  border: none;
  background-color: ${Theme.colors.background_first};
  margin-bottom: 30px;
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.62);
`;
export const InputData = styled.input`
  outline: none;
  min-width: 200px;
  min-height: 25px;
  padding: 5px;
  border: none;
  background-color: ${Theme.colors.background_first};
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.62);
  margin-bottom: 30px;
`;

export const LabelStyled = styled.div`
  font-weight: 350;
  font-size: 1.2rem;
`;

export const StyledForm = styled.div`
  position: relative;
  top: 20%;
  right: 33%;
  background-color: ${Theme.colors.background_first};
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

export const FormConteiner = styled.div`
  border-radius: 15px;
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;
  background-color: ${Theme.colors.background_first};
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.62);
`;

export const ErrorMessage = styled.p`
  color: ${Theme.colors.error};
  font-size: 0.8rem;
`;
