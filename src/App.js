import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";
import "./styles/globals.css";

function App() {
  return (
    <div className="flex">
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
