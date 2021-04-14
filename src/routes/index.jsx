import React from "react";
import { Redirect, Route, Switch } from "react-router";
import UserVaccines from "../pages/UserVaccines";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/AdminDashboard";
import UserReport from "../pages/UserReport";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RegisterVacine from "../pages/RegisterVaccines";
import ElectiveVaccines from "../pages/ElectiveVaccines";
import { isLoged } from "../services/isLoged";

function LogedRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoged() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
function NotLogedRouter({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoged() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/minhas_vacinas",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function routes() {
  return (
    <Switch>
      <NotLogedRouter exact path="/" component={Home} />
      <NotLogedRouter path="/login" component={Login} />
      <LogedRouter path="/minhas_vacinas" component={UserVaccines} />
      <LogedRouter path="/registro" component={Register} />
      <LogedRouter path="/vacinas-eletivas" component={ElectiveVaccines} />
      <LogedRouter path="/registro-vacina" component={RegisterVacine} />
      <LogedRouter path="/relatorio" component={UserReport} />
      <LogedRouter path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default routes;
