import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import UserCardContainer from "../../components/UserCardContainer";
import jwt_decode from "jwt-decode";

import { Container } from "./styles";
import api from "../../services/api";

function Dashboard() {
  const [user, setUser] = useState();

  const token = localStorage.getItem("token") || "";

  const user_id = jwt_decode(token).sub;

  useEffect(() => {
    api
      .get(`/users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      <UserCardContainer user={user} />
    </Container>
  );
}

export default Dashboard;
