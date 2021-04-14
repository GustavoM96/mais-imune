import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import Button from "../Button";
import Input from "../Input";

import { Text } from "../Input/style";
import { Container, Title, Form, TextArea, ButtonContainer } from "./style";

const FormCreateVaccine = ({ handleClose }) => {
  const token = JSON.parse(localStorage.getItem("token"));

  const headers = { headers: { Authorization: `Bearer ${token}` } };

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
    api
      .post("/vaccines", data, headers)
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
  };

  return (
    <Container>
      <Title>Cadastro de Vacinas</Title>
      <Form onSubmit={handleSubmit(handleData)}>
        <Input
          name="name"
          text="Nome"
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
        <Input
          name="doses"
          text="Doses"
          type="select"
          options={[1, 2, 3]}
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
