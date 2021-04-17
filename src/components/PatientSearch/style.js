import styled from "styled-components";

import { Theme } from "../../styles/colors";

export const Conteiner = styled.div`
  min-height: 50px;
  /* min-width: 1000px; */
  border-radius: 15px;
  padding: 20px;
  background-color: ${Theme.colors.background_first};
  box-shadow: 0 4px 6px ${Theme.colors.boxShadow_primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    height: 50px;
    font-size: 18px;

    @media (max-width: 800px) {
      height: 80px;
    }
  }
`;
export const BoldText = styled.p`
  font-weight: 900;
  margin: 0;
`;

export const TextConteiner = styled.div`
  max-width: 200px;
  max-height: 50px;

  h2 {
    margin-left: 0;
    margin-bottom: 5px;
    font-weight: 400;
  }
`;

export const InputConteiner = styled.div`
  min-width: 20%;
  max-width: 225px;
  min-height: 10%;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3%;

  span {
  }

  button {
    max-width: 8%;
    margin-top: 15px;
  }
`;
