import React from "react";
import CardVaccine from "../CardVaccine";
import { GrFormSearch } from "react-icons/gr";

import {
  Container,
  Header,
  Separator,
  VaccinesContainer,
  SearchBar,
} from "./styles";

function UserCardContainer() {
  return (
    <Container>
      <Header>
        <div>
          <span> Pŕoximas vacinas </span>
          <Separator />
          <span> Últimas Vacinas</span>
        </div>
        <SearchBar>
          <input />
          <GrFormSearch />
        </SearchBar>
      </Header>
      <VaccinesContainer>
        <CardVaccine />
        <CardVaccine />
        <CardVaccine />
        <CardVaccine />
        <CardVaccine />
        <CardVaccine />
        <CardVaccine />
      </VaccinesContainer>
    </Container>
  );
}

export default UserCardContainer;
