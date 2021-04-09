import styled from "styled-components";

import { Theme } from "../../styles/colors";

export const CardStyled = styled.div`
  background-color: ${Theme.colors.background_third};
  width: 225px;
  height: 160px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px -5px;
  margin: 25px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const TitleStyled = styled.h6`
  font-size: 1.3rem;
  margin: 5px 0;
`;
