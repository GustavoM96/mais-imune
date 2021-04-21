import { motion } from "framer-motion";
import FormLogin from "../../components/FormLogin";

import { Container } from "./styles";

function Login() {
  return (
    <motion.div
      initial={{ translateX: "-100%" }}
      animate={{ translateX: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <FormLogin />
      </Container>
    </motion.div>
  );
}

export default Login;
