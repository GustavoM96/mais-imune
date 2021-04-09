import { useHistory } from "react-router";
import MenuAside from "./components/MenuAside";
import MenuProfile from "./components/MenuProfile";
import Routes from "./routes";
import "./styles/globals.css";
// import {} from "./components/";
// import CardVaccine from "./components/CardVaccine";

function App() {
  const history = useHistory();
  const page = history.location.pathname;

  return (
    <div className="flex">
      {page === "/login" || page === "/registro" || page === "/home" ? (
        <Routes />
      ) : (
        <>
          <MenuAside />
          <Routes />
          <MenuProfile />
        </>
      )}
    </div>
  );
}

export default App;
