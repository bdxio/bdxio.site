import { Types } from '../actions/gsheet.actions';

const defaultState = {
    'Sponsors': [],
    'Orgas': [],
    'Config': [],
    'News': [],
    'Talk assets': [],
    'Speakers': [],
    loaded: false
}

export const GSheetReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Types.DATA_FETCH: {
            const { data } = action.payload;
            const _state = Object.keys(data)
                .map(k => {
                    return { [k]: data[k].elements }
                }).reduce((acc, cur, i) => {
                    acc[Object.keys(cur)[0]] = cur[Object.keys(cur)[0]];
                    return acc;
                }, {});
            return {
                ..._state,
                loaded: true
            }
        }
        default:
            return state
    }
}