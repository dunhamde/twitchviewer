import { combineReducers } from "redux";
import HeaderReducer from "./reducer_header";
import FetchReducer from "./reducer_fetch";
import SearchReducer from "./reducer_search";

const rootReducer = combineReducers({
  header: HeaderReducer,
  fetch: FetchReducer,
  search: SearchReducer
});

export default rootReducer;
