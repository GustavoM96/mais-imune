import React, { useEffect, useState } from "react";
import FormLogin from "../../components/FormLogin";
import api from "../../services/api";

import { Container } from "./styles";

function Login() {
  const [user, setUser] = useState({});
  const token = JSON.parse(localStorage.getItem("token")) || "";

  useEffect(() => {}, []);

  return (
    <Container>
      <FormLogin />
    </Container>
  );
}

export default Login;
