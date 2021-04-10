import CardVaccine from "../CardVaccine";
import { GrFormSearch } from "react-icons/gr";

import {
  Container,
  Header,
  Separator,
  VaccinesContainer,
  SearchBar,
} from "./styles";

function UserCardContainer({ user }) {
  console.log(
    "🚀 ~ file: index.jsx ~ line 13 ~ UserCardContainer ~ user",
    user
  );
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
        {user && (
          <VaccinesContainer>
            {user.vaccines.map((vaccine, index) => (
              <CardVaccine
                key={index}
                date={vaccine.aplication}
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
