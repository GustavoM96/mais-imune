import { Container } from "./styles";

import Header from "../../components/Header";
import PatientSearch from "../../components/PatientSearch";
import MenuAside from "../../components/MenuAside";
import MenuProfile from "../../components/MenuProfile";
import { useHistory } from "react-router";
import { useEffect } from "react";
import { motion } from "framer-motion";

const RegisterVacine = () => {
  const history = useHistory();
  const permission = JSON.parse(localStorage.getItem("permission")) || 1;

  useEffect(() => {
    if (permission === 3) {
      history.push("/dashboard");
    }
    if (permission === 1) {
      history.push("/minhas_vacinas");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex">
      <MenuAside />
      <Container>
        <h2>Registro de Vacinas</h2>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h3>Busca por paciente</h3>
          <PatientSearch></PatientSearch>
        </motion.div>
      </Container>
      <MenuProfile />
    </div>
  );
};

export default RegisterVacine;
