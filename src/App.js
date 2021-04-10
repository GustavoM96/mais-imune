import { useHistory } from "react-router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MenuAside from "./components/MenuAside";
import MenuProfile from "./components/MenuProfile";
import Routes from "./routes";
import "./styles/globals.css";
import Header from './components/Header'

function App() {
  const history = useHistory();
  const page = history.location.pathname;

  return (
    <div className="flex">
      <Header />
    </div>
  );
}

export default App;
