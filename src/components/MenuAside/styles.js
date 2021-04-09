import styled from "styled-components";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

import { Theme } from "../../styles/colors";
import { darken } from "polished";

export const Container = styled.div`
  width: ${(props) => (props.open ? "16rem" : "5rem")};
  min-height: 100vh;
  background-color: ${(props) =>
    props.level === 1
      ? Theme.colors.main_user
      : props.level === 2
      ? Theme.colors.main_healthEmployee
      : Theme.colors.main_admin};

  transition: 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CollapseIconContainer = styled.div`
  width: 100%;
  text-align: center;
`;
export const IconContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;

  align-items: center;
  transition: 0.3s ease-in-out;
  text-align: center;

  img {
    margin: 0 1.3rem;
    width: 27px;
  }
  svg {
    font-size: 2rem;
    margin: 0 1.3rem;
  }
  span {
    display: ${(props) => (props.open ? "block" : "none")};
  }

  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.level === 1
        ? darken(0.04, Theme.colors.main_user)
        : props.level === 2
        ? darken(0.04, Theme.colors.main_healthEmployee)
        : darken(0.04, Theme.colors.main_admin)};
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
