import { Types } from "../actions/cfp.actions";

const defaultState = {
  talks: [],
};

export const CFPReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.GET_TALKS:
      return { talks: action.payload.talks };
    default:
      return state;
  }
};
