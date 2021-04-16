import { Container } from "./styles";

import Header from "../../components/Header";
import MenuAside from "../../components/MenuAside";
import MenuProfile from "../../components/MenuProfile";
import ReportComponent from "../../components/ReportComponent";
import { useEffect } from "react";
import { useHistory } from "react-router";
import { motion } from "framer-motion";

const UserReport = () => {
  const history = useHistory();
  const permission = JSON.parse(localStorage.getItem("permission")) || 1;

  useEffect(() => {
    if (permission === 1) {
      history.push("/minhas_vacinas");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex">
      <MenuAside />
      <Container>
        <h2>Relatório</h2>
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ReportComponent />
        </motion.div>
      </Container>
      <MenuProfile />
    </div>
  );
};

export default UserReport;
