import { useSelector } from "react-redux";
import { signIn } from "../store/modules/User/actions";
import api from "./api";
const token = localStorage.getItem("token") || "";
const user_id = localStorage.getItem("user_id") || "";

export const getUser = (dispatch, id) => {
  if (user_id && token) {
    const headers = {
      headers: { Authorization: `Bearer ${JSON.parse(token)}` },
    };

    api
      .get(`/users/${id}`, headers)
      .then((resp) => {
        console.log(resp.data);
        dispatch(signIn(token, resp.data));
      })
      .catch((resp) => console.log(resp));
  }
};
