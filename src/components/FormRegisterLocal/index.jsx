import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import Button from "../Button";
import Input from "../Input";

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
          toast.dark(" ✔️ Cadastro realizado com sucesso", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

          handleClose();
        })
        .catch((error) => {
          toast.error(" ✖️ Falha ao realizar o cadastro. Tente novamente", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });

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
