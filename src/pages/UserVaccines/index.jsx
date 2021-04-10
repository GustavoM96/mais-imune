import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import UserCardContainer from "../../components/UserCardContainer";
import jwt_decode from "jwt-decode";

import { Container } from "./styles";
import api from "../../services/api";

function Dashboard() {
  const [user, setUser] = useState();
  const [vaccines, setVaccines] = useState([]);

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

  useEffect(() => {
    if (user) {
      const filter = "?id=4&id=1&id=2";
      api
        .get(`/vaccines?${"?id=4&id=1&id=2"}`, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          const newVaccines = vaccines;
          newVaccines.push(response.data);
          setVaccines(newVaccines);
          // setVaccines([...vaccines, response.data]);
        })
        .catch((e) => console.log(e));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(vaccines);
  }, [vaccines]);

  return (
    <Container>
      <Header />
      <UserCardContainer vaccines={vaccines} user={user} />
    </Container>
  );
}

export default Dashboard;
