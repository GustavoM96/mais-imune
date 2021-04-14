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

const FormRegisterLocal = ({ handleClose }) => {
  const token = JSON.parse(localStorage.getItem("token"));

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
    const newData = { ...data, vaccines: [] };
    api
      .post("/locals", newData, headers)
      .then((response) => {
        toastRegisterSuccess();
        handleClose();
      })
      .catch((error) => {
        toastRegisterError();
        console.log(error);
      });
  };
  return (
    <Container>
      <Title>Cadastro de Estabelecimento</Title>
      <Form onSubmit={handleSubmit(handleData)}>
        <Input
          name="name"
          text="Nome"
          error={errors.name?.message}
          register={register}
        />
        <Input
          name="street"
          text="Endereço"
          error={errors.street?.message}
          register={register}
        />
        <Input
          name="district"
          text="Bairro"
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
