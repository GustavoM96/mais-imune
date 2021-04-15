import api from "../../services/api";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../Button";
import Input from "../Input";

import { toastRegisterSuccess, toastRegisterError } from "../../utils/toastify";

import { Container, Title, Form, ButtonContainer } from "./style";

const FormVaccineBond = ({ handleClose }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const [isEditProfile, setIsEditProfile] = useState(false);
  const [vaccineList, setVaccineList] = useState([]);
  const [localList, setLocalList] = useState([]);
  const [vaccines, setVaccines] = useState([]);
  const [locals, setLocals] = useState([]);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const schema = yup.object().shape({
    vaccines: yup
      .string("Campo deve ser preenchido com texto")
      .required("Campo obrigatório"),
    locals: yup
      .string("Campo deve ser preenchido com texto")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleData = (data) => {
    const vaccine = vaccines.filter((elem) => elem.name === data.vaccines);
    const local = locals.filter((elem) => elem.name === data.locals);

    if (
      local[0].vaccines.includes(vaccine[0].id) ||
      local[0].vaccines.filter((elem) => elem.id === vaccine[0].id).length > 0
    ) {
      toastRegisterError();
    } else {
      const newData = { vaccines: [...local[0].vaccines, vaccine[0]] };

      api
        .patch(`/locals/${local[0].id}`, newData, headers)
        .then((response) => {
          toastRegisterSuccess();
          console.log("response.data", response.data);
          handleClose();
        })
        .catch((error) => {
          toastRegisterError();
          console.log(error);
        });
    }
  };

  useEffect(() => {
    const getVaccines = async () => {
      let response = await api.get("/vaccines/", headers);
      setVaccines(response.data);
      let vaccineNames = [];
      response.data.map((elem) => vaccineNames.push(elem.name));
      setVaccineList(vaccineNames);
    };

    getVaccines();

    const getLocals = async () => {
      let response = await api.get("/locals/", headers);
      setLocals(response.data);
      let localNames = [];
      response.data.map((elem) => localNames.push(elem.name));
      setLocalList(localNames);
    };

    getLocals();
  }, []);

  return (
    <Container>
      <Title>Vínculo de Vacinas</Title>
      <Form onSubmit={handleSubmit(handleData)}>
        <Input
          name="vaccines"
          text="Vacinas"
          type="select"
          options={vaccineList}
          register={register}
        />
        <Input
          name="locals"
          text="Estabelecimentos"
          type="select"
          options={localList}
          register={register}
        />
        <ButtonContainer>
          <Button text="Cadastrar" type="submit" marginTop="20" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FormVaccineBond;
