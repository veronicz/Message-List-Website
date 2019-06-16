import { combineReducers } from "redux";
import MessagesReducer from "./MessagesReducer";
import DetailedViewReducer from "./DetailedViewReducer";

export default combineReducers({
  messages: MessagesReducer,
  view: DetailedViewReducer
});
