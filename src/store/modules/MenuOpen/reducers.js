import { OPEN_MENU } from "./actionsType";

const openMenuReducers = (state = false, actions) => {
  switch (actions.type) {
    case OPEN_MENU:
      return actions.open;
    default:
      return state;
  }
};

export default openMenuReducers;
