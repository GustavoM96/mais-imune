import Input from "../Input";
import Button from "../Button";
import loginImg from "../../assets/login.svg";
import { AiOutlineForm } from "react-icons/ai";

import * as yup from "yup";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import jwt_decode from "jwt-decode";

import { Container } from "./styles";

import api from "../../services/api";
import { toast } from "react-toastify";
import { getUser } from "../../services/getUser";
import { useDispatch } from "react-redux";

function FormLogin() {
  const history = useHistory();
  const dispatch = useDispatch((state) => state.user);

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

  const redirect = (token) => {
    const user_id = jwt_decode(token).sub;

    api
      .get(`/users/${user_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("user_id", JSON.stringify(response.data.id));
        localStorage.setItem("name", JSON.stringify(response.data.name));
        localStorage.setItem(
          "permission",
          JSON.stringify(response.data.permission)
        );

        getUser(dispatch, response.data.id, token);
        if (response.data.permission === 3) {
          history.push("/dashboard");
        } else if (response.data.permission === 2) {
          history.push("/registro-vacina");
        } else {
          history.push("/minhas_vacinas");
        }
      })
      .catch((e) => console.log(e));
  };

  const dataForm = (data) => {
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
        localStorage.clear();
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.accessToken)
        );
        redirect(response.data.accessToken);
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
        <h3>Login</h3>
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
          Ainda não é cadastrado? Faça seu registro aqui <AiOutlineForm />
        </span>
      </form>
      <figure>
        <img src={loginImg} alt="" />
      </figure>
    </Container>
  );
}

export default FormLogin;
