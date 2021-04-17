import logo from "../../assets/+imuneLogoMini.svg";
import { Container, Logo } from "./styles";
import { motion } from "framer-motion";

const circleStyle = {
  display: "block",
  width: "15rem",
  height: "15rem",
  border: "0.3rem solid transparent",
  borderTop: "0.3rem solid white",
  borderRadius: "50%",
  boxSizing: "border-box",
  position: "absolute",
  top: 0,
  left: 0,
};

const spinTransition = {
  loop: Infinity,
  duration: 1,
};

const PageLoader = () => {
  return (
    <Container>
      <motion.span
        style={circleStyle}
        animate={{ rotate: 360 }}
        transition={spinTransition}
      />
      <Logo src={logo} alt="logo" />
    </Container>
  );
};

export default PageLoader;
