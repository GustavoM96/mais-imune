import Input from "../Input";
import Button from "../Button";

import * as yup from "yup";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Container } from "./styles";

import api from "../../services/api";

function FormLogin() {
  const dispatch = useDispatch();

  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, setError, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onError = (errors, e) => console.log(errors);

  const dataForm = (data) => {
    console.log(data);
    api
      .post("/login", data)
      .then((response) => console.log(response.data))
      .catch((e) => console.log(e));
    reset();
  };

  return (
    <Container>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(dataForm, onError)}>
        <div>
          <Input
            setError={setError}
            errors={errors}
            name="email"
            text="Email"
            register={register}
            error={errors}
          />
        </div>
        <div>
          <Input
            setError={setError}
            errors={errors}
            name="password"
            text="Password"
            register={register}
          />
        </div>
        <div>
          <Button text="Submit" type="submit"></Button>
        </div>
      </form>
    </Container>
  );
}

export default FormLogin;
