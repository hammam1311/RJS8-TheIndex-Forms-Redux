import { combineReducers } from "redux";

import authorReducer from "./author";
import authorsReducer from "./authors";
import errorsReducer from "./errors";

const rootReducer = combineReducers({
  authorState: authorReducer,
  authorsState: authorsReducer,
  errorsState: errorsReducer
});

export default rootReducer;
