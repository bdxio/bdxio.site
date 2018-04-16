require('script-loader!../../static/libs/tabletop.min.js');
import { Constants } from '../constants';

export const Types = {
    DATA_FETCH: 'PARAMS_FETCH'
}

export class Actions {

    static fetch() {
        return (dispatch) => {
            Tabletop.init({
                key: Constants.gSheetKey,
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