import { Container } from "../Login/styles";
import FormRegister from "../../components/FormRegister/index";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      animate={{ translateX: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <FormRegister />
      </Container>
    </motion.div>
  );
};

export default Register;
