import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

import { Theme } from "../../styles/colors";
import { darken } from "polished";

export const Container = styled.div`
  @media (max-width: 800px) {
    width: ${(props) => (props.open ? "80%" : "10%")};
    position: fixed;
    z-index: 1;
    background-color: ${(props) =>
      props.level === 1
        ? Theme.colors.main_user
        : props.level === 2
        ? Theme.colors.main_healthEmployee
        : Theme.colors.main_admin};
    opacity: 0.95;
    box-shadow: 145px -1px 5px 27px rgba(0, 0, 0, 0.74);
    -webkit-box-shadow: 145px -1px 5px 27px rgba(0, 0, 0, 0.74);
    -moz-box-shadow: 145px -1px 5px 27px rgba(0, 0, 0, 0.74);
    display: ${(props) => (props.open ? "flex" : "none")};
  }

  width: ${(props) => (props.open ? "16rem" : "5rem")};
  height: 100vh;
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

export const CollapseIconContainerMobile = styled.div`
  display: ${(props) => (props.open ? "none" : "block")};
`;

export const DivMenu = styled.div``;

export const IconContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;

  align-items: center;
  transition: 0.3s ease-in-out;
  text-align: center;
  flex-wrap: wrap;
  img {
    margin: 0 1.3rem;
    width: 27px;
  }
  svg {
    font-size: 2rem;
    margin: 0 1.3rem;
  }
  span {
    opacity: ${(props) => (props.open ? "1" : "0")};
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    transition: 0.4s ease-in-out;
    @media (max-width: 800px) {
      visibility: visible;
      opacity: 1;
    }
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
