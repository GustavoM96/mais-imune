import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import HomeImg from "../../assets/doc_nurse.svg";
import BlueBall from "../../assets/blue_ball.svg";
import BlueBallLeft from "../../assets/blue_left_ball.png";
import logo from "../../assets/+imuneLogoMini.svg";

import { Container, Logo } from "./styles";
import { motion } from "framer-motion";

function Home() {
  const history = useHistory();
  return (
    <motion.div
      className="flex"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <div className="message">
          <figure>
            <Logo src={logo} alt="Mais imune" />
          </figure>
          <h1>
            +Imune<span>, a sua nova carteira de vacinação digital</span>
          </h1>
          <p>
            Acesse os seus dados de vacinação, acompanhe as suas vacinas a
            pendentes e veja os locais de vacinação disponíveis.
          </p>
          <Button text="Começar" handleClick={() => history.push("/login")} />
        </div>
        <figure className="nurse-doc">
          <img src={HomeImg} alt="Enfermeira Médico" />
        </figure>
        <figure className="direita">
          <img src={BlueBall} alt="bola azul" />
        </figure>
        <figure className="esquerda">
          <img src={BlueBallLeft} alt="bola azul" />
        </figure>
      </Container>
    </motion.div>
  );
}

export default Home;
