import { LOGIN } from "./actionsType";

const loginReduces = (state = "", actions) => {
  switch (actions.type) {
    case LOGIN:
      return actions.token;
    default:
      return state;
  }
};

export default loginReduces;
