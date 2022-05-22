export const state = () => ({
  toast: null,
  duration: 6000,
});

export const mutations = {
  ADD: (state, payload) => {
    state.toast = payload;
  },
  RESET: (state) => (state.toast = null),
};

export const actions = {
  add({ commit, dispatch, state }, payload) {
    if (state.toast) {
      dispatch("reset");
    }

    const { message = null, type = "default" } = payload;

    if (!message) {
      return;
    }

    commit("ADD", { type, message });

    setTimeout(() => {
      dispatch("reset");
    }, state.duration);
  },
  reset({ commit }) {
    commit("RESET");
  },
};
