import { useSelector } from "react-redux";
import { signIn } from "../store/modules/User/actions";
import api from "./api";
const token = localStorage.getItem("token") || "";
const user_id = localStorage.getItem("user_id") || "";

export const getUser = (dispatch) => {
  if (user_id && token) {
    console.log(user_id);
    console.log(token);
    const headers = {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    };

    api
      .get(`/users/${user_id}`, headers)
      .then((resp) => {
        console.log(resp);
        dispatch(signIn(token, resp.data));
      })
      .catch((resp) => console.log(resp));
  }
};
