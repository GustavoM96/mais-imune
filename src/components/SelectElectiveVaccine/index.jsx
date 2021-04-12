import Input from "../Input";
import React, { useEffect, useState } from "react";
import Modal from "../Modal/index";

import { Container } from "./styles";
import api from "../../services/api";
import ElectivesLocals from "../ElectivesLocals";

function SelectElectiveVaccine() {
  const token = JSON.parse(localStorage.getItem("token"));
  const [open, setOpen] = useState(false);
  const [vaccine, setVaccine] = useState({});

  const [vaccineList, setVaccineList] = useState([]);
  const [vaccines, setVaccines] = useState([]);

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

  const handleChange = (event) => {
    const vaccine = vaccines.filter((el) => el.name === event.target.value)[0];
    setVaccine(vaccine);

    handleModal();
  };

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <Container>
      <h3>Selecione a vacina desejada</h3>
      <Input
        handleChange={handleChange}
        name="vaccines"
        type="select"
        options={vaccineList}
      >
        <option hidden disabled selected value>
          Selecione uma vacina
        </option>
      </Input>
      <Modal open={open} handleClose={handleModal}>
        <ElectivesLocals vaccine={vaccine} />
      </Modal>
    </Container>
  );
}

export default SelectElectiveVaccine;
