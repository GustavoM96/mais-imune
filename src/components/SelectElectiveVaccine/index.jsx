import Input from "../Input";
import React, { useEffect, useState } from "react";

import { Container } from "./styles";
import api from "../../services/api";

function SelectElectiveVaccine() {
  const token = JSON.parse(localStorage.getItem("token"));

  const [vaccineList, setVaccineList] = useState([]);
  const [localList, setLocalList] = useState([]);
  const [vaccines, setVaccines] = useState([]);
  const [locals, setLocals] = useState([]);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const getVaccines = async () => {
      let response = await api.get("/vaccines/", headers);
      setVaccines(response.data);
      let vaccineNames = [];
      const electives = response.data.filter((el) => el.required !== true);

      electives.map((elem) => vaccineNames.push(elem.name));
      setVaccineList(vaccineNames);
    };

    getVaccines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <h3>Selecione a vacina desejada</h3>
      <Input
        handleChange={() => console.log("lul")}
        name="vaccines"
        type="select"
        options={vaccineList}
      />
    </Container>
  );
}

export default SelectElectiveVaccine;
