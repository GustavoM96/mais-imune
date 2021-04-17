import styled from "styled-components";

import { Theme } from "../../styles/colors";

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
  font-size: 1.8rem;
`;

export const Form = styled.form`
  width: 310px;
  height: 330px;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
`;

export const InputContainer = styled.div``;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
