import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import {
  userListReducer,
  userSaveReducer,
  userDeleteReducer,
} from "./reducers/userReducers";

import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  userList: userListReducer,
  userSave: userSaveReducer,
  userDelete: userDeleteReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
