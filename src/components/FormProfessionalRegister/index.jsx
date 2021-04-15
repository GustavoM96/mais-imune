// styles, icons and images
import { Container } from "./styles";

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

const FormProfessionalRegister = () => {
  const history = useHistory();
  const [isEditProfile, setIsEditProfile] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),

    email: yup
      .string()
      .email("Informe um e-mail válido!")
      .required("Campo obrigatório!"),

    cpf: yup
      .string()
      .matches(/^(\d{3}\.){2}\d{3}\-\d{2}$/, "Digite um CPF válido!")
      .required("Campo obrigatório!"),

    password: yup
      .string()
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Escolha ao menos uma letra maiúscula, uma minúscula, um número e um caracter especial!"
      )
      .required("Campo obrigatório"),
  });

  const handleData = (data) => {
    if (!isEditProfile) {
      setIsEditProfile(true);
      data.permission = 2;
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
          setIsEditProfile(false);

          console.log(e);
        });

      reset();
    }
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
        <h3>Cadastro de profissionais de saúde</h3>
        <div>
          <Input
            text="Nome"
            name="name"
            error={errors.name?.message}
            placeholder="Insira o nome do prfissional aqui!"
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
            placeholder="Insira o e-mail do prfissional aqui!"
            type="text"
            register={register}
          />
        </div>
        <div>
          <Input
            text="CPF"
            name="cpf"
            placeholder="Insira o cpf do prfissional neste formato: 00000000000"
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
            placeholder="Insira a senha aqui!"
            type="password"
            register={register}
          />
        </div>
        <div>
          <Button text="Cadastrar" type="submit" />
        </div>
      </form>
    </Container>
  );
};

export default FormProfessionalRegister;
