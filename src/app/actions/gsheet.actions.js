require('script-loader!../../static/libs/tabletop.min.js');

export const Types = {
    DATA_FETCH: 'PARAMS_FETCH'
}

export class Actions {

    static fetch() {
        return (dispatch) => {
            Tabletop.init({
                key: '1bXJCYX-b4cyDW4sT2xWTx5rYL6Mb3LmBTMthge_J6KA',
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