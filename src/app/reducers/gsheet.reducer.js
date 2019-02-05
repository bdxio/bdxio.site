import { Types } from '../actions/gsheet.actions';

const defaultState = {
    'Sponsors': [],
    'Orgas': [],
    'Config': {},
    'News': [],
    'Talk assets': [],
    'Speakers': [],
    'Speakers18': [],
    'FAQ': [],
    loaded: false
}

export const GSheetReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Types.DATA_FETCH: {
            const { data } = action.payload;
            const values = Object.keys(data)
                .map(k => {
                    return { [k]: data[k].elements }
                }).reduce((acc, cur, i) => {
                    if (Object.keys(cur)[0] === 'Config') {
                        const configs = cur['Config'].map(c => {
                            const d = {};
                            d[c['Propriété']] = c['Valeur'];
                            return d;
                        });
                        acc[Object.keys(cur)[0]] = Object.assign(...configs);
                    } else {
                        acc[Object.keys(cur)[0]] = cur[Object.keys(cur)[0]];
                    }
                    return acc;
                }, {});
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