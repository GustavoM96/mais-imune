import React from "react";
import { useHistory } from "react-router";
import Button from "../../components/Button";

import { Container } from "./styles";

function Home() {
  const history = useHistory();
  return (
    <Container>
      <div>
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
    </Container>
  );
}

export default Home;
