import { LOGIN } from "./actionsType";

export const loginAction = (token) => ({
  type: LOGIN,
  token,
});
