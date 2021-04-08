/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Route, Switch } from "react-router";

function routes() {
  return (
    <Switch>
      <Route exact path="/" component="Welcome" />
      <Route path="/login" component="Login" />
      <Route path="/registro" component="Register" />
      <Route path="/home" component="Home" />
      // usuario comum
      <Route path="/minhas-vacinas" component="Vaccines" />
      <Route path="/vacinas-eletivas" component="VaccinesElectives" />
      //profissional de saude
      <Route path="/registro-vacina" component="VaccineRegister" />
      //admin
      <Route path="/dashboard" component="DashboardAdmin" />
      //error
      <Route component="404" />
    </Switch>
  );
}

export default routes;
