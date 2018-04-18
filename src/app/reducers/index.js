import { combineReducers } from 'redux';
import { GSheetReducer } from './gsheet.reducer';
import { NavigateReducer } from './navigate.reducer';

export default combineReducers({
    gsheet: GSheetReducer,
    navigate: NavigateReducer
});