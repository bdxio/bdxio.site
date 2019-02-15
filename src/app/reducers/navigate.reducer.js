import { Types } from "../actions/navigate.actions";

const defaultState = {
  subscriptionHasFocused: false
};

export const NavigateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case Types.FOCUS_SUBSCRIPTION:
      return { subscriptionHasFocused: !state.subscriptionHasFocused };
    default:
      return state;
  }
};
