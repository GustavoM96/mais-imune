import React, { useState } from "react";
import passbook from "../../assets/passbook.svg";
import medical from "../../assets/medical.svg";
import logout from "../../assets/logout.svg";
import seringa from "../../assets/seringa.svg";
import report from "../../assets/report.svg";
import dashboard from "../../assets/dashboard.svg";

import {
  Container,
  ArrowLeft,
  ArrowRight,
  CollapseIconContainer,
  IconContainer,
} from "./styles";

function MenuAside() {
  const props = { open: false, level: 3 };

  const { level } = props;
  // recebo da store
  const [open, setOpen] = useState(true);

  return (
    <Container open={open} level={level}>
      <CollapseIconContainer>
        {open ? (
          <ArrowLeft onClick={() => setOpen(!open)} />
        ) : (
          <ArrowRight onClick={() => setOpen(!open)} />
        )}
      </CollapseIconContainer>

      {level === 1 ? (
        <>
          <div>
            <IconContainer level={level} open={open}>
              <img src={passbook} alt="Caderneta" /> <span>Minhas Vacinas</span>
            </IconContainer>
            <IconContainer level={level} open={open}>
              <img src={medical} alt="Vacinas Eletivas" />
              <span>Vacinas Eletivas</span>
            </IconContainer>
          </div>
          <div>
            <IconContainer level={level} open={open}>
              <img src={logout} alt="Logout" />
              <span>Logout</span>
            </IconContainer>
          </div>
        </>
      ) : level === 2 ? (
        <>
          <div>
            <IconContainer level={level} open={open}>
              <img src={seringa} alt="Seringa" />{" "}
              <span>Registro de Vacinação</span>
            </IconContainer>
            <IconContainer level={level} open={open}>
              <img src={report} alt="Vacinas Eletivas" />
              <span>Relatório</span>
            </IconContainer>
          </div>
          <div>
            <IconContainer level={level} open={open}>
              <img src={logout} alt="Logout" />
              <span>Logout</span>
            </IconContainer>
          </div>
        </>
      ) : (
        <>
          <div>
            <IconContainer level={level} open={open}>
              <img src={dashboard} alt="Dashboard" />
              <span>Dashboard</span>
            </IconContainer>
            <IconContainer level={level} open={open}>
              <img src={report} alt="Vacinas Eletivas" />
              <span>Relatório</span>
            </IconContainer>
          </div>
          <div>
            <IconContainer level={level} open={open}>
              <img src={logout} alt="Logout" />
              <span>Logout</span>
            </IconContainer>
          </div>
        </>
      )}
    </Container>
  );
}

export default MenuAside;
