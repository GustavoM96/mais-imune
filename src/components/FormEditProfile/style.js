import styled from "styled-components";

import { Theme } from "../../styles/colors";

import { darken } from "polished";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Container = styled.div`
  border-radius: 15px;
  padding: 2rem;
  background-color: ${Theme.colors.background_first};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${Theme.colors.text_first};
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  width: 20rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  font-size: 1rem;
`;

export const InputEdit = styled.input`
  width: 100%;
  height: 30px;
  color: ${Theme.colors.text_first};
  background-color: ${Theme.colors.background_second};
  outline: none;

  padding: 0 5px;
  box-sizing: border-box;
  border: 1px solid transparent;
  color: #a0a0a0;
  &:focus {
    color: #000;
  }
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
