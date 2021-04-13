import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuAside from "../../components/MenuAside";
import MenuProfile from "../../components/MenuProfile";
import SelectElectiveVaccine from "../../components/SelectElectiveVaccine";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

import { Container } from "./styles";
import { useHistory } from "react-router";

function ElectiveVaccines() {
  const [user, setUser] = useState();

  const token = localStorage.getItem("token") || "";

  const user_id = jwt_decode(token).sub;
  const history = useHistory();
  const permission = JSON.parse(localStorage.getItem("permission")) || 1;

  useEffect(() => {
    if (permission === 3) {
      history.push("/dashboard");
    }
    if (permission === 2) {
      history.push("/registro-vacina");
    }

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
    <div className="flex">
      <MenuAside />
      <Container>
        <Header />
        <SelectElectiveVaccine />
      </Container>
      <MenuProfile user={user} />
    </div>
  );
}

export default ElectiveVaccines;
