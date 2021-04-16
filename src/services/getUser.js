import { useSelector } from "react-redux";
import { signIn } from "../store/modules/User/actions";
import api from "./api";
import jwt_decode from "jwt-decode";

const tokenGet = JSON.parse(localStorage.getItem("token")) || "";
const user_id = tokenGet ? jwt_decode(tokenGet).sub : 0;

export const getUser = (
  dispatch,
  history = null,
  id = user_id,
  token = tokenGet
) => {
  console.log(id);
  const headers = {
    headers: { Authorization: `Bearer ${token}` },
  };

  api
    .get(`/users/${id}`, headers)
    .then((resp) => {
      console.log(resp.data);
      dispatch(signIn(token, resp.data));
    })
    .catch((resp) => {
      if (history && history.location.pathname !== "/") {
        localStorage.clear();
        history.push("/login");
      }
    });
};
