import { Container, CardContainer } from "./styles";

import registerUserIcon from "../../assets/register_users_access2.svg";
import vaccineRegisterIcon from "../../assets/register_vaccine_icon.svg";
import stablishmentRegisterIcon from "../../assets/register_stablishment_icon.svg";
import vaccineBondRegisterIcon from "../../assets/register_vaccine_bond_icon.svg";

import Header from "../../components/Header";
import CardDashboard from "../../components/CardDashboard";
import MenuAside from "../../components/MenuAside";
import MenuProfile from "../../components/MenuProfile";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const history = useHistory();
  const permission = JSON.parse(localStorage.getItem("permission")) || 1;

  useEffect(() => {
    if (permission === 1) {
      history.push("/minhas_vacinas");
    }
    if (permission === 2) {
      history.push("/registro-vacina");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        <h2>Dashboard</h2>
        <Header />
        <h3>Cadastros</h3>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <CardContainer>
            {cards.map((card, index) => (
              <CardContainer>
                <CardDashboard
                  key={index}
                  icon={card[0]}
                  title={card[1]}
                  text={card[2]}
                  buttonText={card[3]}
                  form={card[4]}
                />
              </CardContainer>
            ))}
          </CardContainer>
        </motion.div>
      </Container>
      <MenuProfile />
    </div>
  );
};

export default Dashboard;
