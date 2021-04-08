import styled from "styled-components";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";

import { colors } from "../../styles/colors";

export const Container = styled.div`
  width: ${(props) => (props.open ? "30vw" : "10vw")};
  height: 100vh;
  background-color: ${(props) =>
    props.level === 1
      ? colors.fourth
      : props.level === 2
      ? colors.fifth
      : colors.sixty};
`;

export const ArrowLeft = styled(BiArrowFromRight)`
  font-size: 3rem;
`;

export const ArrowRight = styled(BiArrowFromLeft)`
  font-size: 3rem;
`;
