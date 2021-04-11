import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";

import { Container } from "./styles";

function NotFound() {
  const history = useHistory();
  return (
    <Container>
      <Button text="Home" handleClick={() => history.push("/")} />
    </Container>
  );
}

export default NotFound;
