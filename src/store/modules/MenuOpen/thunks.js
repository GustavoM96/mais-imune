import { openMenu } from "./actions";

export const openMenuThunk = (open) => (dispatch) => {
  dispatch(openMenu(!open));
};
