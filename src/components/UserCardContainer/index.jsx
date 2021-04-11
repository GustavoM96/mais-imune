import CardVaccine from "../CardVaccine";
import { GrFormSearch } from "react-icons/gr";

import {
  Container,
  Header,
  Separator,
  VaccinesContainer,
  SearchBar,
  StyledSpan,
} from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";

function UserCardContainer({ user }) {
  // const [value, setValue] = useState("");
  const [allVaccines, setAllVaccines] = useState(false);
  const [vaccines, setVaccines] = useState([]);
  const [userVaccines, setUserVaccines] = useState([]);
  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    if (user) {
      setUserVaccines(user.vaccines);
    }
    api
      .get("/vaccines", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => setVaccines(response.data))
      .catch((e) => console.log(e));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      setUserVaccines(user.vaccines);
    }
  }, [user]);

  const toogleAllVaccinesOn = () => {
    setAllVaccines(true);
  };

  const toogleAllVaccinesOff = () => {
    setAllVaccines(false);
  };

  return (
    <Container>
      <Header>
        <div>
          <StyledSpan active={!allVaccines} onClick={toogleAllVaccinesOff}>
            Minhas vacinas
          </StyledSpan>
          <Separator />
          <StyledSpan active={allVaccines} onClick={toogleAllVaccinesOn}>
            Todas Vacinas
          </StyledSpan>
        </div>
        <SearchBar>
          <input />
          <GrFormSearch />
        </SearchBar>
      </Header>
      <>
        {allVaccines ? (
          <VaccinesContainer>
            {vaccines.map((vaccine, index) => (
              <CardVaccine
                key={index}
                vaccine={vaccine.name}
                description={vaccine.description}
              />
            ))}
          </VaccinesContainer>
        ) : (
          user && (
            <VaccinesContainer>
              {userVaccines.map((vaccine, index) => (
                <CardVaccine
                  key={index}
                  date={vaccine.aplication}
                  vaccine={vaccine.name}
                  description={vaccine.description}
                />
              ))}
            </VaccinesContainer>
          )
        )}
      </>
    </Container>
  );
}

export default UserCardContainer;
