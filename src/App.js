import MenuAside from "./components/MenuAside";
import MenuProfile from "./components/MenuProfile";
import Routes from "./routes";
import "./styles/globals.css";

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
