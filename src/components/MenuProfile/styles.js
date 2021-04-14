import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { FaGripLinesVertical } from "react-icons/fa";
import { FiEdit3 } from "react-icons/fi";
import styled from "styled-components";
import { Theme } from "../../styles/colors";

export const Container = styled.div`
  @media (max-width: 800px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: ${(state) => (!state.open ? "17rem" : "5rem")};
  min-height: 100vh;
  height: 100%;

  background-color: ${Theme.colors.background_second};
  transition: 0.5s ease-in-out;

  div.header {
    width: 100%;
    text-align: center;
    display: ${(props) => (!props.open ? "block" : "none")};

    h3 {
      text-align: left;
      margin-left: 1rem;
    }
    figure img {
      width: 8rem;
      border-radius: 50%;
    }
  }
  div.cards {
    width: 100%;
    min-height: 58vh;
    text-align: center;
    display: ${(props) => (!props.open ? "block" : "none")};

    span {
      font-size: 0.9rem;
      font-weight: 700;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const Separator = styled(FaGripLinesVertical)`
  font-size: 0.8rem;
`;

export const ArrowLeft = styled(RiArrowLeftSLine)`
  font-size: 2rem;
  :hover {
    cursor: pointer;
  }
`;

export const ArrowRight = styled(RiArrowRightSLine)`
  font-size: 2rem;

  :hover {
    cursor: pointer;
  }
`;

export const EditIcon = styled(FiEdit3)`
  margin-left: 2rem;

  :hover {
    cursor: pointer;
  }
`;
