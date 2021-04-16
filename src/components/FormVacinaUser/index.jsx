import { useState, useEffect } from "react";

import api from "../../services/api";
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

import { toastRegisterSuccess, toastRegisterError } from "../../utils/toastify";

let token = localStorage.getItem("token");

const FormVacinaUser = ({ userInfo, handleClose }) => {
  const [vacinesList, setVacinesList] = useState([]);
  const [vacine, setVacine] = useState();
  const [isEditProfile, setIsEditProfile] = useState(false);

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
    api
      .get("/vaccines", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) =>
        setVacinesList(calculateVac(response.data, userInfo[0]))
      )
      .catch((e) => console.log(e));
    console.log(userInfo[0]);
  }, []);

  const handleChange = (event) => {
    setVacine(event.target.value);
  };

  const handleData = (data) => {
    if (!isEditProfile) {
      setIsEditProfile(true);

      let vacina = {};
      vacina.vaccines = userInfo[0].vaccines;
      data.id = parseInt(data.id);

      for (let i = 0; i < vacinesList.length; i++) {
        if (vacinesList[i].id === data.id) {
          data.name = vacinesList[i].name;
          data.required = vacinesList[i].required;
          data.description = vacinesList[i].description;
          data.doses = vacinesList[i].doses;
        }
      }

      vacina.vaccines.push(data);
      data = vacina;

      api
        .patch(`/users/${userInfo[0].id}`, data, {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => {
          toastRegisterSuccess();
          console.log(response.data);
          handleClose();
        })
        .catch((e) => {
          setIsEditProfile(false);

          toastRegisterError();
          console.log(e);
        });
    }
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
            <option value="">Selecione a vacina</option>
            {vacinesList.map((vacine, index) => (
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
