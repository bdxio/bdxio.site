import { combineReducers } from "redux";
import { GSheetReducer } from "./gsheet.reducer";
import { NavigateReducer } from "./navigate.reducer";
import { CFPReducer } from "./cfp.reducer";

export default combineReducers({
  gsheet: GSheetReducer,
  navigate: NavigateReducer,
  cfp: CFPReducer
});
