import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import api from "../../services/api";

import { Container } from "./styles";

function LocalRequiredVaccine({ vaccine }) {
  const [locals, setlocals] = useState([]);
  const token = localStorage.getItem("token") || "";
  useEffect(() => {
    const header = {
      headers: {
        Authorization: `Bearer ${JSON.parse(token)}`,
      },
    };
    api
      .get(`locals?vaccines_like=${vaccine.id}`, header)
      .then((response) => {
        const filteredLocals = response.data.filter((el) =>
          el.vaccines.some((id) => id === vaccine.id)
        );

        setlocals(filteredLocals);
      })
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(
    "🚀 ~ file: index.jsx ~ line 6 ~ LocalRequiredVaccine ~ vaccine",
    vaccine
  );

  return (
    <Container>
      <h3>Compareça em uma das unidades abaixo</h3>
      {locals &&
        locals.map((local, index) => (
          <div key={index}>
            <span>{local.name}, </span>
            <span>{local.street}, </span>
            <span>{local.district}</span>
          </div>
        ))}
    </Container>
  );
}

export default LocalRequiredVaccine;
