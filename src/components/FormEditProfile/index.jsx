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

const FormEditProfile = ({ handleClose }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem("user"));

  const [valueInputName, setValueInputName] = useState("user.name");
  const [valueInputEmail, setValueInputEmail] = useState("user.email");

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

    api
      .patch(`/users/${user.id}`, data, headers)
      .then((resp) => {
        console.log(resp);
        handleClose();
      })
      .catch((error) => console.log(error));
  };

  const handleValueName = (e) => {
    setValueInputName(e.target.value);
    console.log("e.target.value");
  };
  const handleValueEmail = (e) => {
    setValueInputEmail(e.target.value);
    console.log("e.target.value");
  };

  return (
    <Container>
      <Title>Editar Perfil</Title>
      <Form onSubmit={handleSubmit(handleData)}>
        <div>
          <Text>Nome Completo</Text>
          <InputEdit
            defaultValue={user.name}
            name="name"
            type="name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>
        <div>
          <Text>Email</Text>
          <InputEdit
            onInput={handleValueEmail}
            defaultValue={user.email}
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
