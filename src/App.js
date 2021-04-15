import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Routes from "./routes";
import { getUser } from "./services/getUser";
import "./styles/globals.css";

function App() {
  const dispatchUser = useDispatch((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    getUser(dispatchUser, history);
  }, []);
  return (
    <div className="flex">
      <ToastContainer />
      <Routes />
    </div>
  );
}

export default App;
