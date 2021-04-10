import styled from "styled-components";

import { Theme } from "../../styles/colors";

export const CardStyled = styled.div`
  background-color: ${Theme.colors.background_third};
  width: 200px;
  height: 180px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px -5px;
  margin: 0.5rem;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TitleStyled = styled.h6`
  font-size: 1rem;
  margin: 5px 0;
`;
