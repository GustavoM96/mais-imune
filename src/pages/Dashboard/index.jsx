import React from "react";
import Header from "../../components/Header";
import UserCardContainer from "../../components/UserCardContainer";

import { Container } from "./styles";

function Dashboard() {
  return (
    <Container>
      <Header />
      <UserCardContainer />
    </Container>
  );
}

export default Dashboard;
