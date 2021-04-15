import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { nameFormat } from "../../utils";
import { toastRegisterSuccess, toastRegisterError } from "../../utils/toastify";

import Button from "../Button";
import Input from "../Input";

import {
  Container,
  Title,
  Form,
  ButtonContainer,
} from "../FormCreateVaccine/style";
import { useState } from "react";

const FormRegisterEmployee = ({ handleClose }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [isEditProfile, setIsEditProfile] = useState(false);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const schema = yup.object().shape({
    name: yup
      .string("Campo deve ser preenchido com texto")
      .matches(
        /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
        "Seu nome deve conter apenas letras"
      )
      .required("Campo obrigatório"),
    email: yup
      .string("Campo deve ser preenchido com texto")
      .email("Deve ser preenchido um e-mail")
      .required("Campo obrigatório"),
    cpf: yup
      .string("")
      .length(11, "Digite o CPF sem pontos e traços")
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
      data.name = nameFormat(data.name);

      const newData = { ...data, permission: 2, vaccines: [] };

      console.log(newData);

      api
        .post("/users", newData, headers)
        .then((response) => {
          toastRegisterSuccess();
          console.log(response.data);
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
      <Title>Cadastro de profissionais de saúde</Title>
      <Form onSubmit={handleSubmit(handleData)}>
        <Input
          name="name"
          text="Nome Completo"
          error={errors.name?.message}
          register={register}
        />
        <Input
          name="email"
          text="Email"
          type="email"
          error={errors.email?.message}
          register={register}
        />
        <Input
          name="cpf"
          text="CPF"
          error={errors.cpf?.message}
          register={register}
        />
        <Input
          name="password"
          type="password"
          text="Senha"
          error={errors.password?.message}
          register={register}
        />
        <ButtonContainer>
          <Button text="Cadastrar" type="submit" marginTop="20" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FormRegisterEmployee;
