require('script-loader!../../static/libs/tabletop.min.js');
import { Constant } from '../constants';

export const Types = {
    DATA_FETCH: 'PARAMS_FETCH'
}

export class Actions {

    static fetch() {
        return (dispatch) => {
            Tabletop.init({
                key: Constant.gSheetKey,
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