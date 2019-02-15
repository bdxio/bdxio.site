import { get } from "axios";

export const Types = {
  GET_TALKS: "GET_TALKS"
};

export class Actions {
  static getTalks() {
    return dispatch => {
      get("https://cfp.bdx.io/api/conferences/BdxIO2018/schedules/friday/").then(res => {
        const { slots } = res.data;
        const talks = slots.reduce((prev, curr) => {
          if (curr.talk && curr.talk.talkType !== "Keynote") prev.push(curr.talk);
          return prev;
        }, []);
        return dispatch({
          type: Types.GET_TALKS,
          payload: { talks }
        });
      });
    };

    // return dispatch => {
    //   get("https://cfp.bdx.io/api/conferences/BdxIO2018/talks").then(res => {
    //     return dispatch({
    //       type: Types.GET_TALKS,
    //       payload: { talks: res.data }
    //     });
    //   });
    // };
  }
}
