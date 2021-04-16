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
    <motion.div
      className="flex"
      initial={{ translateY: "-100%" }}
      animate={{ translateY: "0%" }}
      transition={{ duration: 0.5 }}
    >
      <MenuAside />
      <Container>
        <h2>Relatório</h2>
        <Header />
        <ReportComponent />
      </Container>
      <MenuProfile />
    </motion.div>
  );
};

export default UserReport;
