import { Container, CardContainer } from "./styles";

import registerUserIcon from "../../assets/register_users_access2.svg";
import vaccineRegisterIcon from "../../assets/register_vaccine_icon.svg";
import stablishmentRegisterIcon from "../../assets/register_stablishment_icon.svg";
import vaccineBondRegisterIcon from "../../assets/register_vaccine_bond_icon.svg";

import Header from "../../components/Header";
import CardDashboard from "../../components/CardDashboard";

import MenuAside from "../../components/MenuAside";
import MenuProfile from "../../components/MenuProfile";

const Dashboard = () => {
  const cards = [
    [
      registerUserIcon,
      "Cadastro de Profissionais de Saúde",
      "Cadastre perfis de profissionais de saúde",
      "Cadastrar",
      "formRegister",
    ],
    [
      vaccineRegisterIcon,
      "Cadastro de vacinas",
      "Cadastre novas vacinas",
      "Cadastrar",
      "formRegister",
    ],
    [
      stablishmentRegisterIcon,
      "Cadastro de estabelecimentos",
      "Cadastre novos estabelecimentos",
      "Cadastrar",
      "formRegister",
    ],
    [
      vaccineBondRegisterIcon,
      "Vínculo de vacinas",
      "Vincule a vacina a um estabelecimento de saúde",
      "Adicionar",
      "formRegister",
    ],
  ];

  return (
    <div className="flex">
      <MenuAside />
      <Container>
        <h2>Dashboard</h2>
        <Header />
        <h3>Cadastros</h3>
        <CardContainer>
          {cards.map((card, index) => (
            <>
              <CardDashboard
                key={index}
                icon={card[0]}
                title={card[1]}
                text={card[2]}
                buttonText={card[3]}
                form={card[4]}
              />
            </>
          ))}
        </CardContainer>
      </Container>
      <MenuProfile />
    </div>
  );
};

export default Dashboard;
