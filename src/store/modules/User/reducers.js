import api from "../../../services/api";
const token = localStorage.getItem("token") || "";
const user_id = localStorage.getItem("user_id") || "";
const name = localStorage.getItem("name") || "";

const defaultState = {
  token: token,
  id: user_id,
  name: name,
  permission: "carregando",
  email: "carregando",
  permission: "carregando",
  vaccine: "carregando",
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "@user/SIGN_IN":
      const {
        user: { id, name, email, permission, vaccine },
      } = action;
      const { token } = action;

      return { token, id, name, email, permission, vaccine };

    default:
      return state;
  }
};

export default userReducer;
