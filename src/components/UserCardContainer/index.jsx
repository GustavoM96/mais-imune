import CardVaccine from "../CardVaccine";
import { GrFormSearch } from "react-icons/gr";

import {
  Container,
  Header,
  Separator,
  VaccinesContainer,
  SearchBar,
  StyledSpan,
  NoVaccines,
} from "./styles";
import { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import Skeleton from "@material-ui/lab/Skeleton";

function UserCardContainer({ user }) {
  // const [value, setValue] = useState("");
  const [allVaccines, setAllVaccines] = useState(false);
  const [vaccines, setVaccines] = useState([]);
  const [userVaccines, setUserVaccines] = useState([]);
  const [vaccinesFiltered, setVaccinesFiltered] = useState([]);
  const [userVaccinesFiltered, setUserVaccinesFiltered] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const token = localStorage.getItem("token") || "";

  useEffect(() => {
    if (user) {
      setUserVaccines(user.vaccines);
      setUserVaccinesFiltered(user.vaccines);
    }
    api
      .get("/vaccines", {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        setVaccines(response.data);
        setVaccinesFiltered(response.data);
      })
      .catch((e) => console.log("ERRRRO"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (user) {
      setUserVaccines(user.vaccines);
      setUserVaccinesFiltered(user.vaccines);
    }
  }, [user]);

  const handleInput = (e) => {
    const text = e.target.value;
    setInputValue(text);

    setVaccinesFiltered(
      vaccines.filter((vaccine) =>
        vaccine.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      )
    );
    setUserVaccinesFiltered(
      userVaccines.filter((vaccine) =>
        vaccine.name.toLocaleLowerCase().includes(text.toLocaleLowerCase())
      )
    );
  };

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
        </div>
        <div>
          <Separator />
        </div>

        <div>
          <StyledSpan active={allVaccines} onClick={toogleAllVaccinesOn}>
            Todas Vacinas
          </StyledSpan>
        </div>

        <SearchBar>
          <input
            onInput={(e) => {
              handleInput(e);
            }}
            value={inputValue}
            placeholder={"digite o nome da vacina"}
          />
          <GrFormSearch />
        </SearchBar>
      </Header>
      <>
        {!user && (
          <div className="skeleton">
            <Skeleton variant="rect" width={250} height={210} />
            <Skeleton variant="rect" width={250} height={210} />
            <Skeleton variant="rect" width={250} height={210} />
          </div>
        )}
        {allVaccines ? (
          <VaccinesContainer>
            {vaccinesFiltered.map((vaccine, index) => (
              <CardVaccine
                key={index}
                vaccine={vaccine.name}
                description={vaccine.description}
              />
            ))}
          </VaccinesContainer>
        ) : user && userVaccinesFiltered.length > 0 ? (
          <VaccinesContainer>
            {userVaccinesFiltered.map((vaccine, index) => (
              <CardVaccine
                key={index}
                date={vaccine.aplication}
                vaccine={vaccine.name}
                description={vaccine.description}
              />
            ))}
          </VaccinesContainer>
        ) : (
          user &&
          userVaccinesFiltered.length === 0 && (
            <NoVaccines>
              <h2>Sem vacinas cadastradas.</h2>
            </NoVaccines>
          )
        )}
      </>
    </Container>
  );
}

export default UserCardContainer;
