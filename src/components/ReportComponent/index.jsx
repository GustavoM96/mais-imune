import { Container } from "./styles";
<<<<<<< HEAD

import { useState, useEffect } from "react";

import api from "../../services/api";

import { cpfFormat, nameFormat } from "../../utils";

=======
import { useState, useEffect } from "react";
import api from "../../services/api";

>>>>>>> e6cf341b6096ab3e48af6a112b795b66822d8cf7
const ReportComponent = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const [users, setUsers] = useState([]);

  const buildReport = (array) => {
    let output = [];

    for (let i = 0; i < array.length; i++) {
      let user = array[i].name || array[i].user;
<<<<<<< HEAD
      let userCpf = cpfFormat(array[i].cpf);
=======
      let userCpf = array[i].cpf;
>>>>>>> e6cf341b6096ab3e48af6a112b795b66822d8cf7

      if (array[i].vaccines.length > 0) {
        for (let j = 0; j < array[i].vaccines.length; j++) {
          let vaccine = {};
<<<<<<< HEAD

          vaccine.user = nameFormat(user);
=======
          vaccine.user = user;
>>>>>>> e6cf341b6096ab3e48af6a112b795b66822d8cf7
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
  }, []);

<<<<<<< HEAD
  console.log(users);

=======
>>>>>>> e6cf341b6096ab3e48af6a112b795b66822d8cf7
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
          {users &&
<<<<<<< HEAD
            users
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
              ))}
=======
            users.map((elem, index) => (
              <tr key={index}>
                <td>{elem.date}</td>
                <td>{elem.user}</td>
                <td>{elem.userCpf}</td>
                <td>{elem.name}</td>
              </tr>
            ))}
>>>>>>> e6cf341b6096ab3e48af6a112b795b66822d8cf7
        </tbody>
      </table>
    </Container>
  );
};

export default ReportComponent;
