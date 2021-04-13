import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import HomeImg from "../../assets/doc_nurse.svg";
import BlueBall from "../../assets/blue_ball.svg";
import BlueBallLeft from "../../assets/blue_left_ball.png";

import { Container } from "./styles";

function Home() {
  const history = useHistory();
  return (
    <Container>
      <div className="message">
        <h1>The standard Lorem Ipsum passage, used since the 1500s</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
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
  );
}

export default Home;
