import { combineReducers } from 'redux';
import { GSheetReducer } from './gsheet.reducer';

export default combineReducers({
    gsheet: GSheetReducer
});