import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { InputEdit } from "./style";
import Button from "../Button";
import Input from "../Input";

import {
  Container,
  Title,
  Form,
  ButtonContainer,
} from "../FormCreateVaccine/style";
import { Text } from "../Input/style";
import { useState } from "react";

const FormEditProfile = ({ user }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [valueInputName, setValueInputName] = useState(`${user.name}`);
  const [valueInputEmail, setValueInputEmail] = useState(`${user.email}`);

  const headers = { headers: { Authorization: `Bearer ${token}` } };

  const schema = yup.object().shape({
    name: yup
      .string("Campo deve ser preenchido com texto")
      .required("Campo obrigatório"),
    email: yup
      .string("Campo deve ser preenchido com texto")
      .email("Deve ser preenchido um e-mail")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleData = (data) => {
    console.log(data);
    if (user.id) {
      api
        .patch(`/users/${user.id}`, data, headers)
        .catch((error) => console.log(error));
    }
  };
  return (
    <Container>
      <Title>Editar Perfil</Title>
      <Form onSubmit={handleSubmit(handleData)}>
        <div>
          <Text>Nome Completo</Text>
          <InputEdit
            // onChange={(event) => {
            //   setValueInputName(event.target.value);
            // }}
            // value={valueInputName}
            name="name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>

        <div>
          <Text>Email</Text>
          <InputEdit
            // onChange={(event) => {
            //   setValueInputEmail(event.target.value);
            // }}
            // value={valueInputEmail}
            name="email"
            type="email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <ButtonContainer>
          <Button text="Salvar" type="submit" marginTop="20" />
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default FormEditProfile;
