import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import openMenuReducers from "./modules/MenuOpen/reducers";

const reducers = combineReducers({
  open: openMenuReducers,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
