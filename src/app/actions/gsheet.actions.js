require('script-loader!../../static/libs/tabletop.min.js');
import { Constants } from '../constants';

export const Types = {
    DATA_FETCH: 'DATA_FETCH',
}

export class Actions {

    static fetch() {
        return (dispatch) => {
            Tabletop.init({
                key: Constants.gSheets.published_data,
                callback: (data) => {
                    return dispatch({
                        type: Types.DATA_FETCH,
                        payload: { data }
                    })
                }
            });
        }
    }

    static fetchFAQ() {
        return (dispatch) => {
            Tabletop.init({
                key: Constants.gSheets.FAQ,
                callback: (data) => {
                    return dispatch({
                        type: Types.DATA_FETCH,
                        payload: { data }
                    })
                }
            });
        }
    }
}