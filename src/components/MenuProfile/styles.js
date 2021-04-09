import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  width: ${(state) => (!state.open ? "16rem" : "5rem")};
  height: 100vh;
  background-color: ${Theme.colors.main_healthEmployee};
  transition: 0.5s ease-in-out;
`;

export const ArrowLeft = styled(BiArrowFromRight)`
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`;

export const ArrowRight = styled(BiArrowFromLeft)`
  font-size: 2rem;

  :hover {
    cursor: pointer;
  }
`;
