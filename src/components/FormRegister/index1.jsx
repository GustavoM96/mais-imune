import Input from "../Input";
import Button from "../Button";
import registerImg from "../../assets/register.svg";
import { AiOutlineForm } from "react-icons/ai";

import * as yup from "yup";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./styles";

import api from "../../services/api";
import { toast } from "react-toastify";

const FormRegister = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email("Email Invalido").required("Campo obrigatório"),

    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const dataForm = (data) => {
    console.log(data);
    api
      .post("/login", data)
      .then((response) => {
        toast.dark("💉  Bem vindo !!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        localStorage.setItem("token", JSON.stringify(response.data));
        history.push("/");
      })
      .catch((e) => {
        toast.error("😵 Falha ao logar !!", {
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

  return (
    <Container>
      <form onSubmit={handleSubmit(dataForm)}>
        <h3>Cadastre-se</h3>
        <div>
          <Input
            setError={setError}
            name="email"
            text="Email"
            register={register}
            error={errors.email?.message}
          />
        </div>
        <div>
          <Input
            setError={setError}
            errors={errors}
            name="password"
            text="Password"
            type="password"
            error={errors.password?.message}
            register={register}
          />
        </div>
        <div>
          <Button text="Logar" type="submit"></Button>
        </div>
        <span className="register" onClick={() => history.push("/registro")}>
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
