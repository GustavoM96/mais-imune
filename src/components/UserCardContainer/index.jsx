import CardVaccine from "../CardVaccine";
import { GrFormSearch } from "react-icons/gr";

import {
  Container,
  Header,
  Separator,
  VaccinesContainer,
  SearchBar,
} from "./styles";

function UserCardContainer({ user, vaccines }) {
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
      <>
        {vaccines?.length > 0 && (
          <VaccinesContainer>
            {vaccines.map((vaccine, index) => (
              <CardVaccine
                key={index}
                date={
                  user.vaccines.filter((vac) => vac.id === vaccine.id)[0]
                    .aplication
                }
                vaccine={vaccine.name}
                description={vaccine.description}
              />
            ))}
          </VaccinesContainer>
        )}
      </>
    </Container>
  );
}

export default UserCardContainer;
