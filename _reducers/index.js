import { combineReducers } from "redux";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";
import messageReducer from "./messagesReducer";
import notifyReducer from "./notifyReducer";
const rootReducer = combineReducers({
  authReducer,
  homeReducer,
  messageReducer,
  notifyReducer
});
export default rootReducer;
