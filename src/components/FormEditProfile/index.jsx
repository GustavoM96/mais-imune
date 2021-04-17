import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../Button";

import { Container, Title, Form, ButtonContainer, InputEdit } from "./style";
import { ErrorMessage, Header, Text } from "../Input/style";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInfo } from "../../store/modules/User/actions";

import { toastEditSuccess, toastEditError } from "../../utils/toastify";

import { nameFormat } from "../../utils";
import Input from "../Input";

const FormEditProfile = ({ handleClose }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  // const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch((state) => state.user);
  const user = useSelector((state) => state.user);

  const [valueInputName, setValueInputName] = useState("user.name");
  const [valueInputEmail, setValueInputEmail] = useState("user.email");
  const [isEditProfile, setIsEditProfile] = useState(false);

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
    if (!isEditProfile) {
      setIsEditProfile(true);
      data.name = nameFormat(data.name);
      api
        .patch(`/users/${user.id}`, data, headers)
        .then((resp) => {
          toastEditSuccess();
          dispatch(changeInfo(data.name, data.email));
          handleClose();
        })
        .catch((error) => {
          toastEditError();
          setIsEditProfile(false);
          console.log(error);
        });
    }
  };

  return (
    <Container>
      <Title>Editar Perfil</Title>

      <Form onSubmit={handleSubmit(handleData)}>
        <div>
          <Header>
            <Text>Nome Completo</Text>
            <ErrorMessage>{errors.name?.message}</ErrorMessage>
          </Header>
          <InputEdit
            defaultValue={nameFormat(user.name)}
            name="name"
            type="name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>
        <div>
          <Header>
            <Text>Email</Text>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </Header>
          <InputEdit
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
