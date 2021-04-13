// styles, icons and images
import { Container } from "./styles";

import { AiOutlineForm } from "react-icons/ai";

import registerImg from "../../assets/register.svg";

// components
import Input from "../Input";
import Button from "../Button";

// libs
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import { toast } from "react-toastify";

//services
import api from "../../services/api";

const FormRegister = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),

    email: yup
      .string()
      .email("Informe um e-mail válido")
      .required("Campo obrigatório"),

    cpf: yup
      .string()
      // eslint-disable-next-line no-useless-escape
      .length(11, "Digite o CPF sem pontos e traços")
      // .matches(/^(\d{3}\.){2}\d{3}\-\d{2}$/, "Digite um CPF válido!")
      .required("Campo obrigatório"),

    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Escolha ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial"
      )
      .required("Campo obrigatório"),
  });

  const handleData = (data) => {
    data.permission = 1;
    data.vaccines = [];
    console.log(data);

    api
      .post("/users", data)
      .then((response) => {
        toast.dark("🥳  Registro realizado com sucesso !!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log("response.data", response.data);
        history.push("/login");
      })
      .catch((e) => {
        toast.error("🤯 Falha ao registrar. Tente novamente !!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(e);
      });

    reset();
  };

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Container>
      <form onSubmit={handleSubmit(handleData)}>
        <h3>Cadastre-se</h3>
        <div>
          <Input
            text="Nome"
            name="name"
            error={errors.name?.message}
            setError={setError}
            type="text"
            register={register}
          />
        </div>
        <div>
          <Input
            text="E-mail"
            name="email"
            error={errors.email?.message}
            setError={setError}
            type="text"
            register={register}
          />
        </div>
        <div>
          <Input
            text="CPF"
            name="cpf"
            error={errors.cpf?.message}
            setError={setError}
            type="text"
            register={register}
          />
        </div>
        <div>
          <Input
            text="Senha"
            name="password"
            error={errors.password?.message}
            setError={setError}
            type="password"
            register={register}
          />
        </div>
        <div>
          <Button text="Registrar" type="submit" />
        </div>
        <span className="register" onClick={() => history.push("/login")}>
          Já possui conta? Faça login aqui <AiOutlineForm />
        </span>
      </form>
      <figure>
        <img src={registerImg} alt="" />
      </figure>
    </Container>
  );
};

export default FormRegister;
