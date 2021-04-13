import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import openMenuReducers from "./modules/MenuOpen/reducers";
import userReducer from "./modules/User/reducers";

const reducers = combineReducers({
  open: openMenuReducers,
  user: userReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
