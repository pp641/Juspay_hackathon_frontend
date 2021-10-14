import { combineReducers, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import authReducer from "./Component/auth-reducer";
const rootReducer = combineReducers({
  authReducer,
});

const store =
  process.env.NODE_ENV === "development"
    ? createStore(rootReducer, applyMiddleware(promise, thunk, logger))
    : createStore(rootReducer, applyMiddleware(promise, thunk));

export default store;
