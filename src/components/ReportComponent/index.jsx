import { Container } from "./styles";

import { useState, useEffect } from "react";
import api from "../../services/api";
import { cpfFormat, nameFormat, dateFormat } from "../../utils";
import Skeleton from "@material-ui/lab/Skeleton";

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

          console.log(dateFormat(vaccine.date));

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
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Nome</th>
            <th>CPF</th>
            <th>Vacina</th>
          </tr>
        </thead>

        <tbody>
          {users[0]
            ? users
                .sort((a, b) => {
                  return a.date - b.date;
                })
                .map((elem, index) => (
                  <tr key={index}>
                    <td>{elem.date}</td>
                    <td>{elem.user}</td>
                    <td>{elem.userCpf}</td>
                    <td>{elem.name}</td>
                  </tr>
                ))
            : mockUsers.map((_, index) => (
                <tr key={index}>
                  <td>
                    <Skeleton variant="text" />
                  </td>
                  <td>
                    <Skeleton variant="text" />
                  </td>
                  <td>
                    <Skeleton variant="text" />
                  </td>
                  <td>
                    <Skeleton variant="text" />
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </Container>
  );
};

export default ReportComponent;
