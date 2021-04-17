import styled from "styled-components";

import { Theme } from "../../styles/colors";

export const Conteiner = styled.div`
  border-radius: 15px;
  padding: 2rem;
  background-color: ${Theme.colors.background_first};
  box-shadow: 0 4px 6px ${Theme.colors.boxShadow_primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 30%;
  height: 13rem;
  margin: 0 auto;
  h2 {
    margin: 0;
    margin-bottom: 1rem;
  }

  @media (max-width: 650px) {
    width: 80%;
  }
`;
export const BoldText = styled.p`
  font-weight: normal;
  font-size: 1rem;
  margin: 0;
`;

export const TextConteiner = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
