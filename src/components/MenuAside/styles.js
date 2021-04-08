import styled from "styled-components";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

import { Theme } from "../../styles/colors";
import { darken } from "polished";

export const Container = styled.div`
  width: ${(props) => (props.open ? "16rem" : "8rem")};
  height: 100vh;
  background-color: ${(props) =>
    props.level === 1
      ? Theme.colors.main_user
      : props.level === 2
      ? Theme.colors.main_user
      : Theme.colors.main_user};

  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CollapseIconContainer = styled.div`
  width: 100%;
  text-align: right;
`;
export const IconContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: ${darken(0.08, Theme.colors.main_user)};
  }
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
