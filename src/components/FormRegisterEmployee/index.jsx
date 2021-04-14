import api from "../../services/api";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

import { nameFormat } from "../../utils";

import Button from "../Button";
import Input from "../Input";

import {
  Container,
  Title,
  Form,
  ButtonContainer,
} from "../FormCreateVaccine/style";

const FormRegisterEmployee = ({ handleClose }) => {
  const token = JSON.parse(localStorage.getItem("token"));

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
      // .matches(/^(\d{3}.){2}\d{3}-\d{2}$/, 'CPF inválido')
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleData = (data) => {
    data.name = nameFormat(data.name);
    data.permission = 2;
    data.vaccines = [];

    console.log(data);

    // let NameFormated = "";

    // for (let i = 0; i < data.name.length; i++) {
    //   if (i === 0) {
    //     NameFormated += data.name[i].toUpperCase();
    //   }
    //   if (data.name[i - 1] === " ") {
    //     NameFormated += data.name[i].toUpperCase();
    //   } else if (i !== 0 && data.name[i - 1] !== " ") {
    //     NameFormated += data.name[i];
    //   }
    // }

    // data.name = NameFormated.trim();

    api
      .post("/users", data, headers)
      .then((response) => {
        toast.dark(" ✔️  Cadastro realizado com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(response.data);
        handleClose();
      })
      .catch((error) => {
        console.log(error);
        toast.error(" ✖️ Falha ao cadastrar. Tente novamente", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
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
