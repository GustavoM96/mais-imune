import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Button from "../Button";
import Input from "../Input";

import { Text } from "../Input/style";
import { Container, Title, Form, TextArea, ButtonContainer } from "./style";
import { useState } from "react";

import { toastRegisterSuccess, toastRegisterError } from "../../utils/toastify";

const FormCreateVaccine = ({ handleClose }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = { headers: { Authorization: `Bearer ${token}` } };
  const [isEditProfile, setIsEditProfile] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string("Campo deve ser preenchido com texto")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleData = (data) => {
    data.doses = "1";
    if (!isEditProfile) {
      setIsEditProfile(true);
      api
        .post("/vaccines", data, headers)
        .then((response) => {
          toastRegisterSuccess();
          handleClose();
        })
        .catch((error) => {
          setIsEditProfile(false);

          toastRegisterError();
        });
    }
  };

  return (
    <Container>
      <Title>Cadastro de Vacinas</Title>
      <Form onSubmit={handleSubmit(handleData)}>
        <Input
          name="name"
          text="Nome"
          placeholder="Insira o nome da vacina aqui!"
          error={errors.name?.message}
          register={register}
        />
        <Input
          name="required"
          text="Obrigatório?"
          type="checkbox"
          error={errors.required?.message}
          register={register}
        />

        <div>
          <Text>Descrição</Text>
          <TextArea name="description" {...register("description")} rows={3} />
        </div>
        <ButtonContainer>
          <Button text="Cadastrar" type="submit" marginTop="20" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FormCreateVaccine;
