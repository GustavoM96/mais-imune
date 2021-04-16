import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuAside from "../../components/MenuAside";
import MenuProfile from "../../components/MenuProfile";
import SelectElectiveVaccine from "../../components/SelectElectiveVaccine";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

import { Container } from "./styles";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

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
    <motion.div
      className="flex"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <MenuAside />
      <Container>
        <h2>Vacinas Eletivas</h2>
        <Header />
        <SelectElectiveVaccine />
      </Container>
      <MenuProfile user={user} />
    </motion.div>
  );
}

export default ElectiveVaccines;
