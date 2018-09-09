import { Types } from '../actions/gsheet.actions';

const defaultState = {
    'Sponsors': [],
    'Orgas': [],
    'Config': {},
    'News': [],
    'Talk assets': [],
    'Speakers': [],
    'Speakers17': [],
    'FAQ': [],
    loaded: false
}

export const GSheetReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Types.DATA_FETCH: {
            const values = action.payload;
            return {
                ...state,
                ...values,
                loaded: true
            }
        }
        default:
            return state
    }
}