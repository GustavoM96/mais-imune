import styled from "styled-components";

import { Theme } from "../../styles/colors";

import { darken } from "polished";

export const InputEdit = styled.input`
  width: 100%;
  height: 30px;
  color: ${Theme.colors.text_first};
  background-color: ${Theme.colors.background_second};
  outline: none;

  padding: 0 5px;
  box-sizing: border-box;
  border: 1px solid transparent;

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

export const Text = styled.span`
  color: ${Theme.colors.text_first};
  font-size: 20px;
`;
