import { useState, useEffect } from "react";

import Button from "../Button";
import api from "../../services/api";
import Modal from "../Modal";
import FormVacinaUser from "../FormVacinaUser";
import { Conteiner, BoldText, TextConteiner, InputConteiner } from "./style";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import { cpfFormat, nameFormat } from "../../utils";

const PatientSearch = () => {
  const [search, setSearch] = useState(false);
  const [user, setUser] = useState();
  const [open, setOpen] = useState(false);
  const schema = yup.object().shape({
    cpf: yup
      .string("")
      .matches(
        /[0-9]{3}?[0-9]{3}?[0-9]{3}?[0-9]{2}/,
        "Digite um CPF válido sem pontos e traço"
      )
      .max(11, "Máximo de 11 dígitos")
      .required("Campo obrigatório"),
  });
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  let token = localStorage.getItem("token") || "";

  const handleData = (data) => {
    setSearch(false);
    api
      .get(`/users?cpf=${data.cpf}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(() => setSearch(true), 1000);
  };

  useEffect(() => {}, [user]);

  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleData)}>
        <InputConteiner>
          <Input
            name="cpf"
            type="text"
            placeholder={"Digite o CPF do paciente"}
            setError={setError}
            error={errors.cpf?.message}
            register={register}

            // onChange={(e) => setCpf(e.target.value)}
          />
          <Button text="Buscar" />
        </InputConteiner>
      </form>
      {search ? (
        user[0] ? (
          <Conteiner>
            <h2>Dados do usuario</h2>
            <TextConteiner>
              <BoldText>Nome: {nameFormat(user[0]?.name)}</BoldText>
              <BoldText>CPF: {cpfFormat(user[0]?.cpf)}</BoldText>
            </TextConteiner>
            <Modal open={open} handleClose={handleClose}>
              <FormVacinaUser userInfo={user} handleClose={handleClose} />
            </Modal>
            <Button text="Vacinar" handleClick={() => setOpen(true)}></Button>
          </Conteiner>
        ) : (
          <BoldText>CPF não cadastrado</BoldText>
        )
      ) : null}
    </div>
  );
};
export default PatientSearch;
