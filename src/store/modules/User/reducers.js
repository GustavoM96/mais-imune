import api from "../../../services/api";
const token = localStorage.getItem("token") || "";
const user_id = localStorage.getItem("user_id") || "";

const defaultState = {
  token: token,
  id: user_id,
  name: "sem nome",
  permission: "sem permissao",
  email: "sem email",
  permission: "sem email",
  vaccine: "sem vacina",
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
