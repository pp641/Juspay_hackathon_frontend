import { combineReducers, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import authReducer from "./Component/Auth/auth-reducer";
import skillReducer from "./Component/Skill/skill-reducer";
const rootReducer = combineReducers({
  authReducer,
  skillReducer,
});

const store =
  process.env.NODE_ENV === "development"
    ? createStore(rootReducer, applyMiddleware(promise, thunk, logger))
    : createStore(rootReducer, applyMiddleware(promise, thunk));

export default store;
