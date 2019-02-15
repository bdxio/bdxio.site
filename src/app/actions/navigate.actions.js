import { Constants } from "../constants";

export const Types = {
  FOCUS_SUBSCRIPTION: "FOCUS_SUBSCRIPTION"
};

export class Actions {
  static focusSubscription() {
    return {
      type: Types.FOCUS_SUBSCRIPTION
    };
  }
}
