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
  DivMenu,
  CollapseIconContainerMobile,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { openMenuThunk } from "../../store/modules/MenuOpen/thunks";
import { useHistory } from "react-router";

function MenuAside() {
  const open = useSelector((state) => state.open);
  const history = useHistory();
  const level = JSON.parse(localStorage.getItem("permission")) || 1;

  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    history.push("/login");
  };

  return (
    <>
      <CollapseIconContainerMobile open={open}>
        {open ? (
          <ArrowLeft onClick={() => dispatch(openMenuThunk(open))} />
        ) : (
          <ArrowRight onClick={() => dispatch(openMenuThunk(open))} />
        )}
      </CollapseIconContainerMobile>
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
            <DivMenu>
              <IconContainer
                page={history.location.pathname === "/minhas_vacinas"}
                onClick={() => history.push("/minhas_vacinas")}
                level={level}
                open={open}
              >
                <img src={passbook} alt="Caderneta" />
                <span>Minhas Vacinas</span>
              </IconContainer>
              <IconContainer
                page={history.location.pathname === "/vacinas-eletivas"}
                onClick={() => history.push("/vacinas-eletivas")}
                level={level}
                open={open}
              >
                <img src={medical} alt="Vacinas Eletivas" />
                <span>Vacinas Eletivas</span>
              </IconContainer>
            </DivMenu>
            <DivMenu>
              <IconContainer onClick={handleLogout} level={level} open={open}>
                <div>
                  <ImExit />
                </div>
                <span>Logout</span>
              </IconContainer>
            </DivMenu>
          </>
        ) : level === 2 ? (
          <>
            <DivMenu>
              <IconContainer
                page={history.location.pathname === "/registro-vacina"}
                onClick={() => history.push("/registro-vacina")}
                level={level}
                open={open}
              >
                <img src={seringa} alt="Seringa" />
                <span>Registro de Vacina????o</span>
              </IconContainer>
              <IconContainer
                page={history.location.pathname === "/relatorio"}
                level={level}
                open={open}
                onClick={() => history.push("/relatorio")}
              >
                <img src={report} alt="Vacinas Eletivas" />
                <span>Relat??rio</span>
              </IconContainer>
            </DivMenu>
            <DivMenu>
              <IconContainer onClick={handleLogout} level={level} open={open}>
                <div>
                  <ImExit />
                </div>
                <span>Logout</span>
              </IconContainer>
            </DivMenu>
          </>
        ) : (
          <>
            <DivMenu>
              <IconContainer
                level={level}
                open={open}
                page={history.location.pathname === "/dashboard"}
                onClick={() => history.push("/dashboard")}
              >
                <img src={dashboard} alt="Dashboard" />

                <span>Dashboard</span>
              </IconContainer>
              <IconContainer
                level={level}
                open={open}
                page={history.location.pathname === "/relatorio"}
                onClick={() => history.push("/relatorio")}
              >
                <img src={report} alt="Vacinas Eletivas" />
                <span>Relat??rio</span>
              </IconContainer>
            </DivMenu>
            <DivMenu>
              <IconContainer onClick={handleLogout} level={level} open={open}>
                <div>
                  <ImExit />
                </div>
                <span>Logout</span>
              </IconContainer>
            </DivMenu>
          </>
        )}
      </Container>
    </>
  );
}

export default MenuAside;
