import passbook from "../../assets/passbook.svg";
import medical from "../../assets/medical.svg";
import seringa from "../../assets/seringa.svg";
import report from "../../assets/report.svg";
import dashboard from "../../assets/dashboard.svg";

import { ImExit } from "react-icons/im";

import {
  Container,
  ArrowLeft,
  ArrowRight,
  CollapseIconContainer,
  IconContainer,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { openMenuThunk } from "../../store/modules/MenuOpen/thunks";
import { useHistory } from "react-router";

function MenuAside() {
  const open = useSelector((state) => state.open);
  const history = useHistory();
  const level = JSON.parse(localStorage.getItem("permission")) || 1;

  //pegar level do user

  // const level = 1;

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <Container open={open} level={level}>
      <CollapseIconContainer>
        {open ? (
          <ArrowLeft onClick={() => dispatch(openMenuThunk(open))} />
        ) : (
          <ArrowRight onClick={() => dispatch(openMenuThunk(open))} />
        )}
      </CollapseIconContainer>

      {level === 1 ? (
        <>
          <div>
            <IconContainer
              onClick={() => history.push("/minhas_vacinas")}
              level={level}
              open={open}
            >
              <img src={passbook} alt="Caderneta" /> <span>Minhas Vacinas</span>
            </IconContainer>
            <IconContainer
              onClick={() => history.push("/vacinas-eletivas")}
              level={level}
              open={open}
            >
              <img src={medical} alt="Vacinas Eletivas" />
              <span>Vacinas Eletivas</span>
            </IconContainer>
          </div>
          <div>
            <IconContainer onClick={handleLogout} level={level} open={open}>
              <div>
                <ImExit />
              </div>
              <span>Logout</span>
            </IconContainer>
          </div>
        </>
      ) : level === 2 ? (
        <>
          <div>
            <IconContainer
              onClick={() => history.push("/registro-vacina")}
              level={level}
              open={open}
            >
              <img src={seringa} alt="Seringa" />
              <span>Registro de Vacinação</span>
            </IconContainer>
            <IconContainer
              onClick={() => history.push("/relatorio")}
              level={level}
              open={open}
            >
              <img src={report} alt="Vacinas Eletivas" />
              <span>Relatório</span>
            </IconContainer>
          </div>
          <div>
            <IconContainer onClick={handleLogout} level={level} open={open}>
              <div>
                <ImExit />
              </div>
              <span>Logout</span>
            </IconContainer>
          </div>
        </>
      ) : (
        <>
          <div>
            <IconContainer
              level={level}
              open={open}
              onClick={() => history.push("/dashboard")}
            >
              <img src={dashboard} alt="Dashboard" />
              <span>Dashboard</span>
            </IconContainer>
            <IconContainer
              level={level}
              open={open}
              onClick={() => history.push("/relatorio")}
            >
              <img src={report} alt="Vacinas Eletivas" />
              <span>Relatório</span>
            </IconContainer>
          </div>
          <div>
            <IconContainer onClick={handleLogout} level={level} open={open}>
              <div>
                <ImExit />
              </div>
              <span>Logout</span>
            </IconContainer>
          </div>
        </>
      )}
    </Container>
  );
}

export default MenuAside;
