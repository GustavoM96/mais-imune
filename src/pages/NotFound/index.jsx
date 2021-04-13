import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";
import fourzerofour from "../../assets/404.svg";

import { Container } from "./styles";

function NotFound() {
  const history = useHistory();
  return (
    <Container>
      <Button text="Home" handleClick={() => history.push("/")} />
      <figure>
        <img src={fourzerofour} alt="Não Encontrado" />
      </figure>
    </Container>
  );
}

export default NotFound;
