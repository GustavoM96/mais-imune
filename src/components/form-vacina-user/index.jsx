import { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const FormVacinaUser = ({ userInfo }) => {
  const [vacines, setVacines] = useState([]);
  const [vacine, setVacine] = useState();

  const calculateVac = (vacList) => {
    let check = false;
    let vacinasDisponiveis = [];
    for (let i = 0; i < vacList.length; i++) {
      check = false;
      for (let j = 0; j < userInfo.vaccines.length; j++) {
        if (vacList[i].id === userInfo.vaccines[j]) {
          check = true;
        }
      }
      if (check === false) {
        vacinasDisponiveis.push(vacList[i]);
      }
    }
    return vacinasDisponiveis;
  };

  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    let listaVac = [
      {
        id: 1,
        name: "H1N1",
        required: true,
        doses: 1,
        description: "mensagem de descricao teste",
      },
      {
        id: 2,
        name: "COVID",
        required: true,
        doses: 1,
        description: "mensagem de descricao teste",
      },
      {
        id: 3,
        name: "Hepatite B",
        required: true,
        doses: 1,
        description: "mensagem de descricao teste",
      },
      {
        id: 4,
        name: "Tetano",
        required: true,
        doses: 1,
        description: "mensagem de descricao teste",
      },
      {
        id: 5,
        name: "Influenza",
        required: false,
        doses: 1,
        description: "mensagem de descricao teste",
      },
    ];

    setVacines(calculateVac(listaVac));
  }, []);

  const handleChange = (event) => {
    setVacine(event.target.value);
  };

  const handleData = (data) => {
    let vacina = userInfo.vaccines;
    vacina.push(parseInt(data.vaccines));
    data.vaccines = vacina;
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <label>Vacina</label>
      <select
        name="vaccines"
        value={vacine}
        onChange={handleChange}
        {...register("vaccines")}
      >
        {vacines.map((vacine, index) => (
          <option value={vacine.id} key={index}>
            {vacine.name}
          </option>
        ))}
      </select>
      {/* <input type="date" {...register("data")}></input> */}
      <button type="submit">enviar</button>
    </form>
  );
};
export default FormVacinaUser;

// //------------------------------------------------------------------//
// let token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQG1haWwuY29tIiwiaWF0IjoxNjE3OTU5NTU5LCJleHAiOjE2MTc5NjMxNTksInN1YiI6IjMifQ.ni3ztIhy9pLUp7-uyRK-OvLRqW05xxVyayLmC3lGNQU";
// const headers = { headers: `Bearer: ${token}` };
// axios
//   .get(`https://mais-imune.herokuapp.com/vaccines`, headers)
//   .then((response) => console.log(response.data))
//   .catch((error) => console.log(error));
// //--------------------------------------------------------------------//
//
