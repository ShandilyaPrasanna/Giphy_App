import { combineReducers } from "redux";
import gifReducer from "./getGIFReducer";

export const reducers = combineReducers({
  app: gifReducer
});
