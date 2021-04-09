import MenuAside from "./components/MenuAside";
import MenuProfile from "./components/MenuProfile";
import Routes from "./routes";
import "./styles/globals.css";
// import {} from "./components/";
// import CardVaccine from "./components/CardVaccine";

function App() {
  return (
    <div className="flex">
      <MenuAside />
      <Routes />
      <MenuProfile />
    </div>
  );
}

export default App;
