import styled from "styled-components";

import { Theme } from "../../styles/colors";

import { darken } from "polished";

export const Container = styled.div`
  width: 100%;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

export const Text = styled.span`
  color: ${Theme.colors.text_first};
  font-size: 20px;
`;

export const ErrorMessage = styled.span`
  color: ${Theme.colors.error};
  font-size: 12px;
  line-height: 12px;
`;

export const InputStyled = styled.input`
  width: ${({type}) => type !== 'checkbox' ? '100%' : '20px'};
  height: ${({type}) => type !== 'checkbox' ? '30px' : '20px'};
  color: ${Theme.colors.text_first};
  background-color: ${Theme.colors.background_second};
  outline: none;
  margin-left: ${({type}) => type === 'checkbox' && '10px'};
  padding: 0 5px;
  box-sizing: border-box;
  border: 1px solid transparent;
  cursor: ${({type}) => type === 'checkbox' && 'pointer'};
    ${({ error }) => (error ? Theme.colors.error : "transparent")};
  box-shadow: 0 4px 6px
    ${({ error }) =>
      error ? Theme.colors.error_boxShadow : Theme.colors.boxShadow_primary};
  transition: 400ms;
  &:hover {
    border-color: ${({ error }) =>
      !error && darken(0.04, Theme.colors.main_user)};
  }
  &:focus {
    border-color: ${Theme.colors.main_user};
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;

`

export const CheckBoxContainer = styled(SelectContainer)``

export const Select = styled.select`
  height: 30px;
  min-width: 40px;
  padding-left: 5px;
  outline: none;
  margin-left: 10px;
  border-radius: 3px;
  color: ${Theme.colors.text_first};
  background-color: ${Theme.colors.background_second};
  padding: 0 5px;
  border: 1px solid 'transparent';
  &:hover {
    border-color: ${darken(0.04, Theme.colors.main_user)};
  }
  &:focus {
    border-color: ${Theme.colors.main_user};
  }
`
