import styled from "styled-components";

import { Theme } from "../../styles/colors";

import { darken } from "polished";

export const Container = styled.div`
  border-radius: 15px;
  padding: 60px 30px 40px 30px;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  background-color: ${Theme.colors.background_first};
`;

export const Title = styled.h1`
  margin: 0;
  color: ${Theme.colors.text_first};
  margin-bottom: 30px;
  font-size: 1.5rem;
`;

export const Form = styled.form`
  width: 310px;
  height: 330px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const TextArea = styled.textarea`
  width: 100%;
  color: ${Theme.colors.text_first};
  box-sizing: border-box;
  background-color: ${Theme.colors.background_second};
  outline: none;
  padding: 0 5px;
  border: 1px solid
    ${({ error }) => (error ? Theme.colors.error : "transparent")};
  box-shadow: 0 4px 6px
    ${({ error }) =>
      error ? Theme.colors.error_boxShadow : Theme.colors.boxShadow_primary};
  transition: 400ms;
  resize: none;
  &:hover {
    border-color: ${({ error }) =>
      !error && darken(0.04, Theme.colors.main_user)};
  }
  &:focus {
    border-color: ${Theme.colors.main_user};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
