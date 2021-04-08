import styled from "styled-components";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: ${(props) => (props.open ? "16rem" : "8rem")};
  height: 100vh;
  background-color: ${(props) =>
    props.level === 1
      ? colors.fourth
      : props.level === 2
      ? colors.fifth
      : colors.sixty};

  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CollapseIconContainer = styled.div`
  padding-top: 1rem;
  padding-right: 1rem;
  width: 100%;
  text-align: right;
`;
export const IconContainer = styled.div`
  padding-top: 1rem;
  padding-right: 1rem;
  width: 100%;
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
