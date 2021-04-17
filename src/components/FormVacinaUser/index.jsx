import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../Input";

import Button from "../Button";
import { InputData, LabelStyled, Container, ErrorMessage } from "./style";

import { toastRegisterSuccess, toastRegisterError } from "../../utils/toastify";

const FormVacinaUser = ({ userInfo, handleClose }) => {
  const [vaccinesName, setVaccinesName] = useState([]);
  const [vaccinesList, setVaccinesList] = useState([]);
  const [filteredVaccines, setFilteredVaccines] = useState([]);
  const user = useSelector((state) => state.user);

  let token = localStorage.getItem("token");

  const schema = yup.object().shape({
    vaccine: yup
      .string("Este campo deve ser preenchido")
      .required("Este campo deve ser preenchido"),
    date: yup.string().required("Escolha a data de aplicação"),
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
      .then((response) => {
        setVaccinesList(response.data);
      })
      .catch((e) => console.log(e));
    console.log(userInfo[0]);
  }, [userInfo, token]);

  useEffect(() => {
    setFilteredVaccines(
      // eslint-disable-next-line array-callback-return
      vaccinesList.filter((vaccine) => {
        if (!userInfo[0].vaccines.find((vac) => vac.id === vaccine.id)) {
          return vaccine;
        }
      })
    );
  }, [vaccinesList, userInfo]);

  useEffect(() => {
    const names = [];

    filteredVaccines.forEach((vaccine) => names.push(vaccine.name));
    setVaccinesName(names);
  }, [filteredVaccines]);

  const handleData = (data) => {
    const vaccine = vaccinesList.filter((elem) => elem.name === data.vaccine);
    const newData = {
      vaccines: [
        ...userInfo[0].vaccines,
        {
          ...vaccine[0],
          aplication: data.date,
          professional: user.name,
        },
      ],
    };
    api
      .patch(`/users/${userInfo[0].id}`, newData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        toastRegisterSuccess();
        handleClose();
      })
      .catch((e) => {
        toastRegisterError();
        console.log(e);
      });
  };
  return (
    <Container>
      <h3>Registrar vacinação</h3>
      <form onSubmit={handleSubmit(handleData)}>
        <Input
          // text="Selecione a vacina"
          options={vaccinesName}
          type="select"
          name="vaccine"
          register={register}
          error={errors.vaccine?.message}
        >
          <option value={null}>Selecione a vacina</option>
        </Input>
        <div>
          <LabelStyled>Data da aplicação</LabelStyled>
          <InputData type="date" {...register("date", { required: true })} />
          <ErrorMessage>{errors.date?.message}</ErrorMessage>
        </div>

        <Button text="Confirmar" />
      </form>
    </Container>
  );
};
export default FormVacinaUser;
