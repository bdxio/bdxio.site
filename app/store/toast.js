export const state = () => ({
  toast: null,
});

export const getters = {
  toast: (state) => state.toast,
};

export const mutations = {
  SET_TOAST: (state, toast) => {
    state.toast = toast;

    console.log(state);
    return;
  },
  RESET_TOAST: (state) => (state.toast = null),
};

export const actions = {
  addToast({ state, commit }, payload) {
    console.log(state);
    if (state.toast) {
      commit("RESET_TOAST");
    }

    const { message = null, type = "default", duration = 3000 } = payload;

    if (!message) {
      return;
    }

    commit("SET_TOAST", {
      message,
      type,
    });

    setTimeout(() => {
      commit("RESET_TOAST");
    }, duration);
  },
};
