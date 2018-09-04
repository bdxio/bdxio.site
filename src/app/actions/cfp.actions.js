import { get } from "axios";

export const Types = {
  GET_TALKS: "GET_TALKS"
};

export class Actions {

  static getTalks() {
    return dispatch => {
      get("https://cfp.bdx.io/api/conferences/BdxIO2018/talks").then(res => {
        return dispatch({
          type: Types.GET_TALKS,
          payload: { talks: res.data }
        });
      });
    };
  }
}
