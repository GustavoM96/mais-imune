import { useState, useEffect } from "react";

import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import calculateVac from "./calculateVac";

import Button from "../Button";
import {
  SelectInput,
  InputData,
  LabelStyled,
  StyledForm,
  FormConteiner,
  ErrorMessage,
} from "./style";
//este token sera substituido apos feita a pagina de login
let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1Y2FzQG1haWwuY29tIiwiaWF0IjoxNjE3OTg5NzE1LCJleHAiOjE2MTc5OTMzMTUsInN1YiI6IjMifQ.uII_fGxViVsz8lCHcvwoLG0wtjnYlq_7SfpIfjbYVXQ";
const headers = { headers: { Authorization: `Bearer ${token}` } };

const FormVacinaUser = ({ userInfo }) => {
  const [vacines, setVacines] = useState([]);
  const [vacine, setVacine] = useState();

  const schema = yup.object().shape({
    id: yup
      .string("Este campo deve ser preenchido")
      .required("Este campo deve ser preenchido"),
    aplication: yup.string().required("Este campo deve ser preenchido"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  useEffect(() => {
    axios
      .get(`https://mais-imune.herokuapp.com/vaccines`, headers)
      .then((response) => {
        setVacines(calculateVac(response.data, userInfo));
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (event) => {
    setVacine(event.target.value);
  };

  const handleData = (data) => {
    let vacina = {};
    vacina.vaccines = userInfo.vaccines;
    data.id = parseInt(data.id);
    vacina.vaccines.push(data);
    data = vacina;

    axios
      .patch(
        `https://mais-imune.herokuapp.com/users/${userInfo.id}`,
        data,
        headers
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  return (
    <FormConteiner>
      <h3>Registrar vacinação</h3>
      <form onSubmit={handleSubmit(handleData)}>
        <StyledForm>
          <LabelStyled>Vacina</LabelStyled>
          <SelectInput
            value={vacine}
            onChange={handleChange}
            {...register("id", { required: true })}
          >
            <option value=""></option>
            {vacines.map((vacine, index) => (
              <option value={vacine.id} key={index}>
                {vacine.name}
              </option>
            ))}
          </SelectInput>
          <ErrorMessage>{errors.id?.message}</ErrorMessage>
          <LabelStyled>Data da aplicação</LabelStyled>
          <InputData
            type="date"
            {...register("aplication", { required: true })}
          ></InputData>
          <ErrorMessage>{errors.aplication?.message}</ErrorMessage>
          <Button type="submit" text={"Confirmar"}></Button>
        </StyledForm>
      </form>
    </FormConteiner>
  );
};
export default FormVacinaUser;
