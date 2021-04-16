import { Container } from "./styles";

import ReportToPrint from "./reportToPrint";

import { useState, useEffect } from "react";
import api from "../../services/api";
import { cpfFormat, nameFormat } from "../../utils";

import { useSelector } from "react-redux";

const mockUsers = [
  "Wesley",
  "Silvio",
  "Lucas",
  "Gustavo",
  "Luciano",
  "Howard",
  "Gabriel",
  "Filipe",
  "Davis",
  "Amanda",
];

const ReportComponent = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const user = useSelector((state) => state.user);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const [users, setUsers] = useState([]);

  const buildReport = (array) => {
    let output = [];

    for (let i = 0; i < array.length; i++) {
      let user = array[i].name || array[i].user;
      let userCpf = cpfFormat(array[i].cpf);

      if (array[i].vaccines.length > 0) {
        for (let j = 0; j < array[i].vaccines.length; j++) {
          let vaccine = {};

          vaccine.user = nameFormat(user);
          vaccine.userCpf = userCpf;
          vaccine.name = array[i].vaccines[j].name;
          vaccine.date = array[i].vaccines[j].aplication;

          output.push(vaccine);
        }
      }
    }

    setUsers(output);
  };

  useEffect(() => {
    const getUsers = async () => {
      let response = await api.get("/users", headers);
      buildReport(response.data);
    };

    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ReportToPrint
        permission={user.permission}
        users={users}
        mockUsers={mockUsers}
      />
    </Container>
  );
};

export default ReportComponent;
