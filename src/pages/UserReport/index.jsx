import { Container } from "./styles";

import Header from "../../components/Header";
import MenuAside from "../../components/MenuAside";
import MenuProfile from "../../components/MenuProfile";
import ReportComponent from "../../components/ReportComponent";
import { useEffect } from "react";
import { useHistory } from "react-router";

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
        <ReportComponent />
      </Container>
      <MenuProfile />
    </div>
  );
};

export default UserReport;
