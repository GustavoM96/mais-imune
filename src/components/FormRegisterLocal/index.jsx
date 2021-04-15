import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../Button";
import Input from "../Input";

import { toastRegisterSuccess, toastRegisterError } from "../../utils/toastify";

import {
  Container,
  Title,
  Form,
  ButtonContainer,
} from "../FormCreateVaccine/style";
import { useState } from "react";

const FormRegisterLocal = ({ handleClose }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const [isEditProfile, setIsEditProfile] = useState(false);
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const schema = yup.object().shape({
    name: yup
      .string("Campo deve ser preenchido com texto")
      .required("Campo obrigatório"),
    street: yup
      .string("Campo deve ser preenchido com texto")
      .required("Campo obrigatório"),
    district: yup
      .string("Campo deve ser preenchido com texto")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleData = (data) => {
    if (!isEditProfile) {
      setIsEditProfile(true);
      const newData = { ...data, vaccines: [] };
      api
        .post("/locals", newData, headers)
        .then((response) => {
          toastRegisterSuccess();
          handleClose();
        })
        .catch((error) => {
          toastRegisterError();
          setIsEditProfile(false);

          console.log(error);
        });
    }
  };
  return (
    <Container>
      <Title>Cadastro de Estabelecimento</Title>
      <Form onSubmit={handleSubmit(handleData)}>
        <Input
          name="name"
          text="Nome"
          placeholder="Insira o nome do estabelecimento aqui!"
          error={errors.name?.message}
          register={register}
        />
        <Input
          name="street"
          text="Endereço"
          placeholder="Insira o endereço do estabelecimento aqui!"
          error={errors.street?.message}
          register={register}
        />
        <Input
          name="district"
          text="Bairro"
          placeholder="Insira o nome do bairro aqui!"
          error={errors.district?.message}
          register={register}
        />
        <ButtonContainer>
          <Button text="Cadastrar" type="submit" marginTop="20" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FormRegisterLocal;
