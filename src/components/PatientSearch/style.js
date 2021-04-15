import styled from "styled-components";

import { Theme } from "../../styles/colors";

export const Conteiner = styled.div`
  min-height: 50px;
  /* min-width: 1000px; */
  border-radius: 15px;
  padding: 30px;
  background-color: ${Theme.colors.background_first};
  box-shadow: 5px 5px 15px -3px rgba(0, 0, 0, 0.62);
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    height: 50px;
    margin-top: 5%;

    @media (max-width: 800px) {
      height: 80px;
    }
  }
`;
export const BoldText = styled.p`
  font-weight: 900;
`;

export const TextConteiner = styled.div`
  max-width: 200px;
`;

export const InputConteiner = styled.div`
  min-width: 20%;
  min-height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3%;

  input {
    max-width: 10%;
  }

  button {
    max-width: 8%;
  }
`;
