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
import CardAside from "../CardAside";

function CardAsideList({ user }) {
  const [value, setValue] = useState("");
  const [allVaccines, setAllVaccines] = useState(false);
  const [vaccines, setVaccines] = useState([]);
  const [userVaccines, setUserVaccines] = useState([]);
  const token = localStorage.getItem("token") || "";

  const filterVaccine = (listVaccine) => {
    const vaccineRequired = listVaccine.filter((vac) => vac.required !== false);
    const userVaccinesId = user.vaccines.map((vac) => vac.id);

    const nextVaccine = vaccineRequired.filter(
      (vac) => !userVaccinesId.includes(vac.id)
    );
    setVaccines(nextVaccine.filter((vac, ind) => ind < 5));
  };

  useEffect(() => {
    if (user.name !== "usuario") {
      setUserVaccines(user.vaccines.filter((vac, ind) => ind < 5));
      console.log(user.vaccines);
      console.log(userVaccines);

      api
        .get("/vaccines", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        })
        .then((response) => filterVaccine(response.data))
        .catch((e) => console.log(e));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  console.log(userVaccines);

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
            Próximas vacinas
          </StyledSpan>
          <Separator />
          <StyledSpan active={allVaccines} onClick={toogleAllVaccinesOn}>
            Últimas vacinas
          </StyledSpan>
        </div>
      </Header>
      <>
        {!allVaccines ? (
          <VaccinesContainer>
            {vaccines.map((vaccine, index) => (
              <CardAside
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
                <CardAside
                  hasLocal={false}
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

export default CardAsideList;
