import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import fourzerofour from "../../assets/404.svg";

import { Container } from "./styles";
import { motion } from "framer-motion";

function NotFound() {
  const history = useHistory();
  return (
    <motion.div
      className="flex"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Button
          text="Voltar"
          handleClick={() => history.push("/minhas_vacinas")}
        />
        <figure>
          <img src={fourzerofour} alt="Não Encontrado" />
        </figure>
      </Container>
    </motion.div>
  );
}

export default NotFound;
