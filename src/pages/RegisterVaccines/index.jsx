import { Container, CardContainer } from "./styles";

import registerUserIcon from "../../assets/register_users_access2.svg";
import vaccineRegisterIcon from "../../assets/register_vaccine_icon.svg";
import stablishmentRegisterIcon from "../../assets/register_stablishment_icon.svg";
import vaccineBondRegisterIcon from "../../assets/register_vaccine_bond_icon.svg";

import Header from "../../components/Header";
import PatientSearch from "../../components/PatientSearch";
import MenuAside from "../../components/MenuAside";
import MenuProfile from "../../components/MenuProfile";

const RegisterVacine = () => {
  const cards = [
    [
      registerUserIcon,
      "Cadastro de Profissionais de Saúde",
      "Cadastre perfis de profissionais de saúde",
      "Cadastrar",
      "formRegisterEmployee",
    ],
    [
      vaccineRegisterIcon,
      "Cadastro de vacinas",
      "Cadastre novas vacinas",
      "Cadastrar",
      "formCreateVaccine",
    ],
    [
      stablishmentRegisterIcon,
      "Cadastro de estabelecimentos",
      "Cadastre novos estabelecimentos",
      "Cadastrar",
      "formRegisterLocal",
    ],
    [
      vaccineBondRegisterIcon,
      "Vínculo de vacinas",
      "Vincule a vacina a um estabelecimento de saúde",
      "Adicionar",
      "formVaccineBond",
    ],
  ];

  return (
    <div className="flex">
      <MenuAside />
      <Container>
        <h2>RegisterVacine</h2>
        <Header />
        <h3>Busca por paciente</h3>
        <PatientSearch></PatientSearch>
      </Container>
      <MenuProfile />
    </div>
  );
};

export default RegisterVacine;
