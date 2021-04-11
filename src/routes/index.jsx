import React from "react";
import { Route, Switch } from "react-router";
import UserVaccines from "../pages/UserVaccines";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/AdminDashboard";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import ElectiveVaccines from "../pages/ElectiveVaccines";

function routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/minhas_vacinas" component={UserVaccines} />
      <Route path="/registro" component={Register} />
      <Route path="/vacinas-eletivas" component={ElectiveVaccines} />
      <Route path="/registro-vacina" component="VaccineRegister" />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default routes;
