import { Container } from "./styles";

import Header from "../../components/Header";
import MenuAside from "../../components/MenuAside";
import MenuProfile from "../../components/MenuProfile";
import ReportComponent from "../../components/ReportComponent";

const UserReport = () => {
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
