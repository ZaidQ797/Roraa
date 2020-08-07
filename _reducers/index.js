import { combineReducers } from "redux";
import { authentication } from "./authentication.reducer";
import { worldReducer } from "./world";

const rootReducer = combineReducers({
  authentication: authentication,
  world: worldReducer,
});
export default rootReducer;
